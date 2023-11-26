import { MouseEvent, ReactNode } from 'react'
import { clsx } from 'clsx'
import { Plus } from 'lucide-react'

import './style.scss'

export interface ModalProps {
  children: ReactNode | ReactNode[]
  className?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Modal = (props: ModalProps) => {
  const { className, isOpen, children, setIsOpen } = props

  const backdropClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement
    if (target?.className.includes('modal__backdrop')) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className={clsx('modal__backdrop', className, { active: isOpen })} onClick={backdropClick}>
      <div className="modal">
        <div className="modal_close" onClick={() => setIsOpen(!isOpen)}>
          <Plus />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
