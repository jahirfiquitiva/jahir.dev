import Icon from '@mdi/react';

import { Img } from '@/components/core';
import { mdiFormatQuoteClose } from '@/icons';
import type { Sponsor, Testimonial } from '@/lib/sponsors';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const StyledCard = styled('div', {
  $$color: '$colors$toolbar-glow',
  $$borderSize: '1px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  p: '$16',
  gap: '$8',
  color: '$text-secondary',
  backgroundColor: 'rgba(9 17 34 / 0.006)',
  border: '$$borderSize solid $divider',
  borderRadius: '$space$8',
  transition: 'all .25s ease-in-out',
  dark: {
    color: '$text-primary',
    backgroundColor: 'rgba(235 240 251 / 0.008)',
  },
  hocus: {
    $$borderSize: '2px',
    p: 'calc($16 - 1px)',
    transform: 'scale(1.0025)',
    boxShadow: '0 0 8px 2px rgba($$color / .2)',
    backgroundColor: 'rgba($$color / .035)',
    borderColor: 'rgba($$color / .5)',
    textDecoration: 'none',
    color: '$text-primary',
    dark: { color: '$text-primary', backgroundColor: 'rgba($$color / .04)' },
    '& svg': {
      top: 'calc($4 - 1px)',
      right: 'calc($6 - 1px)',
    },
  },
});

const Testimonial = styled('p', {
  maxWidth: '100%',
  width: 'fit-content',
  overflowWrap: 'break-word',
  overflow: 'hidden',
  '@mobile-lg': {
    mr: '$6',
  },
  '@tablet-md': {
    mr: '$12',
  },
});

const Sponsor = styled('p', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
  fontSize: '$2xs',
  lineHeight: 1,
  color: '$text-tertiary',
  '& > img': {
    borderRadius: '50%',
  },
});

const QuoteIcon = styled(Icon, {
  position: 'absolute',
  top: '$4',
  right: '$6',
  color: '$divider',
  zIndex: 1,
  pointerEvents: 'none',
  userSelect: 'none',
  transition: 'all .15s ease-in-out',
});

export const DonateTestimonialCard: FC<Testimonial> = (props) => {
  if (!props.sponsor) return null;
  return (
    <StyledCard>
      <Testimonial>{props.children || props.content}</Testimonial>
      <Sponsor>
        <Img
          src={
            props.sponsor.photo || 'https://source.boringavatars.com/beam/28'
          }
          alt={`Photo of ${props.sponsor.name}`}
          size={28}
          css={{ backgroundColor: '$accent-light' }}
        />
        <span>{props.sponsor.name}&nbsp; ––</span>
      </Sponsor>
      <QuoteIcon path={mdiFormatQuoteClose} size={2} />
    </StyledCard>
  );
};
