import { tw, type TWComponentProps } from '@/utils/cx';

const NavToggleButton = tw.button`
  flex
  items-center
  justify-center
  min-h-11
  min-w-11
  p-2
  rounded-1.5
  transition
  hocus:bg-toolbar-highlight
  group/nav-toggle
  [--move:0.3125rem]
  tablet-sm:hidden
  tablet-sm:invisible
  tablet-sm:select-none
  tablet-sm:pointer-events-none
`;

const MenuLine = tw.span.attrs({ 'aria-hidden': true })`
  w-[1.125rem]
  h-0.5
  bg-accent
  transition
  group-hocus/nav-toggle:bg-accent-dark
`;

export const NavToggle = (props: TWComponentProps<typeof NavToggleButton>) => (
  <NavToggleButton {...props}>
    <div aria-hidden={'true'} className={'flex flex-col gap-[0.1875rem]'}>
      <MenuLine
        className={
          // eslint-disable-next-line max-len
          '[[data-expanded="true"]_&]:translate-y-[var(--move)] [[data-expanded="true"]_&]:rotate-45'
        }
      />
      <MenuLine className={'[[data-expanded="true"]_&]:opacity-0'} />
      <MenuLine
        className={
          // eslint-disable-next-line max-len
          '[[data-expanded="true"]_&]:translate-y-[calc(var(--move)_*_-1)] [[data-expanded="true"]_&]:-rotate-45'
        }
      />
    </div>
  </NavToggleButton>
);
