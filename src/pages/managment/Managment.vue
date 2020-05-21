<template>
  <div class="managment">
    <Header />
    <div class="managment_box">
      <LeftMenu />
      <div class="managment_box__content">
        <div class="managment_box__content__headerBox">
          <h3 class="managment_box__content__header">Potato</h3>
          <Button1 title="Managment"/>
        </div>

        <div class="managment_box__content_infoBox">
          <Stat />
          <History />
        </div>
        <Dict />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'
  import Button1 from '../../components/Button1'
  import LeftMenu from './components/LeftMenu'
  import Stat from './components/Stat'
  import History from './components/History'
  import Dict from './components/Dict'

  export default {
    name: 'Managment',
    components: {
      Header,
      Footer,
      LeftMenu,
      Stat,
      History,
      Button1,
      Dict
    }
  }
</script>

<style lang="scss" scoped>
  .managment {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .managment_box {
    font-family: 'Nunito', sans-serif;
    flex: 1;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    color:#3D3D3D;

    &__content {
      flex: 1;
      background-image: url('components/pic/main_info_bcg.png');
      padding: 2.6vh 3vw 2.6vh 3vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__headerBox {
        display: flex;
        justify-content: space-between;
      }

      &__header {
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
        width: 100%;
        border-bottom: 1px solid #fff;
      }

      &_infoBox {
        flex:1;
        display: flex;
        justify-content: space-between;
        margin-top: 3vh;
      }

    }
  }
</style>