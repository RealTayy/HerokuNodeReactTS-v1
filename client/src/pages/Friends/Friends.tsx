import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { FriendList } from '../../components/FriendList'
import { Container } from '../../components/Container';
import { _Friends, _Friends_Container } from './FriendsStyles';
const Friends: FunctionComponent<RouteComponentProps> = () => {
  return (
    <_Friends>
      <Container>
        <FriendList
          title="All friends"
        />
        <FriendList
          title="Single friends"
          isSingle
        />
        <FriendList
          title="Favorite friends"
          isFavorite
        />
        <FriendList
          title="Single & Favorite Friends"
          isSingle
          isFavorite
        />
      </Container>
    </_Friends>
  )
}

export default Friends
