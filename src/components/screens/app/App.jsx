import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'

// import styles from '../app/App.module.scss'

function App() {
	// const { isAuth } = useAuth()
	const navigate = useNavigate
	return (
		<Layout bgImage='/public/images/home-bg.jpg'>
			<button onclick={() => navigate('/')}></button>
		</Layout>
	)
}

export default App
