import App from '../App'
import Auth from '../auth/Auth'
import NewWorkout from '../new-workout/NewWorkout'
import Profile from '../profile/Profile'

export const routes = [
	{
		path: '/',
		component: App,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}
]