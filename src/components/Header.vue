<template>
  <div class="header_box">
    <p class="logo">AgroControll</p>
    <nav v-if="typeNav === 'managment'" class="header_box__nav">
      <router-link class="header_box__nav_item" to="/managment">Managment</router-link>
      <router-link class="header_box__nav_item" to='/'>Profile</router-link>
      <button @click="logOut" class="header_box__nav_item">LogOut</button>
    </nav>

    <nav v-else-if="typeNav === 'signUp'" class="header_box__nav">
      <button @click="openSignIn" class="header_box__nav_item">Sign In</button>
      <button @click="openSignUp" class="header_box__nav_item">Sign Up</button>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      typeNav: String
    },
    methods: {
      openSignIn() {
        this.$store.commit('users/changeSignInOpen', true)
      },
      openSignUp() {
        this.$store.commit('users/changeSignInOpen', false)
      },
      logOut () {
        localStorage.removeItem('token')
        this.$router.push('/')
      }
    }
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
        background: none;
        border: none;
        font-family: 'Lora', serif;

        &:last-child {
          margin-right: 0;
        }

        &:focus {
          outline: none;
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