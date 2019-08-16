import React from 'react';
import styles from '../css/Footer.css';
import GitHubLogo from '../assets/GitHub-Mark-32px.png';

const SOURCE_CODE_URL = 'https://github.com/bsaff/bsaff.github.io';

const Footer = () => (
  <div className={styles.wrapper}>
    <a href={SOURCE_CODE_URL}><img src={GitHubLogo} alt="Github" /></a>
  </div>
);

export default Footer;
