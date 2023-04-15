import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { Reactions } from '@/components/views/mdx/ui/reactions';
import { Software } from '@/components/views/uses/software';
import { Tabs } from '@/components/views/uses/tabs';
import { ReactionsProvider } from '@/providers/reactions';

export default function UsesPage() {
  return (
    <Section id={'uses'} className={'flex-1 gap-24'}>
      <Heading shadow={'purple'} from={'purple'} to={'brand'}>
        What do I use?
      </Heading>
      <ReactionsProvider slug={'blog--uses'}>
        <Reactions />
      </ReactionsProvider>
      <Tabs
        tabsNames={[
          'Everyday',
          'Gaming PC',
          'Software',
          'Extensions',
          'Coding',
          'Website',
        ]}
      >
        <div>Everyday</div>
        <div>Gaming PC</div>
        <Software />
        <div>Extensions</div>
        <div>Coding</div>
        <div>Website</div>
      </Tabs>
    </Section>
  );
}
