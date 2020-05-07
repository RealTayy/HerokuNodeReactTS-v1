import React from 'react';
import { FormCreateFriend } from './components/Forms';
import { FriendStoreProvider } from './providers';
import { FriendList } from './components/FriendList';

function App() {
  return (
    <FriendStoreProvider>
      <div className="App">
        <FormCreateFriend />
        <FriendList />
      </div>
    </FriendStoreProvider>
  );
}

export default App;
