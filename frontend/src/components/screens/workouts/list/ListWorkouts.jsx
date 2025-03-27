import Alert from '../../../ui/alert/Alert'
import Loader from '../../../ui/loader/Loader'
import Layout from '.././../../layout/Layout'
import styles from '../detail/Workout.module.scss'
import { useWorkouts } from './useWorkouts'

const ListWorkouts = () => {

	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } = 	useWorkouts()

	return (
		<>
			<Layout bgImage='/images/home-bg.jpg' heading='Workout list' />

			<div className='wrapper-inner-page'>
				{/* {error && <Alert type='error' text={error} />} */}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(item => 
							<div className={styles.item} key={item.id}>
								<button onClick={() => {
									mutate(item.id)
									}
								}>
									<span>{item.name}</span>
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

export default ListWorkouts
