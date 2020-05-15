import React, { FunctionComponent, HTMLAttributes, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { Route, useLocation } from 'react-router-dom';
import { Home, AddFriend, Friends, FriendsDetail } from '../../pages';
import { useStore } from '../../hooks';
import { _App, _App_Content } from './AppStyles'

const App: FunctionComponent<HTMLAttributes<HTMLDivElement>> = () => { 
  
  // Updates mobX locationStore everytime user navigates to another page
  const { locationStore } = useStore();
  const { pathname } = useLocation();  
  useEffect(() => {
    locationStore.setPathname(pathname)
  }, [pathname])

  return (
    <_App>
      <Navbar />
      <_App_Content>
        <Route path="/" exact component={Home} />
        <Route path="/add-friend" exact component={AddFriend} />
        <Route path="/friends" exact component={Friends} />
        <Route path="/friends/:id" exact component={FriendsDetail} />
      </_App_Content>
    </_App>
  );
}

export default App;