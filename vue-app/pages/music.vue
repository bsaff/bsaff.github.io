<script>
  import list from '../components/list';
  import { MusicLinks } from '../../react-app/modules/pages/data';

  export default {
    components: {
      list
    },
    props: {
      items: {
        type: Array,
        default: MusicLinks
      }
    }
  }
</script>

<template>
  <page title="music projects">
    <list :items="items"></list>
  </page>
</template>

