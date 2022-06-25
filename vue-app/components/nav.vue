<script>
  import Logo from '../assets/bsaff-red-logo.jpg';
  export default {
    data() {
      return {
        links: [
          {
            name: 'home',
            href: '#home'
          },
          {
            name: 'music',
            href: '#music'
          },
          {
            name: 'writing',
            href: '#writing'
          }
        ]
      }
    },
  }
</script>

<template>
  <nav>
    <div class=${header}>
      <img src=${Logo} alt="Ben's face on a whiteboard" />
    </div>
    <div class=${links}>
      <a :href="link.href" v-for="link in links">{{link.name}}</a>
    </div>
  </nav>
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
