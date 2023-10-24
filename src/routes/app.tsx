import { APP_ROUTES } from 'src/constants'
import { IRoute } from 'src/types'
import HomePage from 'src/pages/HomePage'

const auth: Array<IRoute> = [
  {
    name: APP_ROUTES.home_name,
    path: APP_ROUTES.home_path,
    element: <HomePage />,
    layout: 'app',
  },
]

export default auth
