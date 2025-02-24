import styles from './Statistics.module.scss'

function Statistics () {
  return (
		<div className={styles.wrapper}>
			<div className={styles.count}>
				<h3 className={styles.heading}>Minutes</h3>
				<p className={styles.color}>20</p>
			</div>
			<div className={styles.count}>
				<h3 className={styles.heading}>Level</h3>
				<p className={styles.number}>Hard</p>
			</div>
			<div className={styles.count}>
				<h3 className={styles.heading}>Up</h3>
				<p className={styles.number}>5%</p>
			</div>			
		</div>
	)
}

export default Statistics