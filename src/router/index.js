import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../components/Home';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writing/">Writing</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default AppRouter;
