import { IButtonProps } from 'src/types'
import { Button } from 'src/UI'

import './style.scss'

interface ButtonLoaderProps extends IButtonProps {
  isLoading?: boolean
}

const ButtonLoader = (props: ButtonLoaderProps) => {
  const { isLoading, children, ...buttonProps } = props
  return (
    <Button {...buttonProps}>
      {isLoading ? (
        <div className="button__loader">
          <span className="loader" />
        </div>
      ) : (
        children
      )}
    </Button>
  )
}

export default ButtonLoader
