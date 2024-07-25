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
      Hello! I&apos;m Ben. I work as a software engineer and digital product designer and am based in Philadelphia. I like it here; I&apos;m never more than a short bike ride away from <a href="https://www.paradigmarts.org/" target="_blank" rel="noreferrer">art</a>, <a href='https://utphilly.com/' target="_blank" rel="noreferrer">music</a>, <a href="http://royalsushiandizakaya.com/" target="_blank" rel="noreferrer">restaurants</a>, <a href="https://www.lemonhillaikido.com/" target="_blank" rel="noreferrer">the dojo</a>, and nature. I enjoy reading, playing guitar, studying Aikido, and ocassionally writing. Let&apos;s be friends on <a href='https://www.goodreads.com/user/show/23506884-ben-saff' target="_blank" rel="noreferrer">Goodreads</a>.
    </p>
    <p>
      I built this site using React.
    </p>
    <a href="" onClick={handleClick}>Switch to Vue.js</a>
  </Page>
);

export default Home;
