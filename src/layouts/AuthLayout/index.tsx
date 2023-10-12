import { FC, ReactNode } from 'react'
import {Container} from 'src/UI'

import './style.scss'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <Container>
        <div className="auth-layout__wrapper">
          { children }
        </div>
      </Container>
    </div>
  )
}

export default AuthLayout