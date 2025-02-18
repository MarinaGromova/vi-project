import styles from './Counter.module.scss'

function Counter() {
  return (
		<div className={styles.counter}>
			<h3>Minutes
				<p className={styles.color}>20</p>
			</h3>
			<h3>Level
				<p className={styles.color}>Hard</p>
			</h3>
			<h3>Up
				<p className={styles.color}>5%</p>
			</h3>
		</div>
	)
}

export default Counter