import axios from "axios"

const apiClient = axios.create({
	baseURL: 'http://alumatesapi.test:8080',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default {
	getCountries() {
		return apiClient.get('/countries')
	},
	getStateId(name) {
		return apiClient.get('states/state/' + name)
	},
	// getCityId(name) {
	// 	return apiClient.get('cities/city/' + name)
	// },
	getSchoolId(name) {
		return apiClient.get('schools/school/' + name)
	},
	getStates(country_id) {
		return apiClient.get('/states/country/' + country_id)
	},
	getCities(stateId) {
		return apiClient.get('/cities/state/' + stateId)
	},
	getSchools(cityName) {
		return apiClient.get('/schools/city/' + cityName)
	},
	getUsers(schoolId) {
		return apiClient.get('/schools/' + schoolId)
	},
	getAlumni(perPage, page) {
		return apiClient.get('/alumni?_limit=' + perPage + '&_page=' + page)
	},
	register(payload) {
		return apiClient.post('/register', payload)
	},
	login(payload) {
		return apiClient.post('/login', payload)
	},
	forgotPassword(payload) {
		return apiClient.post('/password/email', payload)
	},
	resetPassword(payload) {
		return apiClient.post('/password/reset', payload)
	},
	getGroups(school_id) {
		return apiClient.get('groups/schools/' + school_id)
	},
	joinAlumni(payload) {
		return apiClient.post('groups/join', payload)
	},
	registerSchool(payload) {
		return apiClient.post('/register_school', payload)
	}
}