import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';

const MOUNT_NODE = document.getElementById('app');

export default () => {
  ReactDOM.render(
    <AppRouter />,
    MOUNT_NODE,
  );
};

