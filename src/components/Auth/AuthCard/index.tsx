import { FC, ReactNode } from 'react'
import { Logo, Subtitle, Text, Title } from 'src/UI'
import { Link } from 'react-router-dom'

import './style.scss'

interface AuthCardProps {
  children: ReactNode
  title: string
  bottomText: string
  linkText: string
  linkUrl: string
}

const AuthCard: FC<AuthCardProps> = ({
  children,
  title,
  bottomText,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="auth-card">
      <div className="auth-card__top">
        <Logo className="auth-card__logo" />
        <Subtitle className="auth-card__subtitle">Welcome on</Subtitle>
        <Title className="auth-card__title">{title}</Title>

        <div className="auth-card__wrapper">{children}</div>
      </div>

      <div className="auth-card__bottom">
        <Text>
          {bottomText}{' '}
          <Link className="auth-card__link link" to={linkUrl}>
            {linkText}
          </Link>
        </Text>
      </div>
    </div>
  )
}

export default AuthCard
