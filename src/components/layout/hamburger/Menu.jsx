import styles from '../hamburger/Hamburger.module.scss'
import { menu } from './menu.data'

function Menu({ isShow }) {
	//функция выйти из системы
	const logoutHandler = () => {}

	return (
		<nav className={isShow ? styles.show : styles.menu}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>{item.title}</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
