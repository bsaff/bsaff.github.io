import React from 'react';
import styles from '../css/Page.css';

const Page = ({ children }) => (
  <div className={styles.wrapper}>{children}{console.log(styles)}</div>
);

export default Page;
