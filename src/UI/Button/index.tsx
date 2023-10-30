import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

import './style.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  className?: string
  disabled?: boolean
  isLoading?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const { isLoading, children, className, ...buttonProps } = props
  return (
    <button {...buttonProps} className={clsx('button', className)}>
      {isLoading ? (
        <div className="button__loader">
          <span className="loader" />
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
