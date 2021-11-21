import tw from 'twin.macro';

export const Chip = tw.span`
  --bg-color[var(--divider)]
  --border-color[var(--divider)]
  
  flex
  items-center
  justify-center
  py-4
  pl-6
  pr-7
  text-tiny
  rounded-full
  border
  border-color[var(--border-color)]
  bg-transparent
  text-text-secondary
  cursor-default
  transition-all
  duration-250
  ease-io
  line-height[1.7]

  hocus:(no-underline text-text-primary background-color[var(--bg-color)])
  all-child:(first-of-type:(mr-4))
`;

export const ImageChip = tw(Chip)`
  line-height[unset]
  p-4 pr-8 
  all-child:(first-of-type:(mr-4!))
  [img]:(rounded-half)
`;
