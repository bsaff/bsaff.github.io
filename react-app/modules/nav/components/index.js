import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Nav.css';
import Logo from '../assets/bsaff-red-logo.jpg';

const Nav = () => (
  <nav>
    <div className={styles.header}>
      <img src={Logo} alt="Ben's face on a whiteboard" />
    </div>
    <div className={styles.links}>
      <Link to="/">home</Link>
      <Link to="/writing/">writing</Link>
      <Link to="/music/">music</Link>
    </div>
  </nav>
);

export default Nav;
