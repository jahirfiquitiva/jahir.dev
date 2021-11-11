import tw, { styled } from 'twin.macro';

import { Button } from '~/new-components/atoms/simple';

export const BaseToolbarButtonStyles = tw`
  tracking-unset
  px-4 py-0
  min-w-button
  bg-transparent
  text-transparent
  
  hocus:(bg-toolbar-highlight transform-none text-transparent)

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
  lg:(gap-0 justify-end col-start-3 col-end-4)

  [li]:(
    inline-block m-0 p-0 
    last:(
      visible pointer-events-auto select-auto opacity-100 
      lg:(hidden invisible pointer-events-none select-none opacity-0)
    )
  )
`;
