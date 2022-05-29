import axios from "axios"

const apiClient = axios.create({
	baseURL: 'https://api.alumates.com',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default {
	register(payload) {
		return apiClient.post('/register', payload)
	},
	login(payload) {
		return apiClient.post('/login', payload)
	},
	forgotPassword(payload) {
		return apiClient.post('/forgot_password', payload)
	},
	resetPassword(payload) {
		return apiClient.post('/reset_password', payload)
	},
	joinAlumni(payload) {
		return apiClient.post('/join_alumni', payload)
	},
	getAlumni(perPage, page) {
		return apiClient.get('/alumni?_limit=' + perPage + '&_page=' + page)
	},
	registerSchool(payload) {
		return apiClient.post('/register_school', payload)
	}
}