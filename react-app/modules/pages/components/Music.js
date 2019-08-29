import React from 'react';
import List from '../../core/components/List';
import { MusicLinks } from '../data';
import Page from './Page';

const Music = () => (
  <Page title="music projects">
    <List items={MusicLinks} />
  </Page>
);

export default Music;
