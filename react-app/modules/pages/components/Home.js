import React from 'react';
import styles from '../css/Page.css';
import Page from './Page';

const handleClick = () => {
  localStorage.setItem('USE_VUE', true);
  location.href = '/';
};

const Home = () => (
  <Page title="hello">
    <p className={styles.text}>My name is Ben. I&apos;m a software enginner. This site is built with React, Babel, & Webpack.</p>
    <a href="" onClick={handleClick}>Switch to Vue.js</a>
  </Page>
);

export default Home;
