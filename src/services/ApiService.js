import axios from "axios"

const apiClient = axios.create({
	baseURL: 'https://api-alumates.herokuapp.com',
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
	getStates(country_id) {
		return apiClient.get('/states/country/' + country_id)
	},
	getCityByName(name) {
		return apiClient.get('/city/' + name)
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
	joinAlumni(payload) {
		return apiClient.post('/join_alumni', payload)
	},
	registerSchool(payload) {
		return apiClient.post('/register_school', payload)
	}
}