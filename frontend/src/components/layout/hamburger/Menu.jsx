import { Link } from 'react-router-dom'
import styles from '../hamburger/Hamburger.module.scss'
import { menu } from './menu.data'

function Menu({ isShow }) {
	//функция выйти из системы
	const logoutHandler = () => { }

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
