import {
  Heading,
  HeadingProps,
  GradientSpan,
} from '~/new-components/atoms/simple';
import { useTheme } from '~/providers/theme';
import { Component, ComponentWithGradientProps } from '~/types';

interface SectionHeadingProps extends HeadingProps, ComponentWithGradientProps {
  emoji?: string;
}

export const SectionHeading: Component<SectionHeadingProps> = (props) => {
  const { isDark } = useTheme();
  const { emoji, gradientColor, children, ...otherProps } = props;

  const renderEmoji = () => {
    if (!emoji) return <></>;
    return <>{emoji}&nbsp;&nbsp;</>;
  };

  return (
    <Heading {...otherProps}>
      {renderEmoji()}
      <GradientSpan gradientColor={gradientColor} forceGradient={isDark}>
        {children}
      </GradientSpan>
    </Heading>
  );
};
