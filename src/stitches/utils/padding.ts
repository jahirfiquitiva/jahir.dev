import type { PropertyValue } from '@stitches/react';

const paddingUtils = {
  // Abbreviated padding properties
  p: (value: PropertyValue<'padding'>) => ({
    padding: value,
  }),
  pt: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
  }),
  pr: (value: PropertyValue<'padding'>) => ({
    paddingRight: value,
  }),
  pb: (value: PropertyValue<'padding'>) => ({
    paddingBottom: value,
  }),
  pl: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
  }),
  px: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};

export default paddingUtils;
