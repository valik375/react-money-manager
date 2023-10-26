import { FC, ReactNode } from 'react'
import './style.scss'

interface TextProps {
  children: ReactNode
  className?: string
  nowrap?: boolean
}

const Text: FC<TextProps> = ({ children, className = '', nowrap = false }) => {
  const textClass = `${className} text ${nowrap ? ' nowrap' : ''}`
  return <div className={textClass}>{children}</div>
}

export default Text
