import { useProfile } from '../useProfile'
import styles from './Statistics.module.scss'

function Statistics () {
const { data } = useProfile()

  return (
		<div className={styles.wrapper}>
			{data?.statistics?.map(statistic =>
				<div key={statistic.label} className={styles.count}>
					<h3 className={styles.heading}>{statistic.label}</h3>
					<p className={styles.number}>{statistic.value}</p>
				</div>
			)}
		</div>
	)
}

export default Statistics