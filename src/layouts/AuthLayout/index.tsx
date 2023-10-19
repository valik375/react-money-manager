import { FC, ReactNode } from 'react'
import { Card, Container } from 'src/UI'

import './style.scss'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <Container className="auth-layout__container">
        <div className="auth-layout__left">
          <img className="auth-layout__image" src="src/assets/images/auth/authLayout.svg" alt="Money"/>
        </div>
        <div className="auth-layout__right">
          <Card className="auth-layout__card">
            { children }
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default AuthLayout