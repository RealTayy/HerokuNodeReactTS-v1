import React from 'react'
import { observer } from 'mobx-react';
import { TFriendListItemProps } from '../../types';

const FriendListItem = observer(({ friend }: TFriendListItemProps) => {
  const { name, isFavorite, isSingle } = friend;
  return (
    <div className="FriendListItem">
      {name} {isSingle && ' ♥ '} {isFavorite && ' ★ '}
    </div>
  )
})

export default FriendListItem
