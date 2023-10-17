import React from 'react';
import List from '../../core/components/List';
import { EditingLinks, WritingLinks } from '../data';
import Page from './Page';

const Writing = () => (
  <Page title="writing">
    <List items={WritingLinks} />
    <h1>editing</h1>
    <List items={EditingLinks} />
  </Page>
);

export default Writing;
