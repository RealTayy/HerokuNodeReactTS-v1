import { TFriend } from '../types';

export function createFriendStore() {
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

    get singleFriends() {
      return this.friends.filter(friend => friend.isSingle)
    },

    get favoriteFriends() {
      return this.friends.filter(friend => friend.isFavorite);
    }
  }
}
