import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { DesignAndColors } from '@/components/ui/colophon/design-colors';
import { Logo } from '@/components/ui/colophon/logo';
import { TechStack } from '@/components/ui/colophon/tech-stack';
import { Typography } from '@/components/ui/colophon/typography';
import { getColoredTextClasses } from '@/utils/colored-text';

export default function Colophon() {
  return (
    <Section id={'colophon'} className={'gap-10'}>
      <h1 className={getColoredTextClasses('purple', '-mb-4')}>Colophon</h1>
      <TechStack />
      <Typography />
      <DesignAndColors />
      <Logo />
      <Section id={'carbon-footprint'}>
        <h2 className={'text-lg -mb-2'}>Carbon Footprint&nbsp;&nbsp;🍃</h2>
        <p>
          This website produces less than{' '}
          <span title={'0.15 grams of carbon dioxide'}>
            <span className={'tabular-nums'}>0.15</span> g of CO<sub>2</sub>
          </span>{' '}
          per per visit, according to{' '}
          <Link
            title={'Website Carbon Calculator results for jahir.dev'}
            href={'https://www.websitecarbon.com/website/jahir-dev/'}
          >
            Website Carbon Calculator
          </Link>{' '}
          and{' '}
          <Link
            title={'Digital Beacon results for jahir.dev'}
            href={'https://digitalbeacon.co/report/jahir-dev'}
          >
            Digital Beacon
          </Link>
          , achieving a carbon rating of <strong>A</strong> 🌳.
        </p>
      </Section>
    </Section>
  );
}
