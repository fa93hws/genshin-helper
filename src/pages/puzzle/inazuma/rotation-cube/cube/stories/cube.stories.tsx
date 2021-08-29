import * as React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { StoryContainer } from '@ui/storybook/container';
import { sizes } from '@styles/styles';
import { RotationCube, Orientation } from '../cube';

export default {
  title: 'pages/puzzle/inazuma/rotation-cube/cube',
  component: RotationCube,
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    gap: sizes[1],
  },
});

export const Stateless = () => {
  const classnames = useStyles();
  return (
    <StoryContainer legend="旋转方块(东南西北)">
      <Box className={classnames.root}>
        <RotationCube orientation="east" />
        <RotationCube orientation="south" />
        <RotationCube orientation="west" />
        <RotationCube orientation="north" />
      </Box>
    </StoryContainer>
  );
};

export const Stateful = ({ orientation }: { orientation: Orientation }) => (
  <RotationCube orientation={orientation} />
);

Stateful.argTypes = {
  orientation: {
    options: ['north', 'east', 'south', 'west'],
    control: { type: 'select' },
  },
};
Stateful.args = {
  orientation: 'north',
};
