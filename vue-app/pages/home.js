import './page';

const SOURCE_CODE_URL = 'https://github.com/bsaff/bsaff.github.io';
const BOOK_URL = 'https://www.tohopub.com/product-page/minor-league-all-american-dance-club-ben-saff';

Vue.component('home-page', {
  methods: {
    handleClick() {
      localStorage.removeItem('USE_VUE');
      location.href = '/';
    },
  },
  template: `
  <page title="hello">
    <p className={styles.text}>
      My name is Ben.
      <br />
      I&apos;m a software engineer based in Philadelphia.
      <br/>
      I built this site using React; no templates or boilerplates.
      <br />
      You can view the source code <a href=${SOURCE_CODE_URL}>here.</a>
      <br />
      I love reading and occassionally writing poems, too.
      <br />
      My first book of poetry can be purchased <a href=${BOOK_URL}>here.</a>
    </p>
    <a href="" @click="handleClick">Switch to React</a>
  </page>
  `
});
