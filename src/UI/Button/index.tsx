import { FC, ReactNode } from 'react'
import './style.scss'

interface ButtonProps {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  isLoading?: boolean
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ children, className = '', type = 'button', isLoading, onClick }) => {

  const handleClick = () => {
    onClick()
  }

  return (
    <button
      className={`${className} button`}
      type={type}
      onClick={handleClick}
    >
      { isLoading
        ? <div className="button__loader"> <span className="loader"></span> </div>
        : <span>{ children }</span>
      }
    </button>
  )
}

export default Button