import Vue from 'vue'
import Vuex from 'vuex'
import users from './users/users'
import managment from './managment/managment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    managment
  }
})