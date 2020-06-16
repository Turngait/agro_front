import {API_URL} from '../../config'

export default {
  namespaced: true,
  state: {
    signup: {
      name: '',
      email: '',
      pass: ''
    },
    signInOpen: true,
    token: ''
  },
  getters: {
    signup(state) {
      return state.signup
    },
    signInOpen(state) {
      return state.signInOpen
    },
    token (state) {
      return state.token
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
    },
    changeSignInOpen (state, payload) {
      state.signInOpen = payload
    }
  },
  actions: {
    async signUp(state) {
      const {signup} = state.state
      let result = false

      await fetch(API_URL + '/user/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(signup)
      })
      .then(res => {
        if (res.status === 202) {
          return res.json()
        } else {
          return null
        }
      })
      .then(data => {
        if (data) {
          const {token} = data.data
          state.token = token
          localStorage.setItem('token', token)
          result = true
        } else {
          result = false
        }
      })
      
      return result
    },

    async signIn(state) {
      const {signup} = state.state
      let result = false
      await fetch(API_URL + '/user/signin', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(signup)
      })      
      .then(res => res.json())
      .then(data => {
        if(data.status === 204) {
          const {token} = data.data
          state.token = token
          localStorage.setItem('token', token)
          result = true
        }
      })
      return result
    }
  }
}