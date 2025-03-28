import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from '../Home/Home.module.scss'
import Statistics from '../profile/Statistics/Statistics'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(()=>{
		if (!isAuth) {
			navigate('/auth', { replace: true });
		}
	},[navigate, isAuth])
	
	return (
		isAuth &&
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => { navigate('/new-workout') }}>
				New
			</Button>
			<h1 className={styles.heading}>
					CREATE YOUR OWN WORKOUT
			</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
