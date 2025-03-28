import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../services/exercise/exercise-log.service'
import stylesLayout from '../../layout/Layout.module.scss'
import styles from '../../screens/workouts/detail/Workout.module.scss'
import Loader from '../../ui/loader/Loader'

const ExerciseLog = () => {
		const { id } = useParams()

	const {
		data: exerciseLogs,
		isLoading
	} = useQuery(['get exercise log', id], () => 
		ExerciseLogService.getById(id), {
		select: ({ data }) => data
	})

	console.log(exerciseLogs)

	return (
		<>
			<div className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/exercise.jpg')`,
					height: 356,
				}}
			>			
			</div>
			<div className='wrapper-inner-page'>
			{isLoading ? <Loader /> : (
				<div className={styles.wrapper}>
					<div className={styles.item}>
						<span>{exerciseLogs.exercise.name}</span>
					</div>
				</div>
			)}
			</div>
		</>
	)
}

export default ExerciseLog
