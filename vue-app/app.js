import './components/nav';
import './layouts/body';

const Home = { template: '<p>Home</p>' };
const Music = { template: '<p>Music</p>' };
const Writing = { template: '<p>Writing</p>' };
const NotFound = { template: '<p>Not found</p>' };

const routes = {
  '/': Home,
  '/music': Music,
  '/writing': Writing
};

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
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
