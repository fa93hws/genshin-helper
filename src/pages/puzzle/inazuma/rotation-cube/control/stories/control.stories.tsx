import * as React from 'react';

import { createControl } from '../control';

export default {
  title: 'pages/puzzle/inazuma/rotation-cube/control',
  Component: () => <div />,
};

export const Stateful = () => {
  const { Component: StatefulRotationCube } = createControl({
    nCubes: 3,
    minCubes: 3,
    maxCubes: 5,
  });
  return <StatefulRotationCube />;
};
