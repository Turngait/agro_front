<template>
  <div class="header_box">
    <p class="logo">AgroControll</p>
    <nav class="header_box__nav">
      <router-link class="header_box__nav_item" to="/managment">Managment</router-link>
      <router-link class="header_box__nav_item" to='/'>Profile</router-link>
      <router-link to='/logout' class="header_box__nav_item">LogOut</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  .header_box {
    padding: 1vh 1.5vw;
    background-color: #1ABC00;
    color: #fff;
    font-family: 'Lora', serif;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    z-index: 10;

    &__nav {
      align-self: center;

      &_item {
        color: #fff;
        text-decoration: underline;
        cursor: pointer;
        margin-right: 1vw;
        font-size: 1.4rem;
        font-weight: bold;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .logo {
    font-weight: bold;
    font-size: 2rem;
    margin: 0;
  }
</style>