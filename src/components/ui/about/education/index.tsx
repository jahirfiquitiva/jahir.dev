import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

const education = [
  {
    years: '2025 – 2026',
    institution: 'Twente Pathway College',
    program: 'Pathway programme',
    detail: 'Studying in the Netherlands',
  },
  {
    years: '2021 – 2025',
    institution: 'High school',
    program: 'Software Development and Networking',
    detail: 'Major',
  },
];

export const Education = () => (
  <Section id={'education'} className={'gap-6'}>
    <h2 className={getColoredTextClasses('brand')}>Education</h2>
    <ol className={'relative flex flex-col gap-1.5'}>
      <span
        aria-hidden={'true'}
        className={cx(
          'absolute left-6 top-6 bottom-6 w-0.5 -translate-x-1/2',
          'rounded-full bg-divider',
        )}
      />
      {education.map((item) => (
        <li key={item.institution} className={'relative flex gap-3 p-2.5'}>
          <span
            aria-hidden={'true'}
            className={cx(
              'relative z-1 mt-1 size-3 shrink-0 rounded-full',
              'border-2 border-accent bg-background',
            )}
          />
          <div className={'flex flex-col gap-1'}>
            <p className={'text-3xs tabular-nums text-tertiary-txt'}>
              {item.years}
            </p>
            <h3 className={'font-medium text-primary-txt'}>
              {item.institution}
            </h3>
            <p className={'text-sm text-secondary-txt'}>{item.program}</p>
            <p className={'text-xs text-tertiary-txt'}>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);
