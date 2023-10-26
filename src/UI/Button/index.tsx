import { IButtonProps } from 'src/types'

import './style.scss'

const Button = (props: IButtonProps) => {
  return (
    <button className={`${props.className} button`} {...props}>
      {props.children}
    </button>
  )
}

export default Button
