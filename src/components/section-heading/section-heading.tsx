import { Component } from '~/elements/base/fc';
import { gradientToClassName } from '~/elements/props';
import { Heading, HeadingProps } from '~/elements/simple/heading';

interface SectionHeadingProps extends HeadingProps {
  emoji?: string;
}

export const SectionHeading: Component<SectionHeadingProps> = (props) => {
  const { emoji, gradientColor, children, ...otherProps } = props;

  const renderEmoji = () => {
    if (!emoji) return <></>;
    return <>{emoji}&nbsp;&nbsp;</>;
  };

  return (
    <Heading {...otherProps}>
      {renderEmoji()}
      <span className={gradientToClassName(gradientColor)}>{children}</span>
    </Heading>
  );
};
