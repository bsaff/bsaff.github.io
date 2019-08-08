import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../modules/pages/components/Home';
import Writing from '../modules/pages/components/Writing';
import Music from '../modules/pages/components/Music.js';
import Page from '../modules/core/components/Page';
import NotFound from '../modules/core/components/NotFound';
import Nav from '../modules/nav/components';
import '../modules/core/css/index.css';

function AppRouter() {
  return (
    <Router>
      <Nav />
      <Page>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/writing" exact component={Writing} />
          <Route path="/music" exact component={Music} />
          <Route component={NotFound} />
        </Switch>
      </Page>
    </Router>
  );
}

export default AppRouter;
