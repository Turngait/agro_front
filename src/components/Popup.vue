<template>
  <div class="popup">
    <div class="popup__box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PopUp',
  }
</script>

<style lang="scss" scoped>
@import '../config/var.scss';

  .popup {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.301);
    z-index: 100;

    &__box {
      margin: auto;
      margin-top: 7%;
      width: 40%;
      background: $main-color;
      border-radius: 5px;
      padding: 3vh 3vw;
      text-align: center;
    }
  }
</style>