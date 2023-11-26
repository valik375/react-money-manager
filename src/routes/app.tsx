import { APP_ROUTES } from 'src/constants'
import { IRoute } from 'src/types'
import HomePage from 'src/pages/HomePage'
import ExpensesPage from 'src/pages/ExpensesPage'
import ExpensesDetailsPage from 'src/pages/ExpensesDetailsPage'

const auth: Array<IRoute> = [
  {
    name: APP_ROUTES.home_name,
    path: APP_ROUTES.home_path,
    element: <HomePage />,
    layout: 'app',
  },
  {
    name: APP_ROUTES.expenses_name,
    path: APP_ROUTES.expenses_path,
    element: <ExpensesPage />,
    layout: 'app',
  },
  {
    name: APP_ROUTES.expenses_details_name,
    path: APP_ROUTES.expenses_details_path,
    element: <ExpensesDetailsPage />,
    layout: 'app',
  },
]

export default auth
