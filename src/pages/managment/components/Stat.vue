<template>
  <div class="stat_box">
    <h5 class="stat_box__header">Сатистика</h5>
    
      <span class="stat_box__item">В процессе: 20 саженцев</span>
      <span class="stat_box__item">Испорчено:</span>
      <span class="stat_box__item">Выращено:</span>
      <span class="stat_box__item">Остаток:</span>
  </div>
</template>

<script>
  export default {
    name: 'Stat'
  }
</script>

<style lang="scss" scoped>
  .stat_box {
    &__header {
      font-size: 1.4rem;
      border-bottom: 1px solid #333;
    }

    &__item {
      display: block;
      margin-top: 1.5vh;
      font-size: 1.3rem;
      padding-right: 5vw;

    }
  }
</style>