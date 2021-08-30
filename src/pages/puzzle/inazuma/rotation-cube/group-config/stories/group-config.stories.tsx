import * as React from 'react';
import { createGroupConfig } from '../group-config';

export default {
  title: 'pages/puzzle/inazuma/rotation-cube/group-config',
  CompositionEvent: () => <div />,
};

export const Stateful = () => {
  const { Component } = createGroupConfig(2);
  return <Component />;
};
