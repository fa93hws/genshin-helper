import * as React from 'react';
import { observer } from 'mobx-react';
import { makeStyles, colors, Button } from '@material-ui/core';

import { sizes } from '@styles/styles';
import { RotationCubeStore } from './cube-store';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '4px 1px 1px 1px',
    borderColor: colors.grey[900],
    borderTopColor: colors.purple[700],
    display: 'inline-block',
    height: sizes[4],
    width: sizes[4],
    transition: 'transform 500ms',
  },
});

type Props = {
  rotationDeg: number;
  onClick(): void;
};

export const RotationCube = (props: Props) => {
  const styles = useStyles();
  return (
    <Button
      className={styles.root}
      style={{
        transform: `rotate(${props.rotationDeg}deg)`,
      }}
      aria-label="rotate-cube"
      onClick={props.onClick}
    />
  );
};

export function createStatefulRotationCube(rotationDeg: number) {
  const store = new RotationCubeStore(rotationDeg);
  const onClick = () => store.rotate();

  const Component = observer(() => (
    <RotationCube rotationDeg={store.rotationDeg} onClick={onClick} />
  ));
  return { Component, store };
}
