import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'mobx-react-lite/batchingForReactDom'
import { configure } from "mobx";

// TODO: Re-enable this stuff
// MobX Configuration
configure({
  computedRequiresReaction: true,
  observableRequiresReaction: true,
  reactionRequiresObservable: true,
  enforceActions: "observed"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
