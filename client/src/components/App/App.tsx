import React from 'react';
import { Navbar } from '../Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, AddFriend, Friends, FriendsDetail } from '../../pages';
import { App, App_Content } from './AppStyles'
export default () => {
  return (
    <App>
      <Router>
        <Navbar />
        <App_Content className="App__content">
          <Route path="/" exact component={Home} />
          <Route path="/add-friend" exact component={AddFriend} />
          <Route path="/friends" exact component={Friends} />
          <Route path="/friends/:id" exact component={FriendsDetail} />
        </App_Content>
      </Router>
    </App>
  );
}