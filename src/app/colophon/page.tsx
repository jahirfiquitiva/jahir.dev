import { Main } from '@/components/atoms/main';
import { Section } from '@/components/atoms/section';
import { DesignAndColors } from '@/components/ui/colophon/design-colors';
import { Logo } from '@/components/ui/colophon/logo';
import { TechStack } from '@/components/ui/colophon/tech-stack';
import { Typography } from '@/components/ui/colophon/typography';
import { getColoredTextClasses } from '@/utils/colored-text';

export default function Colophon() {
  return (
    <Main>
      <Section id={'colophon'} className={'gap-10'}>
        <h1
          className={getColoredTextClasses(
            'brand',
            'brand',
            'blue',
            'self-start -mb-5',
          )}
        >
          Colophon
        </h1>
        <TechStack />
        <Typography />
        <DesignAndColors />
        <Logo />
      </Section>
    </Main>
  );
}
