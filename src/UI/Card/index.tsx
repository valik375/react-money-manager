import { FC, ReactNode } from 'react'
import './style.scss'

interface CardProps {
  children: ReactNode
  className?: string
}

const Card: FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={className + " card"}>
      { children }
    </div>
  )
}

export default Card