import { observable, action, computed } from 'mobx';
import { RootStore } from '.';
import { computedFn } from 'mobx-utils';

class LocationStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable
  pathname: string = '';

  @action
  setPathname = (
    pathname: string
  ) => {
    this.pathname = pathname;
  }

  @computed
  get pathnameFirstLevel() {
    return this.pathname.split(/(?=\/)/)[0]
  }

  getIsActive = computedFn(function getIsActive(
    this: LocationStore,
    pathnameFirstLevel: string
  ) {
    return this.pathnameFirstLevel === pathnameFirstLevel;
  })
}

export default LocationStore;