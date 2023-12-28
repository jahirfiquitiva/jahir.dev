import type { CSSProperties } from 'react';

import { Icon } from '@/components/icon';
import { Section } from '@/components/section';
import { hexToRgb } from '@/utils/color';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

import { skills } from './data';

export const Skills = () => {
  return (
    <Section id={'skills'}>
      <h2
        className={getColoredTextClasses(
          'green',
          'green',
          'blue',
          false,
          'self-start',
        )}
      >
        Skills
      </h2>
      <ul className={'flex items-center gap-2.5 flex-wrap'}>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill) => {
            const color = hexToRgb(skill.color, 0, true);
            return (
              <li className={'block'} key={skill.name}>
                <span
                  className={cx(
                    'flex items-center gap-1.5',
                    'rounded-2 pl-3 pr-3.5 py-1.5 min-h-9',
                    'border border-divider',
                    'text-3xs font-medium cursor-default',
                    'transition-colors hocus:scale-[1.015]',
                    'bg-brand-200/[0.06] dark:bg-brand-700/[0.12]',
                    'hocus:bg-[rgba(var(--skill-color)/0.12)]',
                    'dark:hocus:bg-[rgba(var(--skill-color)/0.24)]',
                    'hocus:border-[rgba(var(--skill-color)/0.56)]',
                  )}
                  style={{ '--skill-color': color } as CSSProperties}
                >
                  <Icon path={skill.icon} className={'size-4'} />
                  <span>{skill.name}</span>
                </span>
              </li>
            );
          })}
      </ul>
    </Section>
  );
};
