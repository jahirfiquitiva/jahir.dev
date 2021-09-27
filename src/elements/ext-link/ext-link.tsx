import { Component, ComponentProps } from '~/elements/fc';

interface ExtLinkProps extends ComponentProps {
  to: string;
  title?: string;
  newTab?: boolean;
  underline?: boolean;
}

export const ExtLink: Component<ExtLinkProps> = (props) => {
  const {
    to,
    title,
    newTab = true,
    className,
    children,
    style,
    underline = true,
  } = props;

  return (
    <a
      className={[className || '', underline ? '' : 'nodeco'].join(' ').trim()}
      title={title}
      aria-label={title}
      href={to}
      target={newTab ? '_blank' : '_self'}
      rel={'noopener noreferrer'}
      style={style}
    >
      {children}
    </a>
  );
};
