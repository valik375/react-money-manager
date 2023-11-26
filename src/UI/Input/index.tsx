import { FC, forwardRef, ForwardedRef, ChangeEvent, InputHTMLAttributes } from 'react'
import './style.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
  errorsMessage?: string
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    label,
    type,
    placeholder,
    className = '',
    name = '',
    onBlur,
    onChange,
    errorsMessage = '',
    min,
    max,
  } = props
  return (
    <div className={className + ' input-group'}>
      {label ? <label className="label">{label}</label> : ''}
      <input
        className="input"
        ref={ref}
        type={type}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
        onBlur={onBlur}
        onChange={onChange}
      />
      <div className="errors-message">{errorsMessage}</div>
    </div>
  )
})

export default Input
