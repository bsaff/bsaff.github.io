import React from 'react';
import styles from '../css/Page.css';
import Page from './Page';

const handleClick = () => {
  localStorage.setItem('USE_VUE', true);
  location.href = '/';
};

const Home = () => (
  <Page>
    <p className={styles.text}>
      My name is Benjamin Saff. I&apos;m a software engineer based in Philadelphia. I like it here. I&apos;m never more than a short bike ride away from <a href="https://www.paradigmarts.org/" target="_blank" rel="noreferrer">art</a>, <a href='https://utphilly.com/events/' target="_blank" rel="noreferrer">music</a>, <a href="http://royalsushiandizakaya.com/" target="_blank" rel="noreferrer">restaurants</a>, and nature. I enjoy reading books, playing guitar, and ocassionally writing, too. My friends, family, and partner are most important to me. If you are a bookworm too, let&apos;s be friends on <a href='https://www.goodreads.com/user/show/23506884-ben-saff' target="_blank" rel="noreferrer">Goodreads</a>.
    </p>
    <p>
      I built this site using React.
    </p>
    <a href="" onClick={handleClick}>Switch to Vue.js</a>
  </Page>
);

export default Home;
