import removeMd from 'remove-markdown';

const minCharacters = 70;
const maxCharacters = 150;

export const getPostDescription = (
  content?: string | null,
  defaultDescription?: string | null,
  trimLength?: boolean | null,
): string => {
  if (defaultDescription) return defaultDescription;
  if (!content) return defaultDescription || '';

  const allTexts = content
    ?.split(/[\r\n]+/gm)
    ?.filter((it: string) => !it.startsWith('#'))
    ?.join('\n')
    ?.split('\n')
    ?.map((text: string) => (text || '').trim())
    ?.filter((text: string) => text && text.length)
    ?.map((text: string) => removeMd(text, { gfm: true, useImgAltText: true }));

  let description = '';
  if (allTexts) {
    let lastIndex = 0;
    while (description.length < maxCharacters) {
      description += `${allTexts[lastIndex]} `;
      lastIndex += 1;
    }
  }

  if (trimLength) {
    const allWords = description.split(' ');
    description = '';
    let lastIndex = 0;
    while (description.length < maxCharacters) {
      const word = allWords[lastIndex];
      description += `${word} `;
      if (
        word.endsWith('.') &&
        !word.endsWith('etc.') &&
        description.length > minCharacters
      ) {
        break;
      }
      lastIndex += 1;
    }
  }
  description = description.trim();
  return description.length > 0
    ? `${description}${description.endsWith('.') ? '..' : '...'}`
    : defaultDescription || '';
};