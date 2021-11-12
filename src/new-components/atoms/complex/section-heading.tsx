import { useMemo } from 'react';

import {
  GradientSpan,
  Heading,
  HeadingProps,
} from '~/new-components/atoms/simple';
import { useTheme } from '~/providers/theme';
import { Component, ComponentWithGradientProps } from '~/types';

interface SectionHeadingProps extends HeadingProps, ComponentWithGradientProps {
  emoji?: string;
}

export const SectionHeading: Component<SectionHeadingProps> = (props) => {
  const { isDark, themeReady } = useTheme();
  const { emoji, gradientColor, children, ...otherProps } = props;

  const shouldForceGradient = useMemo<boolean>(() => {
    if (!themeReady) return false;
    return isDark;
  }, [themeReady, isDark]);

  const renderEmoji = () => {
    if (!emoji) return <></>;
    return <span className={'emoji'}>{emoji}</span>;
  };

  return (
    <Heading {...otherProps}>
      {renderEmoji()}
      {gradientColor ? (
        <GradientSpan
          gradientColor={gradientColor}
          forceGradient={shouldForceGradient}
        >
          {children}
        </GradientSpan>
      ) : (
        <span>{children}</span>
      )}
    </Heading>
  );
};
