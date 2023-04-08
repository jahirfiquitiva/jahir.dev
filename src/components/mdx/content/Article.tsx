/* eslint-disable max-len */
import { styled } from '~/stitches';

export const Article = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
  py: '.05px',
  px: '$14',
  '@tablet-md': {
    p: '.05px',
  },
  scrollMarginTop: '$$scrollMargin',
  '& > a, & > button': {
    alignSelf: 'flex-start'
  },
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    display: 'inline-block',
    position: 'relative',
    alignSelf: 'flex-start',
    scrollMarginTop: '$$scrollMargin',
    hocus: {
      '& > a.anchor': {
        visibility: 'visible',
      },
    },
  },
  '& h1:not(:first-of-type)': {
    mt: '$32',
    mb: '$8',
  },
  '& h2': {
    mt: '$24',
    mb: '$4',
  },
  '& h3,  & h4': {
    mt: '$16',
    mb: '$2',
  },
  '& h5,  & h6': {
    mt: '$8',
  },
  '& p': {
    width: '100%',
    marginBlock: 0,
    marginInline: 0,
    my: 0,
  },
  '& a.anchor': {
    visibility: 'hidden',
    position: 'absolute',
    pr: '.75em',
    marginLeft: '-1.25em',
    width: 'calc(100% + 1.25em)',
    height: '100%',
    cursor: 'pointer',
    textDecoration: 'none',
    '&::after': {
      textDecoration: 'none',
      content: '#',
      color: '$text-tertiary',
    },
  },
  '& ol:not(.apps-grid):not(.colophon), & ul:not(.apps-grid):not(.colophon)': {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    position: 'relative',
    pl: '$26',
    ml: '$4',
    gap: '$6',
    counterReset: 'start 1',
    '& > li': {
      '&::before': {
        content: "counter(list-item, decimal) '.'",
        position: 'absolute',
        fontWeight: 'inherit',
        color: '$text-tertiary',
        left: 0,
      },
      '& > ol > li::before, & > ul > li::before': {
        content: 'counter(list-item, disc)',
      },
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
        '&::before': {
          content: '',
          display: 'none',
        },
      },
    },
  },
  '& ul:not(.apps-grid):not(.colophon)': {
    '& > li': {
      '&::before': {
        content: 'counter(list-item, disc)',
      },
    },
  },
  '& .toc': {
    mb: '$8',
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
      gap: '$2 !important',
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
  },
  '& p code': {
    fontSize: '$3xs',
  },
  '& pre, & code': {
    WebkitOverflowScrolling: 'touch',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    backgroundColor: 'rgba($accent-shadow / .036)',
    color: 'inherit',
    overflowX: 'auto',
    borderRadius: '$space$8',
    border: '1px solid $divider',
    mb: '$12',
  },
  '& pre': {
    p: '$12',
    '& pre': {
      p: 0,
      m: 0,
      border: 'none',
    },
    '& code': {
      fontSize: '$3xs',
      color: 'inherit',
      p: 0,
      border: 'none',
      background: '$transparent',
      whiteSpace: 'pre',
      wordWrap: 'normal',
    },
  },
  "& code[class*='language-'], & pre[class*='language-'], & pre[class*='language-'] code, & .token.imports, & .token.plain-text":
    {
      color: 'inherit',
    },
  '& .token.property, & .token.tag, & .token.constant, & .token.symbol': {
    color: '$code-property',
  },
  '& .token.deleted': {
    color: '$code-deleted',
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
  '& .rehype-code-title, & [data-rehype-pretty-code-title]': {
    border: '1px solid $divider',
    borderTopLeftRadius: '$space$8',
    borderTopRightRadius: '$space$8',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    color: '$text-secondary',
    background: '$accent-shadow',
    marginTop: '$20',
    fontFamily: 'monospace, ui-monospace',
    fontSize: '$3xs',
    p: '$6 $11 $8',
  },
  '& [data-rehype-pretty-code-title]': {
    marginTop: 0,
  },
  '& .rehype-code-title + pre, & [data-rehype-pretty-code-title] + pre': {
    marginTop: '-$16',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    borderTopWidth: '0',
  },
  '& [data-rehype-pretty-code-title] + pre':{
    marginTop: 0,
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
    backgroundColor: 'rgba($accent-shadow / .05)',
    borderWidth: 0,
    borderLeftWidth: '$space$6',
    borderStyle: 'solid',
    borderColor: '$divider',
    pl: '$16',
    py: '$14',
    pr: '$12',
    borderRadius: '$space$4',
    '& img': {
      mt: '$16',
      mb: '$8'
    }
  },
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '$space$8',
  },
  '& > img:first-of-type, & > figure:first-of-type': {
    my: 'calc($$verticalContentPadding / 2)',
  },
  '& > img, & > p > img': {
    my: 'calc($$verticalContentPadding / 4)',
  },
});
