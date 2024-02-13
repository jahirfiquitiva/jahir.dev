import { getBlurData } from '@/utils/blur';

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

const getReadingBooks = async (): Promise<ReadingBooksResponse> => {
  return fetch('https://literal.club/graphql/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: readingBooksQuery,
      variables: {
        profileId,
        readingStatus: 'IS_READING',
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
  try {
    const { data: readingBooksData, errors } = await getReadingBooks();
    if (errors) console.error(errors.map((e) => e.message).join(', '));
    if (!readingBooksData) return undefined;
    const { booksByReadingStateAndProfile } = readingBooksData;
    if (!booksByReadingStateAndProfile.length) return undefined;
    const [book] = booksByReadingStateAndProfile;
    const { data: readingProgressData, errors: progressErrors } =
      await getBookProgress(book.id);
    if (progressErrors)
      console.error(progressErrors.map((e) => e.message).join(', '));
    const progress = readingProgressData?.readingProgresses.find(
      (p) => p.bookId === book.id,
    );
    const coverData = await getBlurData(book.cover);
    return { ...book, ...progress, coverData };
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
