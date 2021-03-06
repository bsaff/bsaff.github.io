import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/List.css';

const List = ({ items }) => (
  <div className={styles.wrapper}>
    {items.map(i => (
      <div className={styles.item} key={i.label}>
        <a href={i.url}>{i.label}</a>
        <div>{i.postLabel && `${i.postLabel}`}</div>
      </div>
    ))}
  </div>
);

export default List;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};
