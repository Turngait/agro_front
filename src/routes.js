import VueRouter from 'vue-router'
import Main from './pages/main/Main.vue'
import Managment from './pages/managment/Managment.vue'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Main

    },
    {
      path: '/managment',
      component: Managment
    }
  ],
  mode: 'history'
})
