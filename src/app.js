import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE,
  );
};

render();

// todo: hot reload