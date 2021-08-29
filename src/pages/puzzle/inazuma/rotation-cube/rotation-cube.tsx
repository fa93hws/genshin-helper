import * as React from 'react';
import { createControl } from './control/control';

export function createRotationCubePage() {
  const { Component } = createControl({ nCubes: 3, minCubes: 3, maxCubes: 6 });
  return React.memo(() => <Component />);
}
