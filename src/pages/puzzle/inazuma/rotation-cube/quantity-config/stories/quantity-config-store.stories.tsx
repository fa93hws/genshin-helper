import * as React from 'react';

import { createQuantityConfig } from '../quantity-config';

export default {
  title: 'pages/puzzle/inazuma/rotation-cube/quantity-config-store',
  Component: () => <div />,
};

export const Stateful = () => {
  const { Component: StatefulRotationCube } = createQuantityConfig({
    nCubes: 3,
    minCubes: 3,
    maxCubes: 5,
  });
  return <StatefulRotationCube />;
};
