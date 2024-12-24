import { GoArrowLeft } from 'react-icons/go'
import { TbCat } from 'react-icons/tb'
// import useAuth from '../../../hooks/useAuth'
import { useState } from 'react'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

function Header({ backLink }) {
	// const {isAuth} = useAuth()
	const [isAu, setAu] = useState(false)

	return (
		<header className={styles.header}>
			<button
				onClick={() => {
					setAu(!isAu)
				}}
			>
				{!isAu ? <TbCat color = 'fff' fontSize={29} /> : <GoArrowLeft color='fff' fontSize={29} />}
			</button>
			<Hamburger />
		</header>
	)
}

export default Header
