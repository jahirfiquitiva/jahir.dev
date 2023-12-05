import tw from 'tailwind-styled-components';

export const LinkItem = tw.li`block self-start w-full tablet-sm:w-[unset] tablet-sm:self-center`;

export const ToolbarLinksContainer = tw.ul`
  h-full
  max-h-[2.625rem]
  flex
  visible
  pointer-events-auto
  items-center
  justify-end
  list-none
  gap-[calc(calc(var(--floatingMargin,0)/var(--spaceDivider,1))*1.5)]
  transition
  [grid-row:1]
  [grid-column:2]

  tablet-sm:gap-0
  tablet-sm:justify-start
  tablet-sm:[grid-column:3/4]
  tablet-sm:max-h-[2.625rem]
  
  [[data-expanded="true"]_&]:max-h-[2.625rem]
  [[data-expanded="true"]_&]:tablet-sm:max-h-[2.625rem]
`;

export const PagesLinksContainer = tw(ToolbarLinksContainer)`
  max-h-0
  opacity-0
  [grid-row:2]
  [grid-column:1/3]
  select-none
  invisible
  pointer-events-none
  justify-start
  transition
  delay-0
  ml-32
  flex-col

  tablet-sm:[grid-row:1]
  tablet-sm:[grid-column:2/3]
  tablet-sm:max-h-[unset]
  tablet-sm:opacity-100
  tablet-sm:delay-[0.15s]
  tablet-sm:flex-row
  tablet-sm:visible
  tablet-sm:pointer-events-auto
  tablet-sm:justify-center
  tablet-sm:ml-0
  tablet-sm:gap-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))]

  [[data-expanded="true"]_&]:h-full
  [[data-expanded="true"]_&]:max-h-full
  [[data-expanded="true"]_&]:opacity-100
  [[data-expanded="true"]_&]:delay-[0.15s]
  [[data-expanded="true"]_&]:visible
  [[data-expanded="true"]_&]:pointer-events-auto
  [[data-expanded="true"]_&]:justify-center
  [[data-expanded="true"]_&]:gap-[calc(calc(var(--floatingMargin,0)/var(--spaceDivider,1))*1.5)]
  [[data-expanded="true"]_&]:tablet-sm:gap-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))]
  [[data-expanded="true"]_&]:tablet-sm:justify-center
  [[data-expanded="true"]_&]:tablet-sm:flex-row
`;
