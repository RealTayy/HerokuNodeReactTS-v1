import {
  FriendStore,
  LocationStore,
  SidenavStore
} from ".";

class RootStore {
  friendStore: FriendStore;
  locationStore: LocationStore;
  sidenavStore: SidenavStore;

  constructor() {
    this.friendStore = new FriendStore(this);
    this.locationStore = new LocationStore(this);
    this.sidenavStore = new SidenavStore(this);
  }
}

export default RootStore;