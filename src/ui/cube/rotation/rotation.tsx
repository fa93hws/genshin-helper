import * as React from 'react';
import { makeStyles, colors } from '@material-ui/core';
import classnames from 'classnames';

import { sizes } from '@styles/styles';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '4px 1px 1px 1px',
    borderColor: colors.grey[900],
    borderTopColor: colors.purple[700],
    display: 'inline-block',
    height: sizes[4],
    width: sizes[4],
    transition: 'transform 1s',
  },
  east: {
    transform: 'rotate(90deg)',
  },
  south: {
    transform: 'rotate(180deg)',
  },
  west: {
    transform: 'rotate(270deg)',
  },
  north: {
    transform: 'rotate(0)',
  },
});

export type Orientation = 'north' | 'east' | 'south' | 'west';
type Props = {
  orientation: Orientation;
};
export const RotationCube = (props: Props) => {
  const styles = useStyles();
  return (
    <div
      className={classnames(styles.root, {
        [styles.east]: props.orientation === 'east',
        [styles.west]: props.orientation === 'west',
        [styles.south]: props.orientation === 'south',
        [styles.north]: props.orientation === 'north',
      })}
    ></div>
  );
};
