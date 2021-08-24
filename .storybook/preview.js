// import { addDecorator } from '@storybook/react';
// import { Chakra } from '~/components/chakra/provider';
import '~/styles/global.css';

// addDecorator((storyFn) => <Chakra>{storyFn()}</Chakra>);

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

export const parameters = {
  options: {
    storySort: (a, b) => {
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true });
    },
  },
};
