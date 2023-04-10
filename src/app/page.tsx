import Icon from '@mdi/react';

import { Button } from '@/components/core/button';
import { Chip, ImageChip, ChipGroup } from '@/components/core/chip';
import { Divider } from '@/components/core/divider';
import { Field } from '@/components/core/field';
import { Heading } from '@/components/core/heading';
import { Link, ButtonLink } from '@/components/core/link';
import { LogoAnimoji } from '@/components/core/logo-animoji';
import { mdiAccountCircleOutline, mdiMagnify } from '@/components/icons';
import { ThemeToggle } from '@/components/molecules/toolbar/toolbar-buttons/theme-toggle';
import { cx } from '@/tw';

export default function Home() {
  return (
    <main className={'flex min-h-screen flex-col items-center p-24 gap-24'}>
      <LogoAnimoji />
      <ThemeToggle />
      <Divider />
      <Button title={'test'}>Button</Button>
      <Button title={'test'}>
        <Icon path={mdiAccountCircleOutline} size={1} />
      </Button>
      <Button title={'test'}>
        <Icon path={mdiAccountCircleOutline} size={1} />
        <span>Icon button</span>
      </Button>
      <Button title={'test'} outlined>
        Outlined Button
      </Button>
      <Button title={'test'} className={'rounded-full'}>
        Custom Button
      </Button>
      <Divider />
      <Link href={'#test'} title={'Test link'}>
        Link
      </Link>
      <ButtonLink href={'#test'} title={'Test link'}>
        Button link
      </ButtonLink>
      <ButtonLink href={'#test'} title={'Test link'} outlined>
        Outlined button link
      </ButtonLink>
      <Divider as={'button'} />
      <Chip className={'self-start'}>Chip</Chip>
      <Chip className={'self-start'}>Chip</Chip>
      <ImageChip className={'self-start'}>
        <img src={'https://unavatar.io'} />
        <span>Chip</span>
      </ImageChip>
      <ChipGroup className={'self-start'}>
        <Chip>Chip</Chip>
        <Chip
          className={cx(
            'hover:bg-[rgba(125_34_68/0.08)] hover:border-[rgba(125_34_68/0.5)]',
            'dark:hover:bg-[rgba(125_34_68/0.12)] dark:hover:border-[rgba(125_34_68/0.75)]',
          )}
        >
          Chip
        </Chip>
        <Chip>Chip</Chip>
        <Chip>Chip</Chip>
        <Chip>Chip</Chip>
        <Chip>Chip</Chip>
        <Chip>Chip</Chip>
        <Chip>Chip</Chip>
      </ChipGroup>
      <Divider />
      <Field name={'search-wo-icon'} label={'Search'} type={'text'} />
      <Field
        name={'search-wo-label'}
        label={'Search'}
        type={'text'}
        iconPath={mdiMagnify}
        hideLabel
      />
      <Field
        name={'search'}
        label={'Search'}
        type={'text'}
        iconPath={mdiMagnify}
      />
      <Divider />
      <Heading>Heading 1</Heading>
      <Heading
        as={'h2'}
        shadow={'blue'}
        className={'dark:from-gradient-green dark:to-gradient-red'}
      >
        Heading 2
      </Heading>
      <Heading as={'h3'} from={'blue'} to={'orange'}>
        Heading 3
      </Heading>
      <Heading as={'h4'} from={'purple'}>
        Heading 4
      </Heading>
      <Heading as={'h5'} shadow={'red'}>
        Heading 5
      </Heading>
      <Heading as={'h6'} to={'green'}>
        Heading 6
      </Heading>
    </main>
  );
}
