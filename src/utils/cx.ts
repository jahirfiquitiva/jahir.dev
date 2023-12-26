import classix from 'classix';
import { createTwc } from 'react-twc';
import { twMerge } from 'tailwind-merge';

type Argument = string | boolean | null | undefined;
const cx = (...args: Argument[]) => twMerge(classix(...args));
export const tw = createTwc({ compose: cx });
export default cx;
