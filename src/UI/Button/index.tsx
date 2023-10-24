import { FC, ReactNode } from 'react'
import './style.scss'

interface ButtonProps {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick: () => void
}

const Button: FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  onClick,
}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button className={className + ' button'} type={type} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
