import { AUTH_ROUTES } from 'src/constants'
import { IRoute } from 'src/types'
import LoginPage from 'src/pages/LoginPage'
import SignInPage from 'src/pages/SignInPage'

const auth: Array<IRoute> = [
  {
    name: AUTH_ROUTES.login_name,
    path: AUTH_ROUTES.login_path,
    element: <LoginPage />,
    layout: 'auth',
  },
  {
    name: AUTH_ROUTES.sign_in_name,
    path: AUTH_ROUTES.sign_in_path,
    element: <SignInPage />,
    layout: 'auth',
  },
]

export default auth
