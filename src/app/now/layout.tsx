import type { PropsWithChildren } from 'react';

import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link/link';
import { Section } from '@/components/core/section';
import cx from '@/utils/cx';

export default function DashboardLayout(props: PropsWithChildren) {
  return (
    <Section id={'now'} className={cx('gap-32')}>
      <Heading shadow={'blue'} from={'blue'} to={'green'}>
        Now
      </Heading>
      <p className={cx('text-2xs -mt-24')}>
        This is a{' '}
        <Link title={'Now page'} href={'https://nownownow.com/about'}>
          now page
        </Link>
        . A simple place to share what&apos;s been happening recently.
      </p>
      {props.children}
    </Section>
  );
}
