import tw from '@/tw';

export const ToolbarLinksContainer = tw.ul`
  h-full
  min-h-[42px]
  max-h-[42px]
  flex
  visible
  pointer-events-auto
  items-center
  justify-end
  list-none
  gap-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))]
  [grid-row:1]
  [grid-column:2]

  tablet-sm:gap-0
  tablet-sm:justify-start
  tablet-sm:[grid-column:3/4]

  [&>li]:h-full
  [&>li]:max-h-[42px]
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
  transition-all
  tablet-sm:max-h-[unset]
  tablet-sm:opacity-100
  tablet-sm:[grid-row:1]
  tablet-sm:[grid-column:2/3]
  tablet-sm:flex
  tablet-sm:visible
  tablet-sm:pointer-events-auto
  tablet-sm:justify-end
  tablet-sm:gap-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))]
  tablet-sm:delay-0
  [&.expanded]:flex
  [&.expanded]:visible
  [&.expanded]:pointer-events-auto
  [&.expanded]:justify-end
  [&.expanded]:max-h-[unset]
  [&.expanded]:opacity-100
  [&.expanded]:gap-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))]
  [&.expanded]:delay-[.1s]
`;
