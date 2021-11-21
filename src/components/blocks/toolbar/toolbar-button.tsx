import tw, { styled } from 'twin.macro';

import { Button } from '~/components/atoms/simple';

export const BaseToolbarButtonStyles = tw`
  tracking-unset
  px-6 py-0
  min-w-button
  bg-transparent
  text-transparent
  shadow-none
  disabled:(shadow-none)
  hocus:(shadow-none bg-toolbar-highlight transform-none text-transparent)
  xs:(px-8 py-4)
`;

interface CustomProps {
  isForThemeToggle?: boolean;
}

export const ToolbarButton = styled(Button)<CustomProps>`
  ${BaseToolbarButtonStyles}
  ${tw`
    gap-0
    p-4
    pt-5
    text-center
    text-accent
    leading-none
    hocus:(text-accent-dark dark:(text-accent-light))
    [span]:(w-full text-center)
    xs:(px-6 pt-5)
    md:(pt-4)
  `}
`;

export const ToolbarButtonsContainer = tw.ul`
  flex
  items-center
  justify-end
  list-none
  col-start-2
  col-end-3
  gap-6
  lg:(gap-0 col-start-3 col-end-4)

  [li]:(
    inline-block m-0 p-0 max-h-button
    last:(
      block visible pointer-events-auto opacity-100 
      lg:(hidden invisible pointer-events-none opacity-0)
    )
  )
`;
