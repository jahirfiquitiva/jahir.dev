import type { PropertyValue } from '@stitches/react';

const marginUtils = {
  // Abbreviated margin properties
  m: (value: PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mt: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
  }),
  mr: (value: PropertyValue<'margin'>) => ({
    marginRight: value,
  }),
  mb: (value: PropertyValue<'margin'>) => ({
    marginBottom: value,
  }),
  ml: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
  }),
  mx: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

export default marginUtils;
