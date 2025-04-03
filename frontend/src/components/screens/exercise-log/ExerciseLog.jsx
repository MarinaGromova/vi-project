// import { useMutation, useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import { BsArrowRepeat } from "react-icons/bs"
import { GoArrowLeft } from 'react-icons/go'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
// import ExerciseLogService from '../../../services/exercise/exercise-log.service'
import Header from '../../layout/header/Header'
import stylesLayout from '../../layout/Layout.module.scss'
import styles from '../../screens/exercise-log/ExerciseLog.module.scss'
import Loader from '../../ui/loader/Loader'
import { useExerciseLog } from './useExerciseLog'

const ExerciseLog = () => {
	const navigation = useNavigate()

	const {mutate, isLoading, exerciseLog, id} = useExerciseLog()
	
	const [color, setColor] = useState(false)
	const [timeActive, setTimeActive] = useState(false)
	const [seconds, setSeconds] = useState(60)

	const checkColor = (color) => {
		mutate({id, isCompleted: color})
		setColor(!color)
	}

	useEffect(() => {
		if(seconds>0 && timeActive) {
			setTimeout(setSeconds, 100, seconds-1)
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
				<Header backLink="/workouts" />
			</div>
			
			<div className='wrapper-inner-page'>
			{isLoading ? <Loader /> : (
				<div className={styles.wrapper}>
					<div className={styles.item}>
						<div>
							<div className={styles.items}>
							  <button className={styles.repeat} onClick={() => navigation(`/workout/${exerciseLog.workoutLogId}`) } >
									<GoArrowLeft color='fff' fontSize={30}/>
								</button>
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
										<div>{seconds * exerciseLog.exercise.times * 4}</div>
									</>
										) : (
											<div className={styles.icons}>											
												{
													exerciseLog.isCompleted === false ? 
													<button className={styles.repeat} onClick={() => checkColor(color)}>

													{  !color ?
														<IoCheckmarkDoneCircleOutline color='fff' fontSize={50} />	: <IoCheckmarkDoneCircleOutline color='black' fontSize={50}  />	}

													</button>
													 :
													<button className={styles.repeat} onClick={() => checkColor(color)}>
														{  !color ? <IoCheckmarkDoneCircleOutline color='black' fontSize={50} />
															: <IoCheckmarkDoneCircleOutline color='fff' fontSize={50} />}													
													</button>
												}

												<button className={styles.repeat} onClick={()=> setSeconds(60)}>
													<BsArrowRepeat color='fff' fontSize={50} />
												</button>
											</div>

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
