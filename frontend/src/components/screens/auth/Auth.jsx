import Layout from '../../layout/Layout'
import styles from '../../screens/auth/Auth.module.scss'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/field'
import Loader from '../../ui/loader/Loader'
import { useAuthPage } from './useAuthPage'

function Auth() {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } = useAuthPage()

	return (
		<>
			<Layout heading='Sign in' bgImage="/images/auth.jpg" />
				<div className='wrapper-inner-page'>
					{isLoading && <Loader />}
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