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
export const $axios= axios.create({
	baseUrl: '/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get('token')}`,
	},
})