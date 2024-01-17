import { Section } from '@/components/atoms/section';
import { DesignAndColors } from '@/components/views/colophon/design-colors';
import { Logo } from '@/components/views/colophon/logo';
import { TechStack } from '@/components/views/colophon/tech-stack';
import { Typography } from '@/components/views/colophon/typography';
import { getColoredTextClasses } from '@/utils/colored-text';

export default function Colophon() {
  return (
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
  );
}
