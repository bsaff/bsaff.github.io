import Logo from '../assets/bsaff-red-logo.jpg';
import styles from '../css/nav.css';

// Define a new component called button-counter
Vue.component('b-nav', {
  data() {
    return {
      links: [
        {
          name: 'home',
          href: '#home'
        },
        {
          name: 'music',
          href: '#music'
        },
        {
          name: 'writing',
          href: '#writing'
        }
      ]
    }
  },
  template: `
    <nav>
      <div class=${styles.header}>
        <img src=${Logo} alt="Ben's face on a whiteboard" />
      </div>
      <div class=${styles.links}>
        <a :href="link.href" v-for="link in links">{{link.name}}</a>
      </div>
    </nav>
  `
});
