import { FC } from 'react'
import MainLogo from 'src/assets/images/common/logo.svg'

import './style.scss'

interface LogoProps {
  className?: string
  isText?: boolean
}

const Logo: FC<LogoProps> = ({ className = '', isText = false }) => {
  return (
    <div className={className + ' logo'}>
      <img className="logo__image" src={MainLogo} alt="Logo" />
      {isText ? <div className="logo__text">Money Manager</div> : null}
    </div>
  )
}

export default Logo
