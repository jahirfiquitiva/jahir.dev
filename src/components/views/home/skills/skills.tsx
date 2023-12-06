import Icon from '@mdi/react';
import cx from 'classix';
import type { CSSProperties } from 'react';

import { Chip, ChipGroup } from '@/components/core/chip/chip.styles';
import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { hexToRgb } from '@/utils/color';

import { skills } from './data';

export const Skills = () => {
  return (
    <Section id={'skills'} className={'gap-2'}>
      <Heading
        $as={'h2'}
        className={'text-xl'}
        shadow={'blue'}
        from={'blue'}
        to={'green'}
      >
        Skills
      </Heading>
      <ChipGroup className={'pb-4'}>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill, index) => {
            const color = hexToRgb(skill.color, 0, true);
            return (
              <li key={index}>
                <Chip
                  className={cx(
                    'hocus:bg-[rgba(var(--skill-color)/0.12)]',
                    'dark:hocus:bg-[rgba(var(--skill-color)/0.18)]',
                    'hocus:border-[rgba(var(--skill-color)/0.56)]',
                  )}
                  style={{ '--skill-color': color } as CSSProperties}
                >
                  <Icon path={skill.iconPath} size={0.8} />
                  <span className={'font-[500]'}>{skill.name}</span>
                </Chip>
              </li>
            );
          })}
      </ChipGroup>
    </Section>
  );
};
