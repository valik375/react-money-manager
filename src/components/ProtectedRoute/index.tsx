import {Navigate, Outlet} from 'react-router-dom'
import { AUTH_ROUTES } from 'src/constants'

const ProtectedRoute = () => {
  const userId = localStorage.getItem('uid')

  return userId ? (<Outlet/>) : (<Navigate to={AUTH_ROUTES.login_path} replace/>)
}

export default ProtectedRoute
