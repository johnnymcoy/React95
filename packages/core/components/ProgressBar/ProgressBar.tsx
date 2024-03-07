import React, { forwardRef } from 'react';
import cn from 'classnames';

import { Frame, FrameProps } from '../Frame/Frame';
import * as styles from './ProgressBar.css';

export type ProgressBarProps = {
  percent?: number;
} & FrameProps;

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ width = '150px', percent = 0, ...rest }, ref) => (
    <Frame
      {...rest}
      width={width}
      className={cn(styles.wrapper, rest.className)}
      ref={ref}
    >
      <Frame className={styles.whiteBar} width={width}>{`${percent}%`}</Frame>
      <Frame className={styles.container} width={`${percent}%`}>
        <Frame className={styles.progress} width={width}>{`${percent}%`}</Frame>
      </Frame>
    </Frame>
  ),
);
