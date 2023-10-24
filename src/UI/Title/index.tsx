import { FC, ReactNode } from 'react'
import './style.scss'

interface TitleProps {
  children: ReactNode
  className?: string
}

const Title: FC<TitleProps> = ({ children, className = '' }) => {
  return <div className={className + ' title'}>{children}</div>
}

export default Title
