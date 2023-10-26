import { IButtonProps } from 'src/types'
import { Button } from 'src/UI'

import './style.scss'

interface ButtonLoaderProps extends IButtonProps {
  isLoading?: boolean
}

const ButtonLoader = (props: ButtonLoaderProps) => {
  return (
    <Button type={props.type} onClick={props.onClick}>
      {props.isLoading ? (
        <div className="button__loader">
          <span className="loader" />
        </div>
      ) : (
        props.children
      )}
    </Button>
  )
}

export default ButtonLoader
