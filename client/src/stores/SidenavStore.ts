import { observable, action } from 'mobx';
import { RootStore } from '.';

class SidenavStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable
  isVisible: boolean = false;

  @action
  toggleIsVisible = () => {
    this.isVisible = !this.isVisible;
  }
}

export default SidenavStore;