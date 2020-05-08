import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { FriendStoreProvider } from './providers';
import { configure } from "mobx";

// TODO: Re-enable this stuff
// MobX Configuration
// configure({
//   computedRequiresReaction: true,
//   observableRequiresReaction: true,
//   reactionRequiresObservable: true,
//   enforceActions: "observed"
// })

ReactDOM.render(
  <React.StrictMode>
    {/* // TODO: Refactor into root store and move into root/index.tsx */}
    <FriendStoreProvider>
      <App />
    </FriendStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
