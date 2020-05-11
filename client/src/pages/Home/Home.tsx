import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FriendList } from '../../components/FriendList';

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div className="Home">
      I am the Home Page
    </div>
  )
}

export default Home
