import { FC, ReactNode, useEffect } from 'react'
import useUserStore from 'src/store/useUserStore.ts'
import SideBarMenu from 'src/components/App/SideBarMenu'
import { Loader } from 'src/UI'

import './style.scss'

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { onUserStateChange } = useUserStore()

  useEffect(() => {
    onUserStateChange()
  }, [])

  return (
    <div className="app-layout">
      <Loader id="global-full-loader" />
      <SideBarMenu />
      <div className="app-layout__wrapper">{children}</div>
    </div>
  )
}

export default AppLayout
