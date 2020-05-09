import React, { FunctionComponent } from 'react'
import { useFriendStore } from '../../hooks';
import { observer } from 'mobx-react';
import { FriendListItem } from '.';
import { TFriendListProps, TFriend } from '../../types';

const FriendList: FunctionComponent<TFriendListProps> =
  observer(({
    title,
    friends: friendsFromProp,
    isSingle = false,
    isFavorite = false
  }) => {
    const { getFilteredFriends } = useFriendStore();
    const friends: TFriend[] = friendsFromProp || getFilteredFriends({ isSingle, isFavorite })

    return (
      <div className="FriendList">
        {title && title}
        {friends.map((friend, i) => <FriendListItem key={i} friend={friend} />)}
      </div>
    )
  })

export default FriendList
