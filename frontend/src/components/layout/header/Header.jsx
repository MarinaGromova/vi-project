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
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
							onClick={() => {
								navigate('/profile')
							}}
							aria-label='профиль'
						>
							<TbCat color='fff' fontSize={50} />
						</button>
					) : (
						<button
							aria-label='Go back'
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<GoArrowLeft color='fff' fontSize={50} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
