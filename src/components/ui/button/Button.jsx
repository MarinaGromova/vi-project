import styles from './Button.module.scss'

function Button({ children, clickHandler, size = "xl" }) {
	return (
		<div className={styles.wrapper}>Button</div>
	)
}

export default Button