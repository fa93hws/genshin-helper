import * as React from 'react';
import { observer } from 'mobx-react';

import { CubeBar } from '@ui/inazuma/cube/cube-bar/cube-bar';
import { GroupConfigStore } from './group-config-store';

export function createGroupConfig(nGroups: number) {
  const groupConfigStore = GroupConfigStore.createGroupConfigStore(nGroups);
  const onAddClicked = () => {
    groupConfigStore.maybeAdd();
  };
  const onRemoveClicked = () => groupConfigStore.maybeRemove();
  const Component = observer(() => (
    <CubeBar
      onAddClicked={onAddClicked}
      onRemoveClicked={onRemoveClicked}
      disableAddButton={!groupConfigStore.canAdd}
      disableRemoveButton={!groupConfigStore.canRemove}
      title="分组管理"
    >
      {groupConfigStore.GroupConfigComponents.map((GroupLabel, idx) =>
        React.createElement(GroupLabel, { key: idx }),
      )}
    </CubeBar>
  ));
  return { Component, store: groupConfigStore };
}
