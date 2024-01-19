'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import type { ComponentProps } from 'react';

export const Anim = (
  props: Omit<ComponentProps<typeof LazyMotion>, 'features'>,
) => <LazyMotion {...props} features={domAnimation} />;
