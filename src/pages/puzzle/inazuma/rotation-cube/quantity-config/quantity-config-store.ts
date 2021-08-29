import * as React from 'react';
import { makeObservable, observable, action, computed } from 'mobx';

import { RotationCubeStore } from './cube/cube-store';
import { createStatefulRotationCube } from './cube/cube';

export class QuantityConfigStore {
  public rotationCubeStores: RotationCubeStore[];

  public rotationCubeComponents: React.ComponentType[];

  public minCubes: number;

  public maxCubes: number;

  private constructor(params: {
    rotationCubeStores: RotationCubeStore[];
    rotationCubeComponents: React.ComponentType[];
    minCubes: number;
    maxCubes: number;
  }) {
    this.rotationCubeStores = params.rotationCubeStores;
    this.rotationCubeComponents = params.rotationCubeComponents;
    this.minCubes = params.minCubes;
    this.maxCubes = params.maxCubes;

    makeObservable(this, {
      rotationCubeStores: observable.shallow,
      rotationCubeComponents: observable.shallow,
      canAdd: computed,
      maybeAdd: action,
      canRemove: computed,
      maybeRemove: action,
    });
  }

  static createQuantityConfigStore(
    nCubes: number,
    config: {
      minCubes: number;
      maxCubes: number;
    },
  ): QuantityConfigStore {
    if (nCubes < config.minCubes || nCubes > config.maxCubes) {
      throw new Error(
        `nCubes must be larger than min and smaller than max. min=${config.minCubes}, max=${config.maxCubes}`,
      );
    }
    if (config.minCubes >= config.maxCubes) {
      throw new Error(`minCubes must be smaller than maxCubes`);
    }
    const quantityConfigStore = new QuantityConfigStore({
      rotationCubeStores: [],
      rotationCubeComponents: [],
      maxCubes: config.maxCubes,
      minCubes: config.minCubes,
    });
    for (let i = 0; i < nCubes; i += 1) {
      quantityConfigStore.maybeAdd();
    }
    return quantityConfigStore;
  }

  get canAdd(): boolean {
    return this.rotationCubeStores.length < this.maxCubes;
  }

  maybeAdd(): void {
    if (!this.canAdd) {
      return;
    }
    const { Component, store } = createStatefulRotationCube(0);
    this.rotationCubeStores.push(store);
    this.rotationCubeComponents.push(Component);
  }

  get canRemove(): boolean {
    return this.rotationCubeStores.length > this.minCubes;
  }

  maybeRemove(): void {
    if (!this.canRemove) {
      return;
    }
    this.rotationCubeStores.pop();
    this.rotationCubeComponents.pop();
  }
}
