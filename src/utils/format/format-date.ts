const formatDate = (
  preDate?: string,
  options: Intl.DateTimeFormatOptions | undefined | null = {},
): string => {
  if (!preDate || preDate.length <= 0) return '';
  try {
    const date = new Date(preDate);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      ...options,
    }).format(date);
  } catch (e) {
    return '';
  }
};

export default formatDate;
