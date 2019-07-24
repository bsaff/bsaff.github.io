import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/writing/">Writing</Link>
  </nav>
);

export default Nav;
