import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from '../app/App.module.scss'

function App() {
	const isAuth = useAuth()
	const navigate = useNavigate()
	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => { isAuth ? navigate('/auth') : navigate('/new-workout') }}>
				{isAuth ? 'Sign in' : 'New'}
			</Button>
			<h1 className={styles.heading}>
				EXERCISES FOR THE SHOULDERS
			</h1>
			{/* TODO: Counters */}
		</Layout>
	)
}

export default App
