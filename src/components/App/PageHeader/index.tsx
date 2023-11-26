import { FC, ReactNode } from 'react'
import { Title } from 'src/UI'

import './style.scss'

interface PageHeaderProps {
  title: string
  children?: ReactNode
}

const PageHeader: FC<PageHeaderProps> = (props) => {
  const { title, children } = props
  return (
    <div className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__left">
          <Title className="page-header__title">{title}</Title>
        </div>
        <div className="page-header__right">{children}</div>
      </div>
    </div>
  )
}

export default PageHeader
