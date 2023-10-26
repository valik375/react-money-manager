import { FC } from 'react'
import { APP_ROUTES } from 'src/constants'
import MenuLink from 'src/components/App/SideBarMenu/components/MenuLink'
import { Logo, Text } from 'src/UI'

import dashboardIcon from 'src/assets/images/app/icons/dashboard-icon.svg'
import logoutIcon from 'src/assets/images/app/icons/logout-icon.svg'
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
      <div className="side-bar__footer">
        <div className="side-bar__footer-image">
          <img src="" alt="User Image" />
        </div>
        <div className="side-bar__footer-info">
          <Text className="side-bar__footer-name" nowrap={true}>
            Valik Test
          </Text>
          <Text className="side-bar__footer-email" nowrap={true}>
            testmail@gmail.com
          </Text>
        </div>
        <div className="side-bar__footer-logout">
          <img src={logoutIcon} alt="Logout Icon" />
        </div>
      </div>
    </div>
  )
}

export default SideBarMenu
