import Cookies from 'js-cookie'
import { createContext, useState } from 'react'
// import { useLocation } from 'react-router-dom'
import { TOKEN } from '../app.constants.js'

export const AuthContext = createContext()

function AuthProvider({ children }){
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))
  // const { pathname } = useLocation()

	// useEffect(() => {
	// 	const token =  Cookies.get(TOKEN)
	// 	if(!token) setIsAuth(false)
  // }, [pathname, isAuth])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider