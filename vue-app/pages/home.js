// Define a new component called button-counter

const SOURCE_CODE_URL = 'https://github.com/bsaff/bsaff.github.io';

Vue.component('home-page', {
  data: {
    SOURCE_CODE_URL
  },
  template: `
    <div class="home-page">
    <h1>hello – </h1>
    <p>My name is Ben. I&apos;m a software enginner. This site is built with React, Babel, & Webpack. I plan to build an alternate version in Vue.js. You can view the source code <a href={{SOURCE_CODE_URL}}>here.</a></p>
  </div>
  `
});
