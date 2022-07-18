/* eslint-disable max-len */
import { styled } from '~/stitches';

export const Article = styled('article', {
  p: '.05px',
  scrollMarginTop: '$$scrollMargin',
  '& h1, & h2, & h3, & h4, & h5, & h6,': {
    display: 'block',
    position: 'relative',
    scrollMarginTop: '$$scrollMargin',
    hocus: {
      '& > a.anchor': {
        visibility: 'visible',
      },
    },
  },
  '& h1:not(:first-of-type)': {
    mt: '2.5rem',
    mb: '$16',
  },
  '& h2': {
    mt: '$36',
    mb: '$12',
  },
  '& h3,  & h4': {
    mt: '$32',
    mb: '$8',
  },
  '& h5,  & h6': {
    mt: '$28',
    mb: '$4',
  },
  '& p': {
    width: '100%',
    marginBlock: 0,
    marginInline: 0,
    my: '$10',
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
  '& ol:not(.apps-grid), & ul:not(.apps-grid)': {
    display: 'block',
    listStyle: 'none',
    position: 'relative',
    pl: '$26',
    ml: '$4',
    counterReset: 'start 1',
    '& li:not(:first-of-type)': {
      mt: '$2',
    },
    '&:not(.contains-task-list) > li::before': {
      content: "counter(list-item, decimal) '.'",
      position: 'absolute',
      fontWeight: 'inherit',
      color: '#6b7280',
      left: 0,
    },
    '&.contains-task-list': {
      listStyle: 'none',
      pl: 0,
      '& li': {
        display: 'flex',
        alignItems: 'center',
        gap: '$6',
        '& input[type="checkbox"]': {
          width: '$space$16',
          height: '$space$16',
          color: '$accent',
        },
      },
    },
  },
  'ol li ol:not(.contains-task-list) > li::before, ul:not(.contains-task-list):not(.apps-grid) > li::before':
    {
      content: 'counter(list-item, disc)',
    },
  '& .toc': {
    my: '$20',
    '& .title': {
      useFont: 'manrope',
      fontWeight: 700,
      fontSize: '$sm',
      color: '$text-primary',
      mb: '$3',
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
    p: '$3 $6',
    fontSize: '$2xs',
    background: '$primary',
    color: '$text-secondary',
    borderRadius: '$space$6',
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
    borderRadius: '$space$8',
    border: '1px solid $divider',
    m: '$20 0',
    dark: { $colors$primary: '#0b152b' },
  },
  '& pre': {
    p: '$12',
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
    borderTopLeftRadius: '$space$8',
    borderTopRightRadius: '$space$8',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    color: '$text-secondary',
    background: '$toolbar-glow',
    marginTop: '$20',
    fontFamily: 'monospace, ui-monospace',
    fontSize: '$2xs',
    p: '$6 $11 $8',
  },
  '& .rehype-code-title + pre': {
    marginTop: '0',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    borderTopWidth: '0',
  },
  '& mark': {
    p: '$3',
    color: '$on-accent',
    backgroundColor: '#5f27cd',
    dark: {
      backgroundColor: '#f368e0',
    },
  },
  '& blockquote': {
    my: '$$verticalContentPadding',
    backgroundColor: 'rgba($toolbar-glow / .075)',
    borderWidth: 0,
    borderLeftWidth: '$space$6',
    borderStyle: 'solid',
    borderColor: '$divider',
    pl: '$16',
    py: '$8',
    pr: '$12',
    borderRadius: '$space$4',
  },
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '$space$8',
    border: '1px solid $divider',
  },
  '& > img:first-of-type': {
    my: '$$verticalContentPadding',
  },
  '& > img, & > p > img': {
    my: 'calc($$verticalContentPadding / 4)',
  },
});
