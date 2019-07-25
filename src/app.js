import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';

// TODO: fix webpack dev server to output this
if (process.env.NODE_ENV === 'development') {
  const mountNode = document.createElement("div");
  mountNode.id = 'app';
  document.body.prepend(mountNode);
}

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <AppRouter />,
    MOUNT_NODE,
  );
};

render();
