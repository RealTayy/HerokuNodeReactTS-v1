import {
  FriendStore,
  LocationStore
} from ".";

class RootStore {
  friendStore: FriendStore;
  locationStore: LocationStore;

  constructor() {
    this.friendStore = new FriendStore(this);
    this.locationStore = new LocationStore(this);
  }
}

export default RootStore;