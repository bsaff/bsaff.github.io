import nav from './components/nav';
import page from './components/page';
import { getTemplate, ROUTES } from './router/routes';
import './css/index.css';

// set default location
window.location.hash = ROUTES.HOME;

const app = Vue.createApp({
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return getTemplate(this.currentPath);
    }
  }
});

window.addEventListener('hashchange', function () {
  app.currentRoute = window.location.hash;
});

app
  .component('page', page)
  .component('b_nav', nav);


app.mount('#app');
