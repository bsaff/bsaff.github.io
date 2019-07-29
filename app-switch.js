/**
 * This script will switch between React & Vue source code
 * based on user's localStorage state
 */

const USE_VUE_FLAG = 'USE_VUE';
const REACT_INIT_SCRIPT = 'dist/react-app.js';
const VUE_INIT_SCRIPT = 'dist/vue-app.js';

if (!window.APP_RENDERED) {
  const script = document.createElement('script');
  script.type = 'text/javascript';

  const useVue = window && window.localStorage && window.localStorage.getItem(USE_VUE_FLAG);

  if (useVue) {
    script.src = VUE_INIT_SCRIPT;
  } else {
    script.src = REACT_INIT_SCRIPT;
  }
  document.body.appendChild(script);
  window.APP_RENDERED = true;
}
