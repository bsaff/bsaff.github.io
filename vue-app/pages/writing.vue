<script>
  import list from '../components/list';
  import { WritingLinks } from '../../react-app/modules/pages/data';

  export default {
    components: {
      list
    },
    props: {
      items: {
        type: Array,
        default: WritingLinks
      }
    }
  }
</script>

<template>
  <page title="writing">
    <list :items="items"></list>
  </page>
</template >



