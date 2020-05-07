import React from 'react'
import { useFriendStore } from '../../hooks';
import { observer } from 'mobx-react';



const FriendList = observer(() => {
  const { friends, singleFriends } = useFriendStore();

  return (
    <div className="FriendList">
      I am the FriendList
    </div>
  )
})

export default FriendList
