import * as React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { StoryContainer } from '@ui/storybook/container';
import { gridBaseline } from '@styles/styles';
import { RotationCube, createStatefulRotationCube } from '../cube';

export default {
  title: 'pages/puzzle/inazuma/rotation-cube/quantity-config/cube',
  component: RotationCube,
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    gap: gridBaseline * 4,
  },
});

export const FourDirection = ({ onClick }: { onClick(): void }) => {
  const classnames = useStyles();
  return (
    <StoryContainer legend="旋转方块(东南西北)">
      <Box className={classnames.root}>
        <RotationCube rotationDeg={90} onClick={onClick} cubeId={0} />
        <RotationCube rotationDeg={180} onClick={onClick} cubeId={1} />
        <RotationCube rotationDeg={270} onClick={onClick} cubeId={2} />
        <RotationCube rotationDeg={360} onClick={onClick} cubeId={3} />
      </Box>
    </StoryContainer>
  );
};

export const Stateless = (props: {
  rotationDeg: number;
  onClick(): void;
  cubeId: number;
}) => <RotationCube {...props} />;
Stateless.argTypes = {
  rotationDeg: {
    options: [0, 90, 180, 270],
    control: { type: 'select' },
  },
  onClick: {
    action: 'clicked',
  },
};
Stateless.args = {
  rotationDeg: 0,
  cubeId: 0,
};

export const Stateful = () => {
  const { Component: StatefulRotationCube } = createStatefulRotationCube(0);
  return <StatefulRotationCube />;
};
