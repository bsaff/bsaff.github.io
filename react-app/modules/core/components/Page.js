import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Page.css';

const Page = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Page;

Page.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};
