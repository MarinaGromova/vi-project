import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import styles from '../../screens/exercise-log/ExerciseLog.module.scss'

export const ExerciseLogInfo = ({ exerciseLog }) => {
	const navigation = useNavigate()

	return (
		<>
			<div className={styles.items}>
				<button
					className={styles.repeat}
					onClick={() => navigation(`/workout/${exerciseLog.workoutLogId}`)}
				>
					<GoArrowLeft color='fff' fontSize={30} />
				</button>
				<img
					src={import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath}
					alt={exerciseLog.exercise.name}
					height='44'
				/>
				<span>{exerciseLog.exercise.name}</span>
			</div>
			<p>Repeat : {exerciseLog.exercise.times}</p>
			<p>Time : {exerciseLog.exercise.times * 4} min</p>
		</>
	)
}
