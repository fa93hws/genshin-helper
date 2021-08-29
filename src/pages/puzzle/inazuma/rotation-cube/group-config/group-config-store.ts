import { makeObservable, observable } from 'mobx';
import { colors } from '@material-ui/core';

export const labelColors = [
  colors.deepPurple[500],
  colors.pink[400],
  colors.teal[400],
  colors.lime[500],
  colors.brown[400],
];

export class GroupConfigStore {
  private static maxGroups = labelColors.length;

  private static minGroups = 1;

  private constructor(public GroupConfigComponents: React.ComponentType[]) {
    makeObservable(this, {
      GroupConfigComponents: observable.shallow,
    });
  }

  static createGroupConfigStore(nGroups: number) {
    if (
      nGroups < GroupConfigStore.minGroups ||
      nGroups > GroupConfigStore.maxGroups
    ) {
      throw new Error(
        `nGroups must be smaller than ${GroupConfigStore.maxGroups} and lager than ${GroupConfigStore.minGroups}`,
      );
    }
  }
}
