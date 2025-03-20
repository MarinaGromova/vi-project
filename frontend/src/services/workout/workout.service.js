import { $axios } from '../../api'

const WORKOUTS = '/workouts'

class WorkoutsService {
	async getAll() {
		return $axios.get(WORKOUTS)
	}

	async getById() {
		return $axios.get(`${WORKOUTS}/${id}`)
	}

	// name, exerciseIds
	async create(body) {
		return $axios.post(WORKOUTS, body)
	}

	async update(id, body) {
		return $axios.put(`${WORKOUTS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutsService()