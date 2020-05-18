import React, { FunctionComponent, HTMLAttributes, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { Route, useLocation, Switch } from 'react-router-dom';
import { Home, AddFriend, Friends, FriendsDetail } from '../../pages';
import { useStore } from '../../hooks';
import { useTransition } from 'react-spring';
import { _App, _App_Content, _App_Navbar, _App_Content_Routes } from './AppStyles';

const App: FunctionComponent<HTMLAttributes<HTMLDivElement>> = () => {

  // Updates mobX locationStore everytime user navigates to another page
  const { locationStore } = useStore();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    locationStore.setPathname(pathname)
  }, [pathname])

  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  })


  return (
    <_App>
      <_App_Navbar>
        <Navbar />
      </_App_Navbar>
      <_App_Content>
        {transitions.map(({
          item: location,
          props,
          key
        }) =>
          <_App_Content_Routes key={key} style={props} >
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/friends" exact component={Friends} />
              <Route path="/friends/:id" exact component={FriendsDetail} />
              <Route path="/add-friend" exact component={AddFriend} />
            </Switch>
          </_App_Content_Routes>

        )}
      </_App_Content>
    </_App>
  );
}

export default App;