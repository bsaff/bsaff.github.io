import './components/nav';
import './layouts/body';
import './pages/home';

const Home = 'home-page';
const Music = { template: '<p>Music</p>' };
const Writing = { template: '<p>Writing</p>' };
const NotFound = { template: '<p>Not found</p>' };

// set default
window.location.hash = '#home';

const routes = {
  '#home': Home,
  '#music': Music,
  '#writing': Writing
};

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.hash
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
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
