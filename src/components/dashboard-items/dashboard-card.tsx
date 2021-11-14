import { Card, LinkCard } from '~/new-components/atoms/simple';
import { Component, ComponentProps } from '~/types';

export interface DashboardCardProps extends ComponentProps {
  title?: string;
  href?: string;
  underline?: boolean;
}

export const DashboardCard: Component<DashboardCardProps> = (props) => {
  const { title, href, className, style, children, underline } = props;

  if (href) {
    return (
      <LinkCard
        title={title || 'Link to dashboard item'}
        href={href}
        underline={underline}
        className={className}
        style={style}
      >
        {children}
      </LinkCard>
    );
  }

  return (
    <Card className={className} style={style}>
      {children}
    </Card>
  );
};
