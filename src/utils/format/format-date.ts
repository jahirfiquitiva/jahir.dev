const formatDate = (preDate?: string, showYear: boolean = false): string => {
  if (!preDate || preDate.length <= 0) return '';
  try {
    const date = new Date(preDate);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit',
      year: showYear ? 'numeric' : undefined,
    }).format(date);
  } catch (e) {
    return '';
  }
};

export default formatDate;
