// Define a new component called button-counter
import styles from '../css/page.css';

Vue.component('page', {
  props: ['title'],
  template: `
  <div class=${styles.wrapper}>
    <h1>{{title + ' –'}}</h1>
    <slot></slot>
  </div>
  `
});
