import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, AddFriend, Friends, FriendsDetail } from './pages';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/add-friend" exact component={AddFriend} />
        <Route path="/friends" exact component={Friends} />
        <Route path="/friends/:id" exact component={FriendsDetail} />
      </Router>
    </div>
  );
}

export default App;
