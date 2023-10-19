import { FC } from 'react'
import './style.scss'

interface LoaderProps {
  className?: string
  type?: 'full' | 'tweak'
}

const Loader: FC<LoaderProps> = ({ className = '', type = 'full' }) => {

  return (
    <div className={`${className} ${type} loader__wrapper`}>
      <div className="loader"></div>
    </div>
  )
}

export default Loader