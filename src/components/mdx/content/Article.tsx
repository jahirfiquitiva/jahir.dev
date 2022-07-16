/* eslint-disable max-len */
import { styled } from '~/stitches';

export const Article = styled('article', {
  p: '.05px',
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
    mt: '1.8rem',
  },
  '& h2': {
    mt: '1.6rem',
  },
  '& h3,  & h4': {
    mt: '1.4rem',
  },
  '& h5,  & h6': {
    mt: '1.2rem',
  },
  '& p': {
    width: '100%',
    marginBlock: 0,
    marginInline: 0,
    my: '.6rem',
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
    '& .toc-item': {
      alignSelf: 'flex-start',
    },
  },
  '& code': {
    fontSize: '$2xs',
    padding: '0.2rem 0.4rem',
    background: '$primary',
    color: '$text-secondary',
    borderRadius: '.375rem',
    fontWeight: 'inherit',
  },
  '& p code': {
    fontSize: '$3xs',
  },
  '& pre, & code': {
    WebkitOverflowScrolling: 'touch',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    backgroundColor: '$primary',
    color: '$text-primary',
    overflowX: 'auto',
    borderRadius: '.5rem',
    border: '1px solid $divider',
    margin: '1.2rem 0',
    dark: { '$colors$primary': '#0b152b' },
  },
  '& pre': {
    p: '.8rem',
    '& pre': {
      p: 0,
      m: 0,
      border: 'none',
    },
    '& code': {
      fontSize: '$2xs',
      color: '$text-primary',
      p: 0,
      border: 'none',
      background: '$transparent',
      whiteSpace: 'pre',
      wordWrap: 'normal',
    },
  },
  "& code[class*='language-'], & pre[class*='language-'], & pre[class*='language-'] code, & .token.imports, & .token.plain-text":
    {
      color: '$text-primary',
    },
  '& .token.property, & .token.tag, & .token.constant, & .token.symbol, & .token.deleted':
    {
      color: '$code-property',
    },
  '& .token.selector, & .token.attr-name, & .token.string, & .token.char, & .token.builtin, & .token.inserted, & .token.url':
    {
      color: '$code-selector',
    },
  '& .token.function, & .token.class-name': { color: '$code-function' },
  '& .token.boolean, & .token.number, & .token.entity, & .language-css & .token.string, & .style .token.string, & .token.regex, & .token.important, & .token.variable':
    {
      color: '$code-operator',
    },
  '& .token.atrule, & .token.attr-value, & .token.keyword': {
    color: '$accent',
  },
  '& .token.operator, & .token.comment, & .token.prolog, & .token.doctype, & .token.cdata':
    {
      color: '$code-comment',
    },
  '& .token.punctuation': { color: '$code-punctuation' },
  '& .rehype-code-title': {
    border: '1px solid $divider',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    color: '$text-secondary',
    background: '$toolbar-glow',
    marginTop: '1.2rem',
    fontFamily: 'monospace, ui-monospace',
    fontSize: '$2xs',
    padding: '0.4rem 0.7rem 0.5rem',
  },
  '& .rehype-code-title + pre': {
    marginTop: '0',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    borderTopWidth: '0',
  },
});
