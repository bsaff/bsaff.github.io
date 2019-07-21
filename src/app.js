import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';

// TODO: fix webpack dev server to output this
if (process.env.NODE_ENV === 'development') {
  document.body.innerHTML = '<div id="app"></div>';
}

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <AppRouter />,
    MOUNT_NODE,
  );
};

render();
