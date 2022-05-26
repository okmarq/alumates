import { createStore } from 'vuex'

export default createStore({
  state: {
    alumni: {
      state: '',
      city: '',
      school: ''
    },
    showSidebar: false,
    showPopup: false,
    step: 0
  },
  getters: {
    sidebar: state => {
      return state.showSidebar
    },
    popup: state => {
      return state.showPopup
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
    },
    step: state => {
      return state.step
    }
  },
  mutations: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar
    },
    togglePopup(state) {
      state.showPopup = !state.showPopup
    },
    updateState(state, payload) {
      state.alumni.state = payload
    },
    updateCity(state, payload) {
      state.alumni.city = payload
    },
    updateSchool(state, payload) {
      state.alumni.school = payload
    },
    incrementStep(state) {
      state.step ++
    }
  },
  actions: {
  },
  modules: {
  }
})
