//через LocalStorage
// export const $axios= axios.create({
// 	baseUrl: '/api',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Authorization: `Bearer ${localStorage.getItem('token')}`,
// 	},
// })

//через cookie

import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:5000/api'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : ''
	}
})