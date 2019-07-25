import React from 'react';
import styles from '../css/List.css';

const List = ({ items }) => (
  <div className={styles.wrapper}>
    {items.map(i => (<a href={i.url}>{i.label}</a>))}
  </div>
);

export default List;
