import { Heading, HeadingProps } from '~/elements/simple/heading';
import { useTheme } from '~/providers/theme';
import { Component, gradientToClassName } from '~/types';

interface SectionHeadingProps extends HeadingProps {
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
      <span className={gradientToClassName(gradientColor, isDark)}>
        {children}
      </span>
    </Heading>
  );
};
