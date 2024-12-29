import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import styles from '../../screens/auth/Auth.module.scss'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/field'
import Loader from '../../ui/loader/Loader'

const isLoading = false
const isLoadingAuth = false

function Auth() {
	const [type, setType] = useState('auth')
	/*
    TODO:

		[] - Auth context
		[] - Axios
		[] - React Query

	*/
	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: 'onChange'
	})

	function onSubmit(data) {
		//type
		console.log(data)
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
						<Button clickHandler={() => setType('auth')}>
							Sign in
						</Button>
						<Button clickHandler={() => setType('reg')}>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		</>

	)
}

export default Auth