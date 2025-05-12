import { GoArrowLeft } from 'react-icons/go'
import { TbCat } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

function Header({ backLink = '/' }) {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth &&
			<>
				{pathname === '/' ? (
					<button onClick={() => {
						{ isAuth ? navigate('/profile') : navigate('/auth') }
					}}
					aria-label='профиль'
					>
						<TbCat color='fff' fontSize={50} />
					</button>) :
					<button onClick={() => {
						navigate(backLink)
					}}
					>
						<GoArrowLeft color='fff' fontSize={50} />
					</button>
				}
				<Hamburger />
			</>}
		</header>

	)
}

export default Header
