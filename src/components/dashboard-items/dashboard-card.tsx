import styled from '@emotion/styled';
import { Component, ComponentProps } from '~/elements/base/fc';

import { Card, ExtLinkCard } from '~/elements/simple/card';

const dashboardCardStyles = `
  --border-radius: 8px;
  border: 1px solid var(--divider);
  text-decoration-color: currentColor;
  overflow-x: hidden;
  max-width: 100%;
  color: var(--text-secondary);

  & > div {
    padding: 0.4rem 0.8rem 0.8rem;
  }

  p.status,
  p.count {
    color: var(--text-primary);
    font-size: var(--font-size-xl);
    font-family: var(--manrope-font);
    font-weight: 700;
  }

  p.status {
    font-weight: 600;
    font-size: var(--font-size-sm);
  }

  p.link-text {
    color: var(--text-secondary);
  }

  &:hover,
  &:focus {
    color: currentColor;
    text-decoration: none;
    text-decoration-color: currentColor;

    p.link-text:last-of-type {
      text-decoration: underline;
    }
  }
`;

const BaseDashboardCard = styled(Card)`
  ${dashboardCardStyles}
`;

const BaseDashboardLinkCard = styled(ExtLinkCard)`
  ${dashboardCardStyles}
`;

export interface DashboardCardProps extends ComponentProps {
  to?: string;
}

export const DashboardCard: Component<DashboardCardProps> = (props) => {
  const { to, children } = props;

  const renderCardContent = () => <div>{children}</div>;

  if (to) {
    return (
      <BaseDashboardLinkCard to={to}>
        {renderCardContent()}
      </BaseDashboardLinkCard>
    );
  }

  return <BaseDashboardCard>{renderCardContent()}</BaseDashboardCard>;
};
