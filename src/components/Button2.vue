<template>
  <button type="button" class="button1" @click="onClick">
    {{title}}
  </button>
</template>

<script>
  export default {
    name:'Button2',
    props: {
      title: String,
      onClick: Function
    }
  }
</script>

<style lang="scss" scoped>
@import '../config/var.scss';

  .button1 {
    background: $darker-main-color;
    color: #fff;
    font-size: 1.4rem;
    padding: 0.5vh 2vw;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    border: 2px solid $darker-main-color;


    &:hover {
      background: #107400;
      border: 2px solid $darker-main-color;
    }
    &:focus {
      outline: none;
    }
  }
</style>