import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Navbar } from '../Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, AddFriend, Friends, FriendsDetail } from '../../pages';
import { _App, _App_Content } from './AppStyles'

const App: FunctionComponent<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <_App>
      <Router>
        <Navbar />
        <_App_Content>
          <Route path="/" exact component={Home} />
          <Route path="/add-friend" exact component={AddFriend} />
          <Route path="/friends" exact component={Friends} />
          <Route path="/friends/:id" exact component={FriendsDetail} />
        </_App_Content>
      </Router>
    </_App>
  );
}

export default App;