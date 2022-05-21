import { createStore } from 'vuex'

export default createStore({
  state: {
    showSidebar: false
  },
  getters: {
    sidebar: state => {
      return state.showSidebar
    }
  },
  mutations: {
    toggleSidebar (state) {
      state.showSidebar = !state.showSidebar
    }
  },
  actions: {
  },
  modules: {
  }
})
