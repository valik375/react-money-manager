import { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import './style.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  className?: string
  type?: 'button' | 'submit'
  isLoading?: boolean
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  isLoading,
  onClick,
}) => {
  return (
    <button className={`${className} button`} type={type} onClick={onClick}>
      {isLoading ? (
        <div className="button__loader">
          <span className="loader" />
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  )
}

export default Button
