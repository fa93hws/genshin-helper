import { GroupConfigStore } from '../group-config-store';

describe('GroupConfigStore', () => {
  it('can not add if reach max', () => {
    const store = GroupConfigStore.createGroupConfigStore(
      GroupConfigStore.maxGroups,
    );
    expect(store.GroupConfigComponents.length).toBe(GroupConfigStore.maxGroups);
    store.maybeAdd();
    expect(store.GroupConfigComponents.length).toBe(GroupConfigStore.maxGroups);
  });

  it('can not remove if reach min', () => {
    const store = GroupConfigStore.createGroupConfigStore(
      GroupConfigStore.minGroups,
    );
    expect(store.GroupConfigComponents.length).toBe(GroupConfigStore.minGroups);
    store.maybeRemove();
    expect(store.GroupConfigComponents.length).toBe(GroupConfigStore.minGroups);
  });
});
