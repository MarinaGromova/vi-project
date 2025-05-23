import styles from './Button.module.scss'

function Button({ children, clickHandler = null, size = 'xl' }) {
	return (
		<div className={styles.wrapper}>
			<button
				className={styles.button + ' ' + styles[size]}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
