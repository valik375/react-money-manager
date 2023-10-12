import { FC, ReactNode } from 'react'
import './style.scss'

interface SubtitleProps {
  children: ReactNode
  className?: string
}

const Subtitle: FC<SubtitleProps> = ({ children, className = '' }) => {
  return (
    <div className={className + " subtitle"}>
      { children }
    </div>
  )
}

export default Subtitle