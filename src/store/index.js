import { createStore } from 'vuex'

export default createStore({
  state: {
    showSidebar: false,
    alumni: {
      state: '',
      city: '',
      school: ''
    }
  },
  getters: {
    sidebar: state => {
      return state.showSidebar
    },
    alumni: state => {
      return state.alumni
    },
    state: state => {
      return state.alumni.state
    },
    city: state => {
      return state.alumni.city
    },
    school: state => {
      return state.alumni.school
    }
  },
  mutations: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar
    },
    updateState(state, payload) {
      state.alumni.state = payload
    },
    updateCity(state, payload) {
      state.alumni.city = payload
    },
    updateSchool(state, payload) {
      state.alumni.school = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
