import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthService from '../../../services/auth.service'
import Layout from '../../layout/Layout'
import styles from '../../screens/auth/Auth.module.scss'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/field'
import Loader from '../../ui/loader/Loader'

function Auth() {
	const [type, setType] = useState('login')
	/*
    TODO:

		[] - Auth context
		[] - Axios
		[] - React Query
		[] -Notification

	*/
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		mode: 'onChange'
	})

	const {mutate, isLoading} = useMutation(['auth'], ({email, password}) => AuthService.main(type), {
		onSuccess: data => {
			alert('success')
		}
	})

	const onSubmit = (data) => {
		mutate(data)
	}

	return (
		<>
			<Layout heading='Sign in' bgImage="/images/auth.jpg" />
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{ required: 'Email is required' }}
						type='text'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{ required: 'Password is required' }}
						type='text'
						placeholder='Enter Password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>
							Sign in
						</Button>
						<Button clickHandler={() => setType('register')}>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		</>

	)
}

export default Auth