import { URLSearchParams } from 'url';

import twColors from 'tailwindcss/colors';

const colors = [
  '#3867D6',
  twColors.sky[500],
  twColors.green[500],
  twColors.yellow[500],
  twColors.orange[500],
  twColors.rose[500],
  twColors.violet[500],
  // Remove #
].map((c) => c.substring(1));

export const buildBoringAvatarUrl = (
  name: string = '',
  size: number = 96,
): string => {
  const params = new URLSearchParams();
  params.set('colors', colors.join(','));
  let url = `https://source.boringavatars.com/beam/${size}/`;
  url += encodeURIComponent(name || new Date().toDateString());
  url += `?${params.toString()}`;
  return url;
};
