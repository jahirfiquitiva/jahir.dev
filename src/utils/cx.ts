import { createTwc } from 'react-twc';
import { extendTailwindMerge, type ClassNameValue } from 'tailwind-merge';

type AdditionalClassGroupIds = 'text-shadow';

const twMerge = extendTailwindMerge<AdditionalClassGroupIds>({
  extend: {
    classGroups: {
      'text-shadow': [{ 'text-shadow': ['', 'none'] }],
    },
  },
});

const cx = (...args: ClassNameValue[]) => twMerge(...args);
export const tw = createTwc({ compose: cx });
export default cx;
