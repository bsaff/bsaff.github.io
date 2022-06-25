<script>
  export default {
    props: {
      items: {
        type: Array
      }
    }
  }
</script>

<template>
  <div class=${wrapper}>
    <div class=${item} v-for="i in items">
      <a :href="i.url">{{i.label}}</a>
      <div v-if="i.postLabel" >{{i.postLabel}}</div>
    </div>
  </div>
</template>

<style>

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .item {
    margin-bottom: 15px;
  }

  .item > div {
    font-size: 0.8em;
  }

</style>
