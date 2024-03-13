import { Link } from '@/components/atoms/link';
import { MAX_SITE_WIDTH } from '@/constants';
import { tw } from '@/utils/cx';

export const StyledFooter = tw.footer.attrs({
  style: { maxWidth: MAX_SITE_WIDTH },
})`
  w-full
  mx-auto
  grid
  grid-cols-2
  gap-6
  px-3
  pt-6 pb-8
  border-t
  border-t-divider
  mobile-lg:pt-7
  tablet-sm:pt-8
  tablet-sm:pb-12
  tablet-sm:grid-cols-4
  tablet-sm:grid-rows-[1fr_auto]
  tablet-sm:gap-y-4
  tablet-md:px-0
`;

export const Details = tw.div`
  flex
  flex-col
  col-span-2
  gap-3
`;

export const Description = tw.p.attrs({ style: { maxWidth: '32ch' } })`
  text-2xs
  text-pretty
`;

export const LinksList = tw.div`
  flex
  flex-col
  gap-3
  tablet-sm:row-span-2
`;

export const FooterLink = tw(Link)`
  text-3xs
  font-manrope
  font-semibold
  transition-colors
  text-tertiary-txt
  hocus:text-secondary-txt
  hocus:saturate-125
  hocus:dark:saturate-150
  hocus:decoration-current
`;
