import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'

function Auth() {
	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: 'onChange'
	})

	function onSubmit(data) {
		console.log(data)
	}

	return (
		<Layout heading='Sign in' bgImage="/images/auth.jpg">
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Enter email'
						{...register('email', {
							required: 'Email is required'
						})}
					/>
					<div style={{ color: 'red' }}>
						{errors?.email && errors.email.message}
					</div>
					<Button>Let's go</Button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth