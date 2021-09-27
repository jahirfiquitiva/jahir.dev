import readingTime, { IReadTimeResults } from 'reading-time';
import removeMd from 'remove-markdown';

export const getPostDescription = (
  description?: string | null,
  content?: string | null,
  defaultDescription?: string | null,
  maxCharacters?: number,
): string => {
  if (description && (description?.length || 0) > 0) return description;
  if (!content || (content?.length || 0) <= 0) {
    return defaultDescription || '';
  }
  const noTitles = content
    ?.split(/[\r\n]+/gm)
    ?.filter((it: string) => !it.startsWith('#'))
    ?.join('  ')
    ?.trim();
  const plainText = removeMd(noTitles);
  const noNewLines = plainText.replace(/[\r\n]+/gm, '  ').trim();
  const splitContent = noNewLines.substring(0, maxCharacters || 140);
  return splitContent.length > 0
    ? `${splitContent}...`
    : defaultDescription || '';
};

export const getTableOfContents = (
  body?: string,
): string | undefined | null => {
  if (!body || !body.length) return null;
  const lines = body
    .split(/\r\n|\n\r|\n|\r/)
    .filter((it) => it.trim().startsWith('#'));
  let mainTitle = '';
  for (const line of lines) {
    const titleHashtags = line.trim().substring(0, line.lastIndexOf('#') + 1);
    if (titleHashtags.length < mainTitle.length || mainTitle.length <= 0) {
      mainTitle = titleHashtags;
    }
  }
  let titleIndex = 0;
  const tableOfContents = lines
    .map((line) => {
      let title = line.substring(mainTitle.length).trim();
      let indent = '';
      if (!title.startsWith('#')) {
        titleIndex += 1;
        indent = `${titleIndex}. `;
      } else {
        const split = title.split('#');
        title = split.pop()?.trim() ?? '';
        indent = `   ${split.join('  ')}* `;
      }
      if (!title || !title.length) return null;
      const slug = title.toLowerCase().replace(/\W/g, '-');
      return `${indent}[${title}](#${slug})`;
    })
    .filter((it) => it && it.length > 0);
  return tableOfContents.join('\n');
};

export const getReadingTime = (content?: string): IReadTimeResults | null => {
  if (!content) return null;
  const calculatedTime = readingTime(content);
  return calculatedTime?.time > 0 ? calculatedTime : null;
};
