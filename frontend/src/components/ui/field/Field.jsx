import styles from './Field.module.scss'

function Field({ register, name, options, error, ...rest }) {
	return (
		<div className={{ marginBottom: '1rem' }}>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Field
