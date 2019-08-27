import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Grid from './demo/container/grid';
import Variables from './demo/container/variables';
import Mixins from './demo/container/mixins';

import './index.css';

ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path="/" component={Grid}></Route>
        <Route exact path="/variables" component={Variables}></Route>
        <Route exact path="/mixins" component={Mixins}></Route>
      </Switch>
  </Router>

  , document.getElementById('root'));
