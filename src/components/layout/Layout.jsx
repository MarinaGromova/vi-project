import Header from './header/Header'

function Layout({ children, backLink = '/' }) {
	return (
		<div>
			<Header backLink={backLink} />
			{children}
		</div>
	)
}

export default Layout
