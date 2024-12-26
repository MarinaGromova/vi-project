import { useEffect, useRef, useState } from 'react'
import { FiAlignRight } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import Menu from '../hamburger/Menu'
import styles from './Hamburger.module.scss'

function Hamburger() {
	const ref = useRef(null)
	const [isShow, setIsShow] = useState(false)
	const closeMenuOutside = (e) => {
		if (ref.current && !ref.current.contains(e.target) || e.key === "Escape") {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', closeMenuOutside, true)
		document.addEventListener('keydown', closeMenuOutside, true)
		return () => {
			document.removeEventListener('click', closeMenuOutside, true)
			document.removeEventListener('keydown', closeMenuOutside, true)
		}
	})

	return (
		<div className={styles.wrapper} ref={ref} onClick={closeMenuOutside}>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
			>
				{isShow ? <IoClose color='fff' /> : <FiAlignRight color='fff' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
