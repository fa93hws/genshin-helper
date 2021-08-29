import * as React from 'react';
import { createQuantityConfig } from './quantity-config/quantity-config';

export function createRotationCubePage() {
  const { Component } = createQuantityConfig({
    nCubes: 3,
    minCubes: 3,
    maxCubes: 6,
  });
  return React.memo(() => <Component />);
}
