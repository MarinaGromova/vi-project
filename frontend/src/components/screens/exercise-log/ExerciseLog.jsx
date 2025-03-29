import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../services/exercise/exercise-log.service'
import stylesLayout from '../../layout/Layout.module.scss'
import styles from '../../screens/exercise-log/ExerciseLog.module.scss'
import Loader from '../../ui/loader/Loader'

const ExerciseLog = () => {
		const { id } = useParams()
		// const navigate = useNavigate()

	const {
		data: exerciseLog,
		isLoading
	} = useQuery(['get exercise log', id], () => 
		ExerciseLogService.getById(id), {
		select: ({ data }) => data
	})

	const [timeActive, setTimeActive] = useState(false)
	const [seconds, setSeconds] = useState(60)

	useEffect(() => {
		if(seconds>0 && timeActive) {
			setTimeout(setSeconds, 1000, seconds-1)
		}
		else {
			setTimeActive(false)
		}
	},[ seconds, timeActive ])


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
						<div>
							<div className={styles.items}>
								<img src={import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath} alt ={exerciseLog.exercise.name} height='44' />
								<span>{exerciseLog.exercise.name}</span>
							</div>
							<p>Repeat : {exerciseLog.exercise.times}</p>
							<p>Time : {exerciseLog.exercise.times * 4} min</p>
						</div>
							{seconds ?
								(
									<>
										<button className={styles.repeat} onClick={()=> setTimeActive(!timeActive)}>{timeActive ? 'stop' : 'start'}
										</button>
										<div>{seconds}</div>
									</>
										) : (<button className={styles.repeat} onClick={()=> setSeconds(60)}>
										</button>
								)
							}
						</div>
				</div>
			)}
			</div>
		</>
	)
}

export default ExerciseLog
