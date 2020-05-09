import { observable, action, computed } from 'mobx';
import { TFriend, TGetFilteredFriendsParams } from '../types';

// TODO: Create root store
export function FriendStore() {
  return {
    friends: [] as TFriend[],

    makeFriend({ name, isFavorite = false, isSingle = false }: TFriend) {
      const oldFriend = this.friends.find(friend => friend.name === name)
      if (oldFriend) {
        oldFriend.isFavorite = isFavorite
        oldFriend.isSingle = isSingle
      } else {
        this.friends.push({ name, isFavorite, isSingle })
      }
    },

    getFilteredFriends({
      isSingle,
      isFavorite
    }: TGetFilteredFriendsParams) {
      return this.friends.filter(friend => {
        if (isSingle && !friend.isSingle) return false;
        if (isFavorite && !friend.isFavorite) return false;
        return true
      })
    },

    get singleFriends() {
      return this.friends.filter(friend => friend.isSingle)
    },

    get favoriteFriends() {
      return this.friends.filter(friend => friend.isFavorite);
    },
  }
}

export class FriendStore2 {
  @observable
  friends: TFriend[] = [];

  @action
  makeFriend = ({
    name,
    isFavorite = false,
    isSingle = false
  }: TFriend) => {
    const oldFriend = this.friends.find(friend => friend.name === name)
    if (oldFriend) {
      oldFriend.isFavorite = isFavorite
      oldFriend.isSingle = isSingle
    } else {
      this.friends.push({ name, isFavorite, isSingle })
    }
  }

  @computed
  get singleFriends() {
    return this.friends.filter(friend => friend.isSingle)
  }

  @computed
  get favoriteFriends() {
    return this.friends.filter(friend => friend.isFavorite);
  }
}

export default FriendStore;
