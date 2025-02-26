import cn from 'clsx'
import styles from './Alert.module.scss'

function Alert ({ type=  'success', text }) {
	return <div className={cn(styles.alert, 
					{
						[styles.error]: type === 'error',
						[styles.warning]: type === 'warning',
						[styles.info]: type === 'info',
					})}>
					{text}
				</div>
}

// const Alert = ({ type = 'success', text }) => {
// 	return <div className={cn(styles.alert, styles[type])}>{text}</div>
// }

export default Alert