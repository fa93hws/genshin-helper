import * as React from 'react';
import { observer } from 'mobx-react';

import { CubeBar } from '@pages/puzzle/inazuma/cube-bar/cube-bar';
import { ControlStore } from './control-store';

export function createControl(params: {
  nCubes: number;
  minCubes: number;
  maxCubes: number;
}) {
  const controlStore = ControlStore.createControlStore(params.nCubes, {
    minCubes: params.minCubes,
    maxCubes: params.maxCubes,
  });
  const onAddClicked = () => {
    controlStore.maybeAdd();
  };
  const onRemoveClicked = () => controlStore.maybeRemove();
  const Component = observer(() => (
    <CubeBar
      onAddClicked={onAddClicked}
      onRemoveClicked={onRemoveClicked}
      disableAddButton={!controlStore.canAdd}
      disableRemoveButton={!controlStore.canRemove}
      title="旋转方块"
    >
      {controlStore.rotationCubeComponents.map((RotationCubeComponents, idx) =>
        React.createElement(RotationCubeComponents, { key: idx }),
      )}
    </CubeBar>
  ));
  return { store: controlStore, Component };
}
