import { styled } from '~/stitches';

export const Article = styled('article', {
  scrollMarginTop: '200px',
  '& h1, & h2, & h3, & h4, & h5, & h6,': {
    display: 'block',
    position: 'relative',
    scrollMarginTop: '$$scrollMargin',
    mb: '.4rem',
    hocus: {
      '& > a.anchor': {
        visibility: 'visible',
      },
    },
  },
  '& h1': {
    mt: '1.6rem',
  },
  '& h2': {
    mt: '1.4rem',
  },
  '& h3,  & h4': {
    mt: '1.2rem',
  },
  '& h5,  & h6': {
    mt: '1rem',
  },
  '& p': {
    width: '100%',
    my: '.6rem',
    marginBlock: 0,
    marginInline: 0,
  },
  '& a.anchor': {
    visibility: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    textDecoration: 'none',
    marginLeft: '-1.25em',
    pr: '.75em',
    '&::after': {
      textDecoration: 'none',
      content: '#',
      color: '$text-tertiary',
    },
  },
  '& ol, & ul': {
    display: 'block',
    listStyle: 'none',
    position: 'relative',
    pl: '1.6rem',
    ml: '.2rem',
    counterReset: 'start 1',
    '& li:not(:first-of-type)': {
      mt: '.1rem',
    },
    '& > li::before': {
      content: "counter(list-item, decimal) '.'",
      position: 'absolute',
      fontWeight: 'inherit',
      color: '#6b7280',
      left: 0,
    },
  },
  'ol li ol > li::before, ul > li::before': {
    content: 'counter(list-item, disc)',
  },
  '& .toc': {
    my: '1.2rem',
    '& .title': {
      useFont: 'manrope',
      fontWeight: 700,
      fontSize: '$sm',
      color: '$text-primary',
      mb: '.2rem',
    },
    '& .toc-level': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
