import { FriendStore } from '../stores/FriendStore';

// TODO: Maybe make this a little more explicit? Also maybe don't even have Typing in seperate file..?
type TFriendStore = ReturnType<typeof FriendStore>

export default TFriendStore;