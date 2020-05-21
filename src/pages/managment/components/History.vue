<template>
  <div>
    <h5 class="history_box__header">История</h5>
    
      <span class="history_box__item">20 04 2020 - Посажено: 20 саженцев</span>
      <span class="history_box__item">20 04 2020 - Посажено: 20 саженцев</span>
      <span class="history_box__item">20 04 2020 - Посажено: 20 саженцев</span>
      <span class="history_box__item">20 04 2020 - Посажено: 20 саженцев</span>
  </div>
</template>

<script>
  export default {
    name: 'History'
  }
</script>

<style lang="scss" scoped>
  .history_box {
    margin-top:3vh;

    &__header {
      font-size: 1.4rem;
      border-bottom: 1px solid #333;
    }

    &__item {
      display: block;
      margin-top: 1.5vh;
      font-size: 1.3rem;
    }
  }
</style>