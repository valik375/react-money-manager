import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
}
