export default {
  namespaced: true,
  state: {
    isAddCulturalopen: true
  },
  getters: {
    isAddCulturalopen (state) {
      return state.isAddCulturalopen
    }

  },
  mutations: {
    changeIsAddCulturalopen(state, payload) {
      state.isAddCulturalopen = payload
    }
  },
  actions: {

  }
}