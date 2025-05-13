import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from '../Home/Home.module.scss'
import Statistics from '../profile/Statistics/Statistics'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.avif'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>CREATE YOUR OWN WORKOUT</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
