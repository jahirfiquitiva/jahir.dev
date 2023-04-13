import Icon from '@mdi/react';
import { cx } from 'classix';

import { Button } from '@/components/core/button';
import { Chip, ImageChip, ChipGroup } from '@/components/core/chip';
import { Divider } from '@/components/core/divider';
import { Field } from '@/components/core/field';
import { Heading } from '@/components/core/heading';
import { Img } from '@/components/core/img';
import { Link, ButtonLink } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { mdiAccountCircleOutline, mdiMagnify } from '@/components/icons';

export default function Home() {
  return (
    <>
      <Section className={'gap-16'}>
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
      </Section>
      <Divider />
      <Section className={'gap-16'}>
        <Link href={'#test'} title={'Test link'}>
          Link
        </Link>
        <ButtonLink href={'#test'} title={'Test link'}>
          Button link
        </ButtonLink>
        <ButtonLink href={'#test'} title={'Test link'} outlined>
          Outlined button link
        </ButtonLink>
      </Section>
      <Divider $as={'button'} />
      <Section className={'gap-16'}>
        <Chip className={'self-start'}>Chip</Chip>
        <Chip className={'self-start'}>Chip</Chip>
        <ImageChip className={'self-start'}>
          <Img
            alt={'unavatar'}
            src={'https://unavatar.io/jahirfiquitiva'}
            size={24}
          />
          <span>Chip</span>
        </ImageChip>
        <ChipGroup className={'self-start'}>
          <Chip>Chip</Chip>
          <Chip
            className={cx(
              'hocus:bg-[rgba(125_34_68/0.08)] hocus:border-[rgba(125_34_68/0.5)]',
              'dark:hocus:bg-[rgba(125_34_68/0.12)] dark:hocus:border-[rgba(125_34_68/0.75)]',
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
      </Section>
      <Divider />
      <Section className={'gap-16'}>
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
      </Section>
      <Divider />
      <Section className={'gap-16'}>
        <Heading shadow={'yellow'}>Heading 1</Heading>
        <Heading
          $as={'h2'}
          shadow={'blue'}
          className={'dark:from-gradient-green dark:to-gradient-red'}
        >
          Heading 2
        </Heading>
        <Heading $as={'h3'} shadow={'green'} from={'blue'} to={'orange'}>
          Heading 3
        </Heading>
        <Heading $as={'h4'} shadow={'purple'} from={'purple'}>
          Heading 4
        </Heading>
        <Heading $as={'h5'} shadow={'red'} from={'yellow'} to={'red'}>
          Heading 5
        </Heading>
        <Heading $as={'h6'} to={'green'} shadow={'brand'}>
          Heading 6
        </Heading>
        <Heading
          $as={'p'}
          from={'red'}
          to={'purple'}
          shadow={'orange'}
          className={'font-semibold'}
        >
          Not a heading
        </Heading>
      </Section>
    </>
  );
}
