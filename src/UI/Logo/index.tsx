import { FC } from 'react'
import './style.scss'

interface LogoProps {
  className?: string
}

const Logo: FC<LogoProps> = ({ className = '' }) => {

  return (
    <img
      className={className + " logo"}
      src="src/assets/images/common/logo.svg"
      alt="Logo"
    />
  )
}

export default Logo