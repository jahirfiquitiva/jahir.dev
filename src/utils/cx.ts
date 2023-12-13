import classix from 'classix';
import { twMerge } from 'tailwind-merge';

type Argument = string | boolean | null | undefined;
const cx = (...args: Argument[]) => twMerge(classix(...args));

export default cx;
