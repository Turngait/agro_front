<template>
  <button class="button1">
    {{title}}
  </button>
</template>

<script>
  export default {
    name:'Button1',
    props: ['title']
  }
</script>

<style lang="scss" scoped>
  .button1 {
    background: #149200;
    color: #fff;
    font-size: 1.4rem;
    padding: 0.5vh 2vw;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    border: 2px solid #149200;


    &:hover {
      background: #149200;
      border: 2px solid #107400;
    }
  }
</style>