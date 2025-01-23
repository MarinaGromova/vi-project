import { useContext } from 'react'

import { AuthContext } from '../providers/AuthProvider'

function useAuth(){
	useContext(AuthContext)
}

export default useAuth