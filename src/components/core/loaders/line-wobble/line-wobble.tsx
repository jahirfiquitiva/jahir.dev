import { cx } from 'classix';
import type { CSSProperties } from 'react';

import styles from './line-wobble.module.scss';

interface LineWobbleProps {
  size: number;
  color: CSSProperties['color'];
  lineWeight: number;
  speed: number;
  className?: string;
  style?: CSSProperties;
}

export const LineWobble = (props: LineWobbleProps) => {
  const { size = 80, color = 'black', lineWeight = 5, speed = 1.75 } = props;
  return (
    <div
      className={cx(styles.container, props.className)}
      style={
        {
          ...(props.style || {}),
          '--uib-size': size + 'px',
          '--uib-color': color,
          '--uib-line-weight': lineWeight + 'px',
          '--uib-speed': speed + 's',
        } as CSSProperties
      }
    />
  );
};
