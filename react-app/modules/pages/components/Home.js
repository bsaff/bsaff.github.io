import React from 'react';
import styles from '../css/Page.css';
import Page from './Page';

const handleClick = () => {
  localStorage.setItem('USE_VUE', true);
  location.href = '/';
};

const Home = () => (
  <Page title="hello">
    <p className={styles.text}>
      My name is Ben.
      <br />
      I&apos;m a software engineer based in Philadelphia.
      <br/>
      I built this site using React – no templates or boilerplates.
      <br />
      I enjoy reading books and occassionally writing for fun.
      <br />
      My first book of poetry can be purchased <a href={'https://www.tohopub.com/product-page/minor-league-all-american-dance-club-ben-saff'}>here.</a>
      <br /> 
      To whomever is reading this, I wish you well :)
    </p>
    <a href="" onClick={handleClick}>Switch to Vue.js</a>
  </Page>
);

export default Home;
