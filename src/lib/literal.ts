'use server';

import { unstable_noStore as noStore } from 'next/cache';

import { getBlurData } from 'config/contentlayer/rehype/blur';

const {
  LITERAL_PROFILE_ID: profileId = '',
  LITERAL_ACCESS_TOKEN: accessToken = '',
} = process.env;

const readingBooksQuery = `
query booksByReadingStateAndProfile(
  $limit: Int!
  $offset: Int!
  $readingStatus: ReadingStatus!
  $profileId: String!
) {
  booksByReadingStateAndProfile(
    limit: $limit
    offset: $offset
    readingStatus: $readingStatus
    profileId: $profileId
  ) {
    ... on Book {
      id
      slug
      title
      cover
      authors {
        name
      }
      gradientColors
    }
  }
}
`;

const bookProgressQuery = `
query readingProgresses($bookIds: [String!]!, $active: Boolean) {
  readingProgresses(bookIds: $bookIds, active: $active) {
    ... on ReadingProgress {
      bookId
      progress
      capacity
      completed
    }
  }
}
`;

interface GraphQLResponse<T> {
  data?: T | null;
  errors?: Array<{ message: string }>;
}

interface Book {
  id: string;
  slug: string;
  title: string;
  cover: string;
  authors: Array<{
    id: string;
    name: string;
  }>;
  gradientColors: Array<string>;
  finished?: boolean;
}

interface ReadingProgress {
  bookId: string;
  progress: number;
  capacity: number;
  completed: boolean;
}

type ReadingBooksResponse = GraphQLResponse<{
  booksByReadingStateAndProfile: Array<Book>;
}>;

type ReadingProgressResponse = GraphQLResponse<{
  readingProgresses: Array<ReadingProgress>;
}>;

const getReadingBooks = async (
  finished: boolean = false,
): Promise<ReadingBooksResponse> => {
  return fetch('https://literal.club/graphql/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: readingBooksQuery,
      variables: {
        profileId,
        readingStatus: finished ? 'FINISHED' : 'IS_READING',
        limit: 1,
        offset: 0,
      },
    }),
    next: { revalidate: 21600 },
  }).then((res) => res.json());
};

const getBookProgress = async (
  bookId: string,
): Promise<ReadingProgressResponse> => {
  return fetch('https://literal.club/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      query: bookProgressQuery,
      variables: {
        bookIds: [bookId],
        active: true,
      },
    }),
    next: { revalidate: 21600 },
  }).then((res) => res.json());
};

type BookWithProgress = Book &
  Partial<ReadingProgress> & {
    coverData?: Awaited<ReturnType<typeof getBlurData>>;
  };

export const getReadingProgress = async (): Promise<
  BookWithProgress | undefined
> => {
  noStore();
  try {
    let finished = false;
    const { data: readingBooksData, errors } = await getReadingBooks();
    if (errors) {
      console.error(errors.map((e) => e.message).join(', '));
      return undefined;
    }
    let { booksByReadingStateAndProfile = [] } = readingBooksData || {};
    if (!booksByReadingStateAndProfile.length) {
      const { data: finishedBooksData, errors: finishedBooksErrors } =
        await getReadingBooks(true);
      if (finishedBooksErrors) {
        console.error(finishedBooksErrors.map((e) => e.message).join(', '));
        return undefined;
      }
      booksByReadingStateAndProfile =
        finishedBooksData?.booksByReadingStateAndProfile || [];
      finished = true;
    }
    if (!booksByReadingStateAndProfile.length) return undefined;
    const [book] = booksByReadingStateAndProfile;
    const { data: readingProgressData, errors: progressErrors } =
      await getBookProgress(book.id);
    if (progressErrors)
      console.error(progressErrors.map((e) => e.message).join(', '));
    const progress = readingProgressData?.readingProgresses.find((p) =>
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      p ? p.bookId === book.id : false,
    );
    const coverData = await getBlurData(book.cover);
    return { ...book, ...progress, coverData, finished };
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
