import { useState } from 'react'
import { FiAlignRight } from "react-icons/fi"
import { RxCross1 } from "react-icons/rx"
import Menu from '../hamburger/Menu'
import styles from './Hamburger.module.scss'

function Hamburger() {
	const [isShow, setIsShow] = useState(false)

	return <div className={styles.wrapper}>
		<button onClick={() => {setIsShow(!isShow)}}>
		{isShow ? <RxCross1 color="white"/> : <FiAlignRight color="white" />}
		</button>
		<Menu isShow={isShow}/>
	</div>
}

export default Hamburger