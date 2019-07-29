/**
 * This script will switch between React & Vue app rendering
 * based on user's localStorage state
 */

import initReact from './react-app/app';
import initVue from './vue-app/app';

if (window && window.localStorage && window.localStorage.getItem('USE_VUE')) {
  initVue();
} else initReact();