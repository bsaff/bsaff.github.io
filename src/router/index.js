import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../modules/home/components/Home';
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
            <Route component={NotFound} />
          </Switch>
        </Page>
    </Router>
  );
}

export default AppRouter;
