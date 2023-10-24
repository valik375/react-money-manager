import { FC, ReactNode } from 'react'
import './style.scss'

interface TextProps {
  children: ReactNode
  className?: string
}

const Text: FC<TextProps> = ({ children, className = '' }) => {
  return <div className={className + ' text'}>{children}</div>
}

export default Text
