import { FC, forwardRef, ForwardedRef, ChangeEvent } from 'react'
import './style.scss'

interface InputProps {
  type: string
  label?: string
  placeholder?: string
  className?: string
  name?: string
  errorsMessage?: string
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = forwardRef(
  (
    { label, type, placeholder, className = '', name = '', onBlur, onChange, errorsMessage = '' },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={className + ' input-group'}>
        {label ? <label className="label">{label}</label> : ''}
        <input
          className="input"
          ref={ref}
          type={type}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
        />
        <div className="errors-message">{errorsMessage}</div>
      </div>
    )
  },
)

export default Input
