import { useState } from 'react'
import Layout from '../../layout/Layout'

function Auth() {
	const [email, setEmail] = useState('')

	return (
		<Layout heading='Sign in' bgImage="/images/auth.jpg">
			<div className='wrapper-inner-page'>
				<input
					type='text'
					placeholder='Enter email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				{/* <input type='text' placeholder='Password' /> */}
			</div>
		</Layout>
	)
}

export default Auth