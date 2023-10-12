import { FC } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from 'src/components/ProtectedRoute'
import AuthLayout from 'src/layouts/AuthLayout'
import routes from 'src/routes'

const App: FC = () => {

  return (
    <Router>
      <Routes>
        {
          routes.map(route => {
            return route.layout === 'app' ? (
              <Route key={route.path} element={<ProtectedRoute/>}>
                <Route path={route.path} element={<div> {route.element} </div>}/>
              </Route>
            ) : (
              <Route key={route.path}  path={route.path} element={ <AuthLayout> { route.element } </AuthLayout>}/>
            )
          })
        }
      </Routes>
    </Router>
  )
}

export default App
