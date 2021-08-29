import { ControlStore } from '../control-store';

describe('ControlStore', () => {
  it('will not add if reach max', () => {
    const store = ControlStore.createControlStore(3, {
      minCubes: 1,
      maxCubes: 3,
    });
    store.maybeAdd();
    expect(store.rotationCubeComponents.length).toEqual(3);
    expect(store.rotationCubeStores.length).toEqual(3);
  });

  it('will not remove if reach min', () => {
    const store = ControlStore.createControlStore(3, {
      minCubes: 3,
      maxCubes: 5,
    });
    store.maybeRemove();
    expect(store.rotationCubeComponents.length).toEqual(3);
    expect(store.rotationCubeStores.length).toEqual(3);
  });
});
