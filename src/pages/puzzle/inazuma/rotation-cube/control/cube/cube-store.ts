import { makeObservable, observable, action } from 'mobx';

export class RotationCubeStore {
  constructor(public rotationDeg: number) {
    makeObservable(this, {
      rotationDeg: observable.ref,
      rotate: action,
    });
  }

  rotate() {
    this.rotationDeg += 90;
  }
}
