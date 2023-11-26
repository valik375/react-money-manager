import { FC, ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUserStore from 'src/store/useUserStore.ts'
import useGlobalLoader from 'src/hooks/useGlobalLoader.ts'
import { APP_ROUTES, AUTH_ROUTES } from 'src/constants'
import MenuLink from 'src/components/App/SideBarMenu/components/MenuLink'
import { Logo, Text } from 'src/UI'

import { User2, LogOut, LayoutDashboard, CandlestickChart } from 'lucide-react'
import './style.scss'

interface SideBarMenuProps {}

interface IMenuLinks {
  name: string
  icon: ReactElement
  path: string
}
const menuLinks: Array<IMenuLinks> = [
  {
    name: 'Home',
    icon: <LayoutDashboard />,
    path: APP_ROUTES.home_path,
  },
  {
    name: 'Expenses',
    icon: <CandlestickChart />,
    path: APP_ROUTES.expenses_path,
  },
]

const SideBarMenu: FC<SideBarMenuProps> = () => {
  const { logout, user } = useUserStore()
  const { showLoader, hideLoader } = useGlobalLoader()
  const navigation = useNavigate()

  const userLogout = async () => {
    showLoader()
    const { success } = await logout()
    if (success) {
      navigation(AUTH_ROUTES.login_path)
    }
    hideLoader()
  }

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
        <Link className="side-bar__profile" to={'/profile'}>
          <div className="side-bar__footer-image">
            {user?.photoURL ? <img src={user.photoURL} alt="Logout Icon" /> : <User2 />}
          </div>
          <div className="side-bar__footer-info">
            <Text className="side-bar__footer-name" nowrap={true}>
              {user?.displayName}
            </Text>
            <Text className="side-bar__footer-email" nowrap={true}>
              {user?.email}
            </Text>
          </div>
        </Link>
        <div className="side-bar__footer-logout" onClick={userLogout}>
          <LogOut />
        </div>
      </div>
    </div>
  )
}

export default SideBarMenu
