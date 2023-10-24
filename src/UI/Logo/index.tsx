import { FC } from 'react'
import MainLogo from 'src/assets/images/common/logo.svg'

import './style.scss'

interface LogoProps {
  className?: string
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
  return <img className={className + ' logo'} src={MainLogo} alt="Logo" />
}

export default Logo
