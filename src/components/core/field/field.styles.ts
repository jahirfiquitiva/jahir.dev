import { styled } from '~/stitches';

export const LabeledFieldWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const FieldWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translateY(50%)',
    mr: '$12',
    pointerEvents: 'none',
    color: '$text-tertiary',
  },
});

export const Label = styled('label', {
  mt: '$16',
  mb: '$6',
  fontWeight: 500,
  variants: {
    hidden: {
      true: {
        hidden: true,
      },
    },
  },
});

export const Input = styled('input', {
  backgroundColor: '$transparent',
  color: '$text-primary',
  border: '1px solid $divider',
  borderRadius: '$space$6',
  minHeight: 48,
  py: '$6',
  px: '$12',
  flex: 1,
  hocus: {
    borderColor: '$accent-light',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  variants: {
    withIcon: {
      true: {
        pr: '$48',
      },
    },
  },
});