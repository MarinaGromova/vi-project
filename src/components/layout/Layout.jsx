import Header from './header/Header'

function Layout({ children, bgImage, heading="" ,backLink = '/' }) {
	return (
		<div>
			<Header backLink={backLink} />
			{children}
		</div>
	)
}

export default Layout
