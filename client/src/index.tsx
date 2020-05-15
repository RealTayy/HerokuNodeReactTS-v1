import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import { App } from './components/App';
import 'mobx-react-lite/batchingForReactDom'
import { configure } from "mobx";
import { BrowserRouter as Router } from 'react-router-dom';


// MobX Configuration
configure({
  computedRequiresReaction: true,
  observableRequiresReaction: true,
  reactionRequiresObservable: true,
  enforceActions: "observed"
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
