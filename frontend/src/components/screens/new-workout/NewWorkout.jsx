import cn from 'clsx'
import { Controller } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/field'
import Loader from '../../ui/loader/Loader'
import { getIconPath } from './icon-path.util'
import styles from './NewExercise.module.scss'

function NewWorkout() {
	const { error, isSuccess, isLoading, errors, handleSubmit, onSubmit, register, control } = useExercise()

	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>

					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Times is required'
						}}
						placeholder='Enter times'
					/>

					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout