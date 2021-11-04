import { Component } from '~/elements/base/fc';
import { gradientToClassName } from '~/elements/props';
import { Heading, HeadingProps } from '~/elements/simple/heading';
import { useTheme } from '~/providers/theme';

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
