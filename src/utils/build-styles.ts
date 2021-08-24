import { CSSProperties } from 'react';

const buildStyles = (customStyles?: Object): CSSProperties => {
  if (!customStyles) return {};
  // noinspection UnnecessaryLocalVariableJS
  const newStyles = { ...customStyles };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return newStyles;
};

export default buildStyles;