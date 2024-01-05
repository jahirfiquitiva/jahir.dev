const timeFormattingOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
};

const dateFormattingOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: '2-digit',
  year: 'numeric',
};

export const formatDate = (
  preDate?: string | Date,
  asTime?: boolean,
  options: Intl.DateTimeFormatOptions | undefined | null = {},
): string => {
  if (!preDate) return '';
  try {
    const date = typeof preDate === 'string' ? new Date(preDate) : preDate;
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Bogota',
      ...(asTime ? timeFormattingOptions : dateFormattingOptions),
      ...options,
    }).format(date);
  } catch (e) {
    return '';
  }
};
