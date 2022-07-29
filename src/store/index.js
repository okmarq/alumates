import { createStore } from 'vuex'

export default createStore({
  state: {
    states: [],
    cities: [],
    schools: [],
    users: [],
    user: [],
    alumni: {
      state: '',
      state_id: '',
      city: '',
      city_id: '',
      school: '',
      school_id: '',
      group_id: '',
      user_id: ''
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
    states: state => {
      return state.states
    },
    cities: state => {
      return state.cities
    },
    schools: state => {
      return state.schools
    },
    users: state => {
      return state.users
    },
    user: state => {
      return state.user
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
    stateId: state => {
      return state.alumni.state_id
    },
    cityId: state => {
      return state.alumni.city_id
    },
    schoolId: state => {
      return state.alumni.school_id
    },
    userId: state => {
      return state.alumni.user_id
    },
    groupId: state => {
      return state.alumni.group_id
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
    incrementStep(state) {
      state.step++
    },
    updateStates(state, payload) {
      state.states = payload
    },
    updateCities(state, payload) {
      state.cities = payload
    },
    updateSchools(state, payload) {
      state.schools = payload
    },
    updateUsers(state, payload) {
      state.users = payload
    },
    updateUser(state, payload) {
      state.user = payload
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
    updateStateId(state, payload) {
      state.alumni.state_id = payload
    },
    updateCityId(state, payload) {
      state.alumni.city_id = payload
    },
    updateSchoolId(state, payload) {
      state.alumni.school_id = payload
    },
    updateUserId(state, payload) {
      state.alumni.user_id = payload
    },
    updateGroupId(state, payload) {
      state.alumni.group_id = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
