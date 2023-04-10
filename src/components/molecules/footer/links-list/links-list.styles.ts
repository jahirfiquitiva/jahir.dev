import { Link } from '@/components/core/link'
import tw from '@/tw'

export const List = tw.ul`
  min-w-[130px]
  max-w-full
  list-none
  flex
  flex-col
  gap-12
  mobile-md:min-w-[164px]
  tablet-sm:min-w-[172px]
`

export const MetaList = tw(List)`
  flex-row
  mt-12
  tablet-sm:flex-col
  tablet-sm:mt-0
`

export const FooterLink = tw(Link)`
  inline-flex
  items-center
  self-start
  text-tertiary-txt
  group/link
`

export const FooterLinkSpan = tw.span`
  bg-gradient-to-r
  from-tertiary-txt
  to-tertiary-txt
  text-transparent
  bg-clip-text
`