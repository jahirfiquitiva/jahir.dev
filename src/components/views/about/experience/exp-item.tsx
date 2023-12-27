import type { Route } from 'next';
import { type CSSProperties } from 'react';

import { Img, type ImgProps } from '@/components/img';
import { getReadableColor, hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import { ExperienceItem, ExperienceItemWithLine } from './exp.styles';

export interface ExperienceItemProps {
  company: string;
  position: string;
  from: string;
  until?: string;
  link: string;
  color: string;
  image: ImgProps['src'];
  last?: boolean;
}

export const ExpItem = (props: ExperienceItemProps) => {
  const color = hexToRgb(getReadableColor(props.color, true), 1, true);
  const Component = props.last ? ExperienceItem : ExperienceItemWithLine;
  return (
    <Component
      title={`${props.position} at ${props.company}`}
      href={props.link as Route}
      target={'_blank'}
      style={{ '--exp-color': color } as CSSProperties}
    >
      <Img
        src={props.image}
        alt={props.company}
        className={cx(
          'size-12 rounded-1.5',
          'border border-divider select-none',
        )}
      />
      <div className={'flex flex-col flex-1'}>
        <p className={'tabular-nums line-clamp-1 text-3xs text-tertiary-txt'}>
          <span>{props.from}</span> – <span>{props.until || 'Present'}</span>
        </p>
        <p
          className={cx(
            'line-clamp-1 font-semibold text-primary-txt',
            'group-hocus/exp:underline group-hocus/exp:decoration-primary-txt',
            'group-hocus/exp:underline-offset-2 group-hocus/post:decoration-2',
          )}
        >
          {props.company}
        </p>
        <p className={'line-clamp-1 text-2xs flex-1 text-secondary-txt'}>
          {props.position}
        </p>
      </div>
    </Component>
  );
};
