import './page';

const SOURCE_CODE_URL = 'https://github.com/bsaff/bsaff.github.io';

Vue.component('home-page', {
  methods: {
    handleClick() {
      localStorage.removeItem('USE_VUE');
      location.href = '/';
    },
  },
  template: `
  <page title="hello">
    <p>My name is Ben. I&apos;m a software enginner. This site is built with Vue.js. You can view the source code <a href=${SOURCE_CODE_URL}>here.</a></p>
    <a href="" @click="handleClick">Switch to React</a>
  </page>
  `
});
