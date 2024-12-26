import { GoArrowLeft } from 'react-icons/go'
import { TbCat } from 'react-icons/tb'
// import useAuth from '../../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

function Header({ backLink = '/' }) {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname === '/' ? (
				<button onClick={() => {
					navigate('/profile')
				}}
				>
					<TbCat color='fff' fontSize={29} />
				</button>) :
				<button onClick={() => {
					navigate(backLink)
				}}
				>
					<GoArrowLeft color='fff' fontSize={29} />
				</button>
			}
			<Hamburger />
		</header>
	)
}

export default Header
