import { Component } from '~/elements/fc';
import { Heading, HeadingProps } from '~/elements/heading';
import { gradientToClassName } from '~/elements/props';

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
