import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { TOKEN } from '../../../app.constants'
import { useAuth } from '../../../hooks/useAuth'
import styles from '../hamburger/Hamburger.module.scss'
import { menu } from './menu.data'

function Menu({ isShow, setIsShow }) {
	const { setIsAuth } = useAuth()
	const navigate = useNavigate()

	//функция выйти из системы
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)

		navigate('/auth')
	}

	return (
		<nav className={isShow ? styles.menu + ' ' + styles.show : styles.menu}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
