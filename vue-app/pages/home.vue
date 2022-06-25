<script>
  const SOURCE_CODE_URL = 'https://github.com/bsaff/bsaff.github.io';

  export default {
    methods: {
      handleClick() {
        localStorage.removeItem('USE_VUE');
        location.href = '/';
      },
    }
  }
</script>

<template>
  <page title="hello!">
    <p className={styles.text}>
      My name is Benjamin Saff. I'm a software engineer based in Philadelphia. I like it here. I'm never more than a short bike ride away from <a href="https://www.paradigmarts.org/" target="_blank" rel="noreferrer">art</a>, <a href='https://utphilly.com/events/' target="_blank" rel="noreferrer">music</a>, <a href="http://royalsushiandizakaya.com/" target="_blank" rel="noreferrer">restaurants</a>, and nature. I enjoy reading books, playing guitar, and ocassionally writing, too. My friends, family, and partner are most important to me. If you are a bookworm too, let's be friends on <a href='https://www.goodreads.com/user/show/23506884-ben-saff' target="_blank" rel="noreferrer">Goodreads</a>.
    </p>
    <p>
      I built this site using Vue. I don't use Vue normally but I wanted to try it out. I don't really like it so far 💁‍♂️
    </p>
    <a href=${SOURCE_CODE_URL}/>View source code</a>
    <br>
    <a href="" @click="handleClick">Switch to React</a>
  </page>
</template>
