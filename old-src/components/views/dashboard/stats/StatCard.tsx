import Icon from '@mdi/react';
import { Ring } from '@uiball/loaders';
import { ComponentProps, useMemo } from 'react';

import { Link } from '@/old/components/core';
import { useTheme } from '@/old/providers/theme';
import type { ThemeColorValue } from '@/old/stitches';
import { FC } from '@/old/types';
import { getReadableColor } from '@/old/utils/color/get-readable-color';
import { hexToRGB } from '@/old/utils/color/hex-to-rgb';
import { styled } from '~/stitches';

const StyledCard = styled('div', {
  $$color: '$colors$accent-shadow',
  $$borderSize: '1px',
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '100%',
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
    transform: 'scale(1.005)',
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

const Text = styled('span', {
  fontSize: '$2xs',
  color: '$text-secondary',
  transition: 'all .2s ease-in-out',
  ellipsize: true,
  maxWidth: '100%',
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
  text: string;
  value: string;
  iconPath?: string;
  color?: ThemeColorValue;
  loading?: boolean;
}

export const StatCard: FC<StatCardProps> = (props) => {
  const { isDark, themeReady } = useTheme();
  const { text, value, iconPath, color, loading } = props;

  const readableColor = useMemo<ThemeColorValue>(() => {
    if (!themeReady) return '$colors$accent-shadow';
    const rgb = hexToRGB(
      getReadableColor(color, isDark) || '#000',
      1,
      true,
    ) as ThemeColorValue;
    if (rgb === 'rgba(0 0 0 / 0)') return '$colors$accent-shadow';
    return rgb;
  }, [color, isDark, themeReady]);

  return (
    <StyledCard css={{ $$color: readableColor }}>
      {loading ? (
        <Ring
          size={24}
          lineWeight={6}
          speed={2}
          color={'var(--colors-accent)'}
        />
      ) : (
        <Value>{value}</Value>
      )}
      <Text>{text}</Text>
      {iconPath ? (
        <IconContainer className={'icon'}>
          <Icon path={iconPath} size={0.9} />
        </IconContainer>
      ) : null}
    </StyledCard>
  );
};

const LinkForStatCard = styled(Link, {
  borderRadius: '$space$8',
});

export const LinkStatCard: FC<
  ComponentProps<typeof StatCard> & ComponentProps<typeof LinkForStatCard>
> = (props) => {
  const { text, value, iconPath, color, loading, ...otherProps } = props;
  return (
    <LinkForStatCard {...otherProps}>
      <StatCard
        text={text}
        value={value}
        iconPath={iconPath}
        color={color}
        loading={loading}
      />
    </LinkForStatCard>
  );
};
