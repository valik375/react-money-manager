import { FC, ChangeEvent } from 'react'
import './style.scss'

interface InputProps {
  label?: string
  id?: string
  type: string
  placeholder?: string
  className?: string
  value: string
  onChange: (value: string) => void
}

const Input: FC<InputProps> = ({ label, type, id, placeholder, value, onChange, className = '' }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={className + " input-group"}>
      {
        label ? <label className="label" htmlFor={ id }>{ label }</label> : ''
      }
      <input
        className="input"
        id={id}
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ handleChange }
      />
    </div>
  )
}

export default Input