import React from 'react';
import styles from '../css/Home.css';

const handleClick = () => {
  localStorage.setItem('USE_VUE', true);
  location.href = '/';
};

const Home = () => (
  <div>
    <h1>hello – </h1>
    <div className={styles.wrapper}>
      <p className={styles.text}>My name is Ben. I&apos;m a software enginner. This site is built with React, Babel, & Webpack.</p>
      <a href="" onClick={handleClick}>Switch to Vue.js</a>
    </div>
  </div>
);

export default Home;
