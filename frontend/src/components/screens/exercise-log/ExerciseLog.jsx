import cn from 'clsx'
import Header from '../../layout/header/Header'
import stylesLayout from '../../layout/Layout.module.scss'
import styles from '../../screens/exercise-log/ExerciseLog.module.scss'
import Loader from '../../ui/loader/Loader'
import { ExerciseLogInfo } from './ExerciseLogInfo'
import { ExerciseLogTime } from './ExerciseLogTime'
import { useExerciseLog } from './useExerciseLog'

const ExerciseLog = () => {
	const { mutate, isLoading, exerciseLog, id } = useExerciseLog()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/exercise.jpg')`,
					height: 356
				}}
			>
				<Header backLink='/workouts' />
			</div>
			<div className='wrapper-inner-page'>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<div className={styles.item}>
							<ExerciseLogInfo exerciseLog={exerciseLog} />
							<ExerciseLogTime
								mutate={mutate}
								id={id}
								exerciseLog={exerciseLog}
							/>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default ExerciseLog
