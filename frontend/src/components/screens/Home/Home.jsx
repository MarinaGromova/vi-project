import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Counter from '../Couter/Counter'
import styles from '../Home/Home.module.scss'

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
				EXERCISES FOR THE SHOULDERS
			</h1>
			<Counter />
		</Layout>
	)
}

export default Home
