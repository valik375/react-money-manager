import { FC, ReactNode } from 'react'
import './style.scss'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={className + " container"}>
      { children }
    </div>
  )
}

export default Container