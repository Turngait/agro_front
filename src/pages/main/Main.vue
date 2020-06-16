<template>
  <div class="mainPage">
    <Header typeNav="signUp"/>
    <div class="mainPage__info">
      <form v-if="signInOpen" class="mainPage__info__authBox">
        <h3 class="mainPage__info__authBox__header">Sign In</h3>
        <input class="inp" name="email" placeholder="Ваш e-mail..." v-model="email" @change="updateEmail">
        <input class="inp" type="password" name="pass" placeholder="Ваш пароль..." v-model="pass" @change="updatePass">
        <button class="btn" type="button" @click="signIn">Sign In</button>
      </form>
      <form v-else class="mainPage__info__authBox">
        <h3 class="mainPage__info__authBox__header">Sign Up</h3>
        <input class="inp" name="email" placeholder="Ваш e-mail..." v-model="email" @change="updateEmail">
        <input class="inp" name="name" placeholder="Ваше имя..." v-model="name" @change="updateName">
        <input class="inp" type="password" name="pass" placeholder="Ваш пароль..." v-model="pass" @change="updatePass">
        <button class="btn" type="button" @click="signUp">Sign Up</button>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'

  export default {
    name: 'MainPage',
    data() {
      return {
        name: '',
        email: '',
        pass: '',
        token: ''
      }
    },
    components: {
      Header,
      Footer
    },
    computed: {
      signup () {
        return this.$store.getters['users/signup']
      },
      signInOpen () {
        return this.$store.getters['users/signInOpen']
      }
    },
    methods: {
      updateName () {
        this.$store.commit('users/setSignUpName', this.name)
      },
      updateEmail () {
        this.$store.commit('users/setSignUpEmail', this.email)
      },
      updatePass () {
        this.$store.commit('users/setSignUpPass', this.pass)
      },
      async signUp () {
        const result = await this.$store.dispatch('users/signUp')
        if(result) {
          this.$router.push('managment')
        }
      },
      async signIn () {
        const result = await this.$store.dispatch('users/signIn')
        if(result) {
          this.$router.push('managment')
        }
      }
    },
    mounted () {
      this.token = localStorage.getItem('token')
      if (this.token) {
        this.$router.push('managment')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../config/var.scss';

  .mainPage {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &__info {
      flex: 1;
      background-image: url('../managment/components/pic/main_info_bcg.png');

      &__authBox {
        margin-left: auto;
        margin-right: 0;
        width: 26vw;
        height: 100%;
        background: $main-color;
        padding: 7vh 3vw;
        color: #fff;

        &__header {
          font-size: 2rem;
          font-weight: bold;
          text-align: right;
          margin-bottom: 2vh;
        }
      }
    }
  }

  .inp {
    display: block;
    margin: auto;
    margin-bottom: 1.5vh;
    border: none;
    border-radius: 3px;
    padding: 0.3vh 1vw;
    min-width: 90%;
    font-size: 1.4rem;

    &:focus {
      outline: none;
    }
  }

  .btn {
    display: block;
    margin: auto;
    background: $second-color;
    color: #fff;
    font-size: 1.4rem;
    padding: 0.5vh 2vw;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    border: 2px solid $second-color;


    &:hover {
      background: #149200;
      border: 2px solid #107400;
    }
  }

</style>