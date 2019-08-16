import './components/nav';
import './layouts/body';
import { getTemplate, ROUTES } from './router/routes';
import './css/index.css';

// set default location
window.location.hash = ROUTES.HOME;

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.hash
  },
  computed: {
    ViewComponent() {
      return getTemplate(this.currentRoute);
    }
  },
  render(createElement) {
    return createElement('div', [
      createElement('b-nav'),
      createElement('b-body', [
        createElement(this.ViewComponent)
      ])
    ]);
  }
});

window.addEventListener('hashchange', function() {
  app.currentRoute = window.location.hash;
});
