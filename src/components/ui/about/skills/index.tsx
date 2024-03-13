import type { CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Section } from '@/components/atoms/section';
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
                    'transition-colors',
                    'bg-brand-200/5 dark:bg-brand-700/10',
                    'hocus:!bg-tint-bg',
                    'hocus:border-tint-border',
                  )}
                  style={{ '--tint': color } as CSSProperties}
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
