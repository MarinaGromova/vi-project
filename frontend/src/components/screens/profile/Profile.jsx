import cn from 'clsx'
import { TbCat } from 'react-icons/tb'
import Header from '../../layout/header/Header'
import stylesLayout from '../../layout/Layout.module.scss'
import Loader from '../../ui/loader/Loader'
import { useProfile } from '../profile/useProfile'
import styles from './Profile.module.scss'
import Statistics from './Statistics/Statistics'

function Profile() {
	const { data, isLoading } = useProfile()
		return (
			<>
				<div className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
					style={{
						backgroundImage: `url('/images/profile.jpg')`,
						height: 356,
					}}
				>
					<Header />

					<div className={styles.center}>
						{ isLoading ? (
							<Loader /> 
							) : (
							<>
								<TbCat color='fff' fontSize={59} />
								<h1 className={stylesLayout.heading}>{data?.email}</h1>
							</>
							)}
					</div>

					<Statistics />
					
				</div>
				<div
					className='wrapper-inner-page'
					style={{ paddingLeft: 0, paddingRight: 0 }}
				>
					<div className={styles.before_after}>
						{ data?.images.map((image, index) =>
							<div key={image}>
								<div>
									{index === 1 ? 'After' : 'Before'}
								</div>
								<img
									src={image}
									alt='Твое фото'
									draggable={false}
									style={{ borderRadius: 14 }}
								/>
							</div>
							)
						}
					</div>
				</div>
			</>
		)
}

export default Profile