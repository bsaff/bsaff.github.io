import React from 'react';
import List from '../../core/components/List';
import { WritingLinks } from '../data';
import Page from './Page';

const Writing = () => (
  <Page title="writing">
    <List items={WritingLinks} />
  </Page>
);

export default Writing;
