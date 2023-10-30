import { FC } from 'react'
import './style.scss'

interface LoaderProps {
  className?: string
  type?: 'full' | 'tweak'
  id?: string
}

const Loader: FC<LoaderProps> = ({ className = '', type = 'full', id }) => {
  return (
    <div id={id} className={`${className} ${type} loader__wrapper`}>
      <div className="loader"></div>
    </div>
  )
}

export default Loader
