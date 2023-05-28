'use client';

import type { Route } from 'next';
import { type CSSProperties, useMemo } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { useTheme } from '@/providers/theme-provider';
import { getReadableColor, hexToRgb } from '@/utils/color';

import {
  StyledStatCard,
  Value,
  IconContainer,
  StyledIcon,
} from './stat-card.styles';

export interface StatCardProps {
  title: string;
  href: string;
  value: string | number;
  text: string;
  iconPath?: string;
  color?: string;
  className?: string;
}

export const StatCard = (props: StatCardProps) => {
  const hasMounted = useHasMounted();
  const { isDark } = useTheme();
  const { title, href, value, text, iconPath, color } = props;

  const statColor = useMemo<string | null>(() => {
    if (!hasMounted) return null;
    return hexToRgb(getReadableColor(color, isDark), undefined, true);
  }, [isDark, color, hasMounted]);

  return (
    <StyledStatCard
      title={title}
      href={(href || '#') as Route}
      className={props.className}
      style={
        {
          '--stat-color': statColor || 'var(--accent-dark)',
        } as CSSProperties
      }
    >
      <Value>{value}</Value>
      <span
        className={
          'text-2xs transition-colors truncate max-w-full mobile-md:leading-tight'
        }
      >
        {text}
      </span>
      {Boolean(iconPath) && (
        <IconContainer>
          <StyledIcon path={iconPath || ''} size={0.9} />
        </IconContainer>
      )}
    </StyledStatCard>
  );
};
