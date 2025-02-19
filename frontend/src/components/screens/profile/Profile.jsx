import cn from 'clsx'
import { TbCat } from 'react-icons/tb'
import Header from '../../layout/header/Header'
import stylesLayout from '../../layout/Layout.module.scss'
import Loader from '../../ui/loader/Loader'
import { useProfile } from '../profile/useProfile'
import styles from './Profile.module.scss'

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
							<TbCat color='fff' fontSize={79} />
							<h1>{data?.email}</h1>
						</>
						)
					}
				</div>
			</div>
			<div>
				{/* <h2 className={styles.title}>Before</h2> */}
				{ data?.images.map((image, index) =>
					<div key={image}>
						<div>
							{index === 1 ? 'After' : 'Before'}
						</div>
						<img
							src={image}
							alt=''
							draggable={false}
							style={{ borderRadius: 14 }}
						/>
					</div>
				 )
				}
			</div>
		</>
	)
}

export default Profile