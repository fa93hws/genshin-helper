import * as React from 'react';
import { observer } from 'mobx-react';

import { CubeBar } from '@pages/puzzle/inazuma/cube-bar/cube-bar';
import { QuantityConfigStore } from './quantity-config-store';

export function createQuantityConfig(params: {
  nCubes: number;
  minCubes: number;
  maxCubes: number;
}) {
  const quantityConfigStore = QuantityConfigStore.createQuantityConfigStore(
    params.nCubes,
    {
      minCubes: params.minCubes,
      maxCubes: params.maxCubes,
    },
  );
  const onAddClicked = () => {
    quantityConfigStore.maybeAdd();
  };
  const onRemoveClicked = () => quantityConfigStore.maybeRemove();
  const Component = observer(() => (
    <CubeBar
      onAddClicked={onAddClicked}
      onRemoveClicked={onRemoveClicked}
      disableAddButton={!quantityConfigStore.canAdd}
      disableRemoveButton={!quantityConfigStore.canRemove}
      title="旋转方块"
    >
      {quantityConfigStore.rotationCubeComponents.map(
        (RotationCubeComponents, idx) =>
          React.createElement(RotationCubeComponents, { key: idx }),
      )}
    </CubeBar>
  ));
  return { store: quantityConfigStore, Component };
}
