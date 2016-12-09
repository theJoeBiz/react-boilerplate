import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import App from './components/App';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}></Route>
      <Route path="page1" component={Page1}></Route>
      <Route path="page2" component={Page2}></Route>
    </Route>
  </Router>
), document.getElementById('root'));