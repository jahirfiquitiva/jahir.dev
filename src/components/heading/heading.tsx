import { Component, ComponentProps } from '~/components/fc';
import {
  ComponentWithGradientProps,
  ComponentWithTextShadowProps,
  gradientToClassName,
  textShadowToClassName,
} from '~/components/props';

interface HeadingProps
  extends ComponentProps,
    ComponentWithGradientProps,
    ComponentWithTextShadowProps {
  size?: '1' | '2' | '3' | '4' | '5' | '6';
}

export const Heading: Component<HeadingProps> = (props) => {
  const {
    size = '1',
    shadowColor,
    gradientColor,
    forceGradient,
    children,
    className,
  } = props;
  const shadowClass = textShadowToClassName(shadowColor);
  const gradientClass = gradientToClassName(gradientColor, forceGradient);
  const fullClassName = `${shadowClass} ${gradientClass} ${className}`;

  if (size === '6') return <h6 className={fullClassName}>{children}</h6>;
  if (size === '5') return <h5 className={fullClassName}>{children}</h5>;
  if (size === '4') return <h4 className={fullClassName}>{children}</h4>;
  if (size === '3') return <h3 className={fullClassName}>{children}</h3>;
  if (size === '2') return <h2 className={fullClassName}>{children}</h2>;
  return <h1 className={fullClassName}>{children}</h1>;
};

export default Heading;
