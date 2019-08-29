import './page';
import '../components/list';
import { WritingLinks } from '../../react-app/modules/pages/data';

Vue.component('writing-page', {
  props: {
    items: {
      default: WritingLinks
    }
  },
  template: `
  <page title="writing">
    <list :items="items"></list>
  </page>
  `
});
