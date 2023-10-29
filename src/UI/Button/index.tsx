import { clsx } from 'clsx'
import { IButtonProps } from 'src/types'

import './style.scss'

const Button = (props: IButtonProps) => {
  return (
    <button {...props} className={clsx('button', props.className)}>
      {props.children}
    </button>
  )
}

export default Button
