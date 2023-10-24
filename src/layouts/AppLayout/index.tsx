import { FC, ReactNode } from 'react'
import SideBarMenu from 'src/components/App/SideBarMenu'

import './style.scss'

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <SideBarMenu />
      <div className="app-layout__wrapper">{children}</div>
    </div>
  )
}

export default AppLayout
