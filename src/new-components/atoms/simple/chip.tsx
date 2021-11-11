import tw from 'twin.macro';

export const Chip = tw.span`
  --bg-color[var(--divider)]
  --border-color[var(--divider)]
  
  flex
  items-center
  content-center
  py-4
  px-6
  text-tiny
  rounded-full
  border
  border-solid
  border-color[var(--border-color)]
  bg-transparent
  text-text-secondary
  cursor-default
  transition-all
  duration-200
  motion-reduce:transition-none

  hocus:(no-underline text-text-primary background-color[var(--bg-color)])
  all-child:(first-of-type:(mr-4))
`;

export const ImageChip = tw(Chip)`
  p-4 pr-8 
  all-child:(first-of-type:(mr-4!))
  [img]:(rounded-half)
`;
