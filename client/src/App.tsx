import React from 'react';
import { FormCreateFriend } from './components/Form';
import { FriendList } from './components/FriendList';

function App() {
  return (
    // TODO: Refactor into root store and move into root/index.tsx
    <div className="App">
      <FormCreateFriend />
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
    </div>
  );
}

export default App;
