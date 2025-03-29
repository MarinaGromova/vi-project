import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useNavigate, useParams } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/Header'
import Loader from '../../../ui/loader/Loader'

import styles from './Workout.module.scss'

const Workout = () => {
	const { id } = useParams()

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => 
		WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})

	console.log(workoutLog)

	const navigation = useNavigate()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/home-bg.jpg')`,
					height: 356
				}}
			> 
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.time}>{workoutLog.minute + ' min.'}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
					) : (
						<div className={styles.wrapper}>
							{workoutLog.exerciseLogs.map(exercise => 
								<div className={styles.item} key={exercise.id}>
									<button onClick={() => navigation(`/exercise/${exercise.id}`)}>
										<span>{exercise.exercise.name}</span>
										<img src={import.meta.env.VITE_SERVER_URL + exercise.exercise.iconPath} alt='exercises' height='34' />
									</button>
								</div>
							)}
						</div>
				  )
				}
			</div>
		</>
	)
}

export default Workout