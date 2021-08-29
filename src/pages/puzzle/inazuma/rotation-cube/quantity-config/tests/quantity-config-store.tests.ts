import { QuantityConfigStore } from '../quantity-config-store';

describe('QuantityConfigStore', () => {
  it('will not add if reach max', () => {
    const store = QuantityConfigStore.createQuantityConfigStore(3, {
      minCubes: 1,
      maxCubes: 3,
    });
    store.maybeAdd();
    expect(store.rotationCubeComponents.length).toEqual(3);
    expect(store.rotationCubeStores.length).toEqual(3);
  });

  it('will not remove if reach min', () => {
    const store = QuantityConfigStore.createQuantityConfigStore(3, {
      minCubes: 3,
      maxCubes: 5,
    });
    store.maybeRemove();
    expect(store.rotationCubeComponents.length).toEqual(3);
    expect(store.rotationCubeStores.length).toEqual(3);
  });
});
