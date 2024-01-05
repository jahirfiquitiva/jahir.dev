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

const getDate = (baseDate?: string | Date): Date | null => {
  if (!baseDate) return null;
  if (typeof baseDate !== 'string') return baseDate;
  if (!baseDate.includes('T')) {
    // Use Colombia Timezone (UTC-5)
    baseDate = `${baseDate}T00:00:00-05:00`;
  }
  return new Date(baseDate);
};

export const formatDate = (
  baseDate?: string | Date,
  asTime?: boolean,
  options: Intl.DateTimeFormatOptions | undefined | null = {},
): string => {
  try {
    const date = getDate(baseDate);
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Bogota',
      ...(asTime ? timeFormattingOptions : dateFormattingOptions),
      ...options,
    }).format(date);
  } catch (e) {
    return '';
  }
};
