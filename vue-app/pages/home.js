// Define a new component called button-counter

const SOURCE_CODE_URL = 'https://github.com/bsaff/bsaff.github.io';

Vue.component('home-page', {
  methods: {
    handleClick() {
      localStorage.removeItem('USE_VUE');
      location.href = '/';
    },
  },
  template: `
    <div class="home-page">
    <h1>hello – </h1>
    <p>My name is Ben. I&apos;m a software enginner. This is the Vue.js version of my site. You can view the source code <a href=${SOURCE_CODE_URL}>here.</a></p>
    <button @click="handleClick">Switch to React</button>
  </div>
  `
});
