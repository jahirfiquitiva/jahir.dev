const formatDate = (date: Date): string => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }).format(date);
  } catch (e) {
    return '';
  }
};

export default formatDate;
