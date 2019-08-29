import './page';
import '../components/list';
import { MusicLinks } from '../../react-app/modules/pages/data';

Vue.component('music-page', {
  props: {
    items: {
      default: MusicLinks
    }
  },
  template: `
  <page title="music projects">
    <list :items="items"></list>
  </page>
  `
});
