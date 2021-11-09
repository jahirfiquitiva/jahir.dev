import { Heading, HeadingProps } from '~/new-components/atoms/simple';
import { useTheme } from '~/providers/theme';
import {
  Component,
  ComponentWithGradientProps,
  GradientOptions,
} from '~/types';

interface SectionHeadingProps extends HeadingProps, ComponentWithGradientProps {
  gradientColor: GradientOptions;
  emoji?: string;
}

export const SectionHeading: Component<SectionHeadingProps> = (props) => {
  const { isDark } = useTheme();
  const { emoji, children, ...otherProps } = props;

  const renderEmoji = () => {
    if (!emoji) return <></>;
    return <span className={'emoji'}>{emoji}</span>;
  };

  return (
    <Heading {...otherProps} forceGradient={isDark}>
      {renderEmoji()}
      {children}
    </Heading>
  );
};
