<template>
  <div class="managment">
    <Header />
    <div class="managment_box">
      <LeftMenu />
      <div class="managment_box__content">
        <h1>Potato</h1>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'
  import LeftMenu from './components/LeftMenu'

  export default {
    name: 'Managment',
    components: {
      Header,
      Footer,
      LeftMenu
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

    &__content {
      flex: 1;
    }
  }
</style>