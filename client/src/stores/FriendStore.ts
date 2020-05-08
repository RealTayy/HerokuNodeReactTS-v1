import { observable, action, computed } from 'mobx';
import { TFriend, TGetFilteredFriendsParams } from '../types';

// TODO: Convert to Class Store
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
