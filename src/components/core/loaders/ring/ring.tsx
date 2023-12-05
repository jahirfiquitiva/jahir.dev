import cx from 'classix';
import type { CSSProperties } from 'react';

import styles from './ring.module.scss';

interface RingProps {
  size: number;
  color: CSSProperties['color'];
  lineWeight: number;
  speed: number;
  className?: string;
  style?: CSSProperties;
}

export const Ring = (props: RingProps) => {
  const { size = 80, color = 'black', lineWeight = 5, speed = 1.75 } = props;
  return (
    <svg
      height={size}
      width={size}
      className={cx(styles.container, props.className)}
      viewBox={'25 25 50 50'}
      style={
        {
          ...(props.style || {}),
          '--uib-size': size + 'px',
          '--uib-color': color,
          '--uib-speed': speed + 's',
        } as CSSProperties
      }
    >
      <circle cx={'50'} cy={'50'} r={'20'} strokeWidth={lineWeight} />
    </svg>
  );
};
