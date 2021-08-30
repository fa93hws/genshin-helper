import * as React from 'react';
import { observer } from 'mobx-react';
import { makeStyles, colors, Button } from '@material-ui/core';

import { gridBaseline } from '@styles/styles';
import { RotationCubeStore } from './cube-store';

const useStyles = makeStyles((theme) => ({
  root: {
    borderStyle: 'solid',
    borderWidth: '4px 1px 1px 1px',
    borderColor: colors.grey[900],
    borderTopColor: colors.purple[700],
    display: 'inline-block',
    height: gridBaseline * 6,
    width: gridBaseline * 6,
    minWidth: 'unset',
    [theme.breakpoints.up('sm')]: {
      height: gridBaseline * 8,
      width: gridBaseline * 8,
    },
    transition: 'transform 500ms',
  },
}));

type Props = {
  rotationDeg: number;
  onClick(): void;
  cubeId: number;
};

const currentDegToNextOrientation: Record<number, string | undefined> = {
  0: 'east',
  90: 'south',
  180: 'west',
  270: 'north',
};

export const RotationCube = React.memo((props: Props) => {
  const styles = useStyles();
  const degReminder = React.useMemo(
    () => props.rotationDeg % 360,
    [props.rotationDeg],
  );
  const nextOrientation = React.useMemo(
    () => currentDegToNextOrientation[degReminder],
    [degReminder],
  );
  if (nextOrientation == null) {
    // eslint-disable-next-line no-console
    console.error(
      `props.rotationDeg is ${props.rotationDeg}, not a multiplier of 90 deg`,
    );
  }
  return (
    <Button
      className={styles.root}
      style={{
        transform: `rotate(${props.rotationDeg}deg)`,
      }}
      aria-label={`rotate cube ${props.cubeId} to ${nextOrientation}`}
      onClick={props.onClick}
    />
  );
});

export function createStatefulRotationCube(id: number) {
  const store = new RotationCubeStore(0);
  const onClick = () => store.rotate();

  const Component = observer(() => (
    <RotationCube
      rotationDeg={store.rotationDeg}
      onClick={onClick}
      cubeId={id}
    />
  ));
  return { Component, store };
}
