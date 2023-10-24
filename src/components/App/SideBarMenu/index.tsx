import { FC } from 'react'
import { Logo } from 'src/UI'
import MenuLink from 'src/components/App/SideBarMenu/components/MenuLink'
import { APP_ROUTES } from 'src/constants'
import dashboardIcon from 'src/assets/images/app/icons/dashboard-icon.svg'

import './style.scss'

interface SideBarMenuProps {}

interface IMenuLinks {
  name: string
  icon: string
  path: string
}
const menuLinks: Array<IMenuLinks> = [
  {
    name: 'Home',
    icon: dashboardIcon,
    path: APP_ROUTES.home_path,
  },
]

const SideBarMenu: FC<SideBarMenuProps> = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__container">
        <div className="side-bar__header">
          <Logo className="side-bar__logo" isText={true} />
        </div>
        <div className="side-bar__body">
          <div className="side-bar__body-title">Menu</div>
          <div className="side-bar__body-links-wrapper">
            {menuLinks.map(({ name, path, icon }) => (
              <MenuLink key={path} name={name} icon={icon} path={path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBarMenu
