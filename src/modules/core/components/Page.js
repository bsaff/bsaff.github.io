import React from 'react';
import styles from '../css/Page.css';

const Page = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Page;
