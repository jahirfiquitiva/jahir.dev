import Icon from '@mdi/react';
import { useMemo } from 'react';

import { useTheme } from '@/providers/theme';
import type { ThemeColorValue } from '@/stitches';
import { FC } from '@/types';
import { getReadableColor, hexToRGB } from '@/utils';
import { styled } from '~/stitches';

const StyledCard = styled('div', {
  $$color: '$colors$toolbar-glow',
  $$borderSize: '1px',
  position: 'relative',
  display: 'flex',
  width: '100%',
  py: '$14',
  px: '$16',
  gap: '$4',
  color: '$text-secondary',
  backgroundColor: 'rgba(9 17 34 / 0.006)',
  border: '$$borderSize solid $divider',
  borderRadius: '$space$8',
  transition: 'all .25s ease-in-out',
  overflow: 'hidden',

  flexDirection: 'row',
  alignItems: 'flex-end',
  '@mobile-md': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  dark: {
    color: '$text-primary',
    backgroundColor: 'rgba(235 240 251 / 0.008)',
  },
  hocus: {
    $$borderSize: '2px',
    py: 'calc($14 - 1px)',
    px: 'calc($16 - 1px)',
    transform: 'scale(1.0025)',
    boxShadow: '0 0 8px 2px rgba($$color / .2)',
    backgroundColor: 'rgba($$color / .035)',
    borderColor: 'rgba($$color / .5)',
    textDecoration: 'none',
    color: '$text-primary',
    dark: { color: '$text-primary', backgroundColor: 'rgba($$color / .04)' },
    '& > span.icon': {
      top: 'calc($10 - 1px)',
      right: 'calc($12 - 1px)',
    },
  },
});

const Value = styled('span', {
  lineHeight: '1.25',
  fontSize: '$lg',
  fontWeight: 700,
  useFont: 'manrope',
  color: '$text-primary',
  transition: 'all .2s ease-in-out',
  '@mobile-md': {
    fontSize: '$xl',
  },
});

const Title = styled('span', {
  fontSize: '$2xs',
  fontWeight: 600,
  color: '$text-secondary',
  useFont: 'manrope',
  transition: 'all .2s ease-in-out',
  ellipsize: true,
  '@mobile-md': {
    mt: 'auto',
  },
});

const IconContainer = styled('span', {
  display: 'inline-flex',
  position: 'absolute',
  top: '$10',
  right: '$12',
  width: '$space$36',
  height: '$space$36',
  p: '$2',
  backgroundColor: 'rgba($$color / .12)',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all .2s ease-in-out',
  '& svg': {
    color: 'rgba($$color / 1)',
    fill: 'rgba($$color / 1)',
    opacity: 0.9,
  },
});

interface StatCardProps {
  title: string;
  value: string;
  iconPath?: string;
  color?: ThemeColorValue;
}

export const StatCard: FC<StatCardProps> = (props) => {
  const { isDark, themeReady } = useTheme();
  const { title, value, iconPath, color } = props;

  const readableColor = useMemo<ThemeColorValue>(() => {
    if (!themeReady) return '$colors$toolbar-glow';
    const rgb = hexToRGB(
      getReadableColor(color, isDark) || '#000',
      1,
      true,
    ) as ThemeColorValue;
    if (rgb === 'rgba(0 0 0 / 0)') return '$colors$toolbar-glow';
    return rgb;
  }, [color, isDark, themeReady]);

  return (
    <StyledCard css={{ $$color: readableColor }}>
      <Value>{value}</Value>
      <Title>{title}</Title>
      {iconPath ? (
        <IconContainer className={'icon'}>
          <Icon path={iconPath} size={1} />
        </IconContainer>
      ) : null}
    </StyledCard>
  );
};
