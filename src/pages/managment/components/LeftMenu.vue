<template>
  <div class="leftMenu">
    <h4 class="leftMenu__header">Cultures</h4>
    <nav class="leftMenu__boxList">
      <button class="leftMenu__boxList_item">Potato</button>
      <button class="leftMenu__boxList_item">Carrot</button>
      <button class="leftMenu__boxList_item">Onion</button>
    </nav>
    <button class="leftMenu__boxList_item">Add culture</button>
  </div>
</template>

<script>
  export default {
    name: 'LeftMenu'
  }
</script>

<style lang="scss" scoped>
  .leftMenu {
    width: 10vw;
    background: #149200;
    color:#fff;
    padding: 2.6vh 1.5vw;
    background-image: url('pic/left_menu_bcg.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    &__header {
      font-size: 1.7rem;
      font-weight: bold;
      margin: 0;
      width: 100%;
      border-bottom: 1px solid #fff;
    }

    &__boxList {
      margin-top: 2vh;
      flex:1;

      &_item {
        display: block;
        background: none;
        border:none;
        color: #fff;
        font-size: 1.5rem;
        text-decoration: underline;
        margin-bottom: 1.2vh;
        cursor: pointer;
        font-family: 'Nunito', sans-serif;
        
      }
    }
  }
</style>