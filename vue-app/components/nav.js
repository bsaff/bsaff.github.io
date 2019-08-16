import Logo from '../assets/bsaff-red-logo.jpg';

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
      <div className={styles.header}>
        <img src=${Logo} alt="Ben's face on a whiteboard" />
      </div>
      <div class="links" v-for="link in links">
        <a :href="link.href">{{link.name}}</a>
      </div>
    </nav>
  `
});
