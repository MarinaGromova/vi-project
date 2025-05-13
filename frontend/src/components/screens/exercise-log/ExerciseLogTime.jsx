import { useEffect, useState } from 'react'
import { BsArrowRepeat } from 'react-icons/bs'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import styles from '../../screens/exercise-log/ExerciseLog.module.scss'

export const ExerciseLogTime = ({ exerciseLog, mutate, id }) => {
	const [color, setColor] = useState(false)
	const [seconds, setSeconds] = useState(60)
	const [timeActive, setTimeActive] = useState(false)

	const checkColor = color => {
		mutate({ id, isCompleted: color })
		setColor(!color)
	}

	useEffect(() => {
		if (seconds > 0 && timeActive) {
			setTimeout(setSeconds, 100, seconds - 1)
		} else {
			setTimeActive(false)
		}
	}, [seconds, timeActive])

	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				{seconds ? (
					<>
						<button
							className={styles.repeat}
							onClick={() => setTimeActive(!timeActive)}
						>
							{timeActive ? 'stop' : 'start'}
						</button>
						<div>{seconds * exerciseLog.exercise.times * 4}</div>
					</>
				) : (
					<div className={styles.icons}>
						{exerciseLog.isCompleted === false ? (
							<button
								className={styles.repeat}
								onClick={() => checkColor(color)}
							>
								{!color ? (
									<IoCheckmarkDoneCircleOutline color='fff' fontSize={50} />
								) : (
									<IoCheckmarkDoneCircleOutline color='black' fontSize={50} />
								)}
							</button>
						) : (
							<button
								className={styles.repeat}
								onClick={() => checkColor(color)}
							>
								{!color ? (
									<IoCheckmarkDoneCircleOutline color='black' fontSize={50} />
								) : (
									<IoCheckmarkDoneCircleOutline color='fff' fontSize={50} />
								)}
							</button>
						)}

						<button className={styles.repeat} onClick={() => setSeconds(60)}>
							<BsArrowRepeat color='fff' fontSize={50} />
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
