import styles from '../css/list.css';

// Define a new component called button-counter
Vue.component('list', {
  props: ['items'],
  template: `
    <div class=${styles.wrapper}>
      <div class=${styles.item} v-for="i in items">
        <a :href="i.url">{{i.label}}</a>
        <div v-if="i.postLabel" >{{i.postLabel}}</div>
      </div>
    </div>
  `
});
