import React from 'react';
import List from '../../core/components/List';
import { MusicLinks } from '../data';

const Music = () => (
  <div>
    <h1>music projects – </h1>
    <List items={MusicLinks} />
  </div>
);

export default Music;
