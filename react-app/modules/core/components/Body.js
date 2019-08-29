import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Body.css';

const Body = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Body;

Body.propTypes = {
  children: PropTypes.node
};
