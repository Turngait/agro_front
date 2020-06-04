import {API_URL} from '../../config'

export default {
  namespaced: true,
  state: {
    signup: {
      name: '',
      email: '',
      pass: ''
    }
  },
  getters: {
    signup(state) {
      return state.signup
    }
  },
  mutations: {
    setSignUpName(state, payload) {
      state.signup.name = payload
    },
    setSignUpEmail(state, payload) {
      state.signup.email = payload
    },
    setSignUpPass(state, payload) {
      state.signup.pass = payload
    }
  },
  actions: {
    async signUp(state) {
      const {signup} = state.state
      fetch(API_URL + '/user/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(signup)
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }
}