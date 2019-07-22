import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Nav.css';

const Nav = () => (
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
);

export default Nav;
