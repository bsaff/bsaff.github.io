import React from 'react';
import styles from '../css/Home.css';

const SOURCE_CODE_URL = 'https://github.com/bsaff/bsaff.github.io';

const Home = () => (
  <div>
    <h1>hello – </h1>
    <p className={styles.text}>My name is Ben. I&apos;m a software enginner. This site is built with React, Babel, & Webpack. I plan to build an alternate version in Vue.js. You can view the source code <a href={SOURCE_CODE_URL}>here.</a></p>
  </div>
);

export default Home;
