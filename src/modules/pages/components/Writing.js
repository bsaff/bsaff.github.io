import React from 'react';
import List from '../../core/components/List';
import { WritingLinks } from '../data';

const Writing = () => (
  <div>
    <h1>writing – </h1>
    <List items={WritingLinks} />
  </div>
);

export default Writing;
