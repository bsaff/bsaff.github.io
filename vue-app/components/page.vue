<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<template>
  <div class=${wrapper}>
    <h1>{{title + ' –'}}</h1>
    <slot></slot>
  </div>
</template>

<style>
  @import '../../react-app/modules/core/css/animations.css';

  .wrapper {
    padding: 20px 40px;
    margin-bottom: 20px; /* for footer */
  }

  .wrapper * {
    animation: fadeIn 250ms ease;
  }
</style>
