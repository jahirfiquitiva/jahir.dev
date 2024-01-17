import { tw } from '@/utils/cx';

export const List = tw.ul`
  relative
  flex flex-col
  pl-5 mx-1.5 gap-1.5
`;

export const ListItem = tw.li`
  before:[content:counter(list-item,_disc)]
  before:absolute
  before:text-tertiary-txt
  before:left-0
  before:-ml-1
`;
