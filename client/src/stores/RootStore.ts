import { FriendStore } from ".";

class RootStore {
  friendStore: FriendStore;
  constructor() {
    this.friendStore = new FriendStore
  }
}

export default RootStore;