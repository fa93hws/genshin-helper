import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import { CubeBar, CubeBarProps } from '../cube-bar';

export default {
  title: 'ui/inazuma/cube/cube-bar',
  component: CubeBar,
};

const useStyles = makeStyles({
  cube: {
    display: 'inline-block',
    border: '1px solid black',
    width: 32,
    height: 32,
  },
});

export const Stateless = (props: CubeBarProps) => {
  const styles = useStyles();
  return (
    <CubeBar {...props}>
      <div className={styles.cube} />
      <div className={styles.cube} />
      <div className={styles.cube} />
    </CubeBar>
  );
};
Stateless.argTypes = {
  onAddClicked: {
    action: 'clicked',
  },
  onRemoveClicked: {
    action: 'clicked',
  },
  disableAddButton: {
    control: {
      type: 'boolean',
    },
  },
  disableRemoveButton: {
    control: {
      type: 'boolean',
    },
  },
  title: {
    control: {
      type: 'text',
    },
  },
};
Stateless.args = {
  title: 'cube bar',
  disableAddButton: false,
  disableRemoveButton: false,
  addButtonLabel: 'add',
  removeButtonLabel: 'remove',
};
