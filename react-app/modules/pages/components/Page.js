import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '../css/Page.css';

const Page = ({ title, children }) => (
  <div className={styles.wrapper}>
    {title && <h1>{title + ' –'}</h1>}
    {children}
  </div>
);

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default Page;
