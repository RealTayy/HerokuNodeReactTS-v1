import { observable, action } from 'mobx';
import { RootStore } from '.';

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
}

export default LocationStore;