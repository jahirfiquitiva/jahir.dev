import { css } from '~/stitches';

export const ButtonStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  height: '42px',
  border: 'none',
  borderRadius: '$space$6',
  backgroundColor: '$accent',
  color: '$on-accent',
  py: '$6',
  px: '$12',
  gap: '$6',
  fontWeight: 700,
  letterSpacing: '0.025rem',
  transition: 'all 0.2s ease-in-out',
  ellipsize: true,
  useFont: 'manrope',
  hocus: {
    backgroundColor: '$accent-dark',
    transform: 'translateY(-1px)',
    textDecoration: 'none',
  },
  '&:disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
  '& > svg:only-child': {
    margin: '0 auto',
  },
  variants: {
    withShadow: {
      true: {
        canHover: {
          boxShadow: '0 1px 2px 1px rgb($colors$accent-shadow / .12)',
          hocus: {
            boxShadow: '0 1px 2px 1px rgb($colors$accent-shadow / .24)',
          },
        },
      },
    },
    outlined: {
      true: {
        background: 'none',
        border: '1px solid $divider',
        color: '$text-secondary',
        boxShadow: 'none',
        hocus: {
          boxShadow: '0 0 1px 1px rgb($colors$accent-shadow / 0.1)',
          backgroundColor: 'rgba(45 82 171 / .08)',
          borderColor: '$accent-dark',
          color: '$text-primary',
          dark: {
            backgroundColor: 'rgba(56 103  214 / 0.16)',
          },
        },
      },
    },
  },
});