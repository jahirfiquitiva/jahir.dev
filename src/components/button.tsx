import { tw, type TWComponentProps } from '@/utils/cx';

type ButtonProps = TWComponentProps<'button'> & { title: string };

export const Button = tw.button.attrs<ButtonProps>((p) => ({
  title: p.title,
  'aria-label': p['aria-label'] || p.title,
  type: p.type || 'button',
}))`
  border-none
  appearance-none
  relative
  inline-flex
  min-w-11
  min-h-11
  py-2 px-3
  items-center
  gap-2
  rounded-2.5
  bg-accent
  text-on-accent
  font-manrope
  font-bold
  text-xs
  ring-1
  ring-inset
  ring-brand-600
  hocus:ring-brand-700
  dark:ring-brand-400
  dark:hocus:ring-brand-300
  transition
  no-underline
  hocus:-translate-y-px
  hocus:shadow
  hocus:bg-accent-dark
  hocus:text-on-accent

  after:pointer-events-none
  after:select-none
  after:absolute
  after:top-0
  after:right-0
  after:bottom-0
  after:left-0
  after:rounded-[calc(0.625rem_-_0.0625rem)]
  after:m-px
  after:border-px
  after:border-white
  after:opacity-[0.12]
  after:bg-gradient-to-b
  after:from-white/90
  after:to-white/0
  after:[mask:linear-gradient(to_bottom,_rgba(0,_0,_0,_1)_0%,_rgba(0,_0,_0,_0)_100%)]
`;

export const OutlinedButton = tw(Button)`
  bg-transparent
  text-secondary-txt
  transition
  ring-divider
  hocus:ring-divider
  dark:ring-divider
  dark:hocus:ring-divider
  hocus:-translate-y-px
  hocus:shadow
  hocus:text-primary-txt
  hocus:bg-brand-300/[0.08]
  dark:bg-brand-200/[0.12]
  dark:hocus:bg-brand-200/[0.24]

  after:border-accent-dark
  after:opacity-[0.06]
  dark:after:opacity-[0.12]
  after:bg-gradient-to-b
  after:from-brand-600/0
  after:to-brand-600/80
  dark:after:from-brand-200/0
  dark:after:to-brand-200/60
  after:[mask:linear-gradient(to_bottom,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_1)_100%)]
  dark:after:[mask:linear-gradient(to_bottom,_rgba(0,_0,_0,_1)_0%,_rgba(0,_0,_0,_0)_100%)]
`;
