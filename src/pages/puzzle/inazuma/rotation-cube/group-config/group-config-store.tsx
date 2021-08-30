import * as React from 'react';
import { observer } from 'mobx-react';
import { makeObservable, observable, action, computed } from 'mobx';
import { colors } from '@material-ui/core';

import { GroupLabel } from './group-label';

export const labelColors = [
  colors.deepPurple[500],
  colors.pink[400],
  colors.teal[400],
  colors.lime[500],
  colors.brown[400],
];

export class GroupConfigStore {
  static maxGroups = labelColors.length;

  static minGroups = 1;

  activeGroupId: number | undefined = undefined;

  private constructor(public GroupConfigComponents: React.ComponentType[]) {
    makeObservable(this, {
      GroupConfigComponents: observable.shallow,
      activeGroupId: observable.ref,
      onGroupLabelClick: action,
      canAdd: computed,
      canRemove: computed,
      maybeAdd: action,
      maybeRemove: action,
    });
  }

  static createGroupConfigStore(nGroups: number): GroupConfigStore {
    if (
      nGroups < GroupConfigStore.minGroups ||
      nGroups > GroupConfigStore.maxGroups
    ) {
      throw new Error(
        `nGroups must be smaller than ${GroupConfigStore.maxGroups} and lager than ${GroupConfigStore.minGroups}`,
      );
    }
    const groupConfigStore = new GroupConfigStore([]);
    for (let i = 0; i < nGroups; i += 1) {
      groupConfigStore.maybeAdd();
    }
    return groupConfigStore;
  }

  private get nGroups(): number {
    return this.GroupConfigComponents.length;
  }

  get canAdd(): boolean {
    return this.nGroups < GroupConfigStore.maxGroups;
  }

  get canRemove(): boolean {
    return this.nGroups > GroupConfigStore.minGroups;
  }

  onGroupLabelClick(id: number): void {
    this.activeGroupId = this.activeGroupId === id ? undefined : id;
  }

  maybeAdd(): void {
    if (!this.canAdd) {
      return;
    }
    const labelId = this.nGroups;
    const onClick = () => this.onGroupLabelClick(labelId);
    const isActive = computed(() => this.activeGroupId === labelId);
    this.GroupConfigComponents.push(
      observer(() => (
        <GroupLabel
          onClick={onClick}
          color={labelColors[labelId]}
          isActive={isActive.get()}
          groupId={labelId}
        />
      )),
    );
  }

  maybeRemove(): void {
    if (!this.canRemove) {
      return;
    }
    // The active group is the label that will be removed
    if (this.nGroups - 1 === this.activeGroupId) {
      this.activeGroupId = undefined;
    }
    this.GroupConfigComponents.pop();
  }
}
