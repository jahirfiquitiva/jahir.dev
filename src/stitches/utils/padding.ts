import type { UtilsObject } from './types';

const paddingUtils: UtilsObject<string | number> = {
  // Abbreviated padding properties
  p: (value: string | number) => ({
    padding: value,
  }),
  pt: (value: string | number) => ({
    paddingTop: value,
  }),
  pr: (value: string | number) => ({
    paddingRight: value,
  }),
  pb: (value: string | number) => ({
    paddingBottom: value,
  }),
  pl: (value: string | number) => ({
    paddingLeft: value,
  }),
  px: (value: string | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};

export default paddingUtils;
