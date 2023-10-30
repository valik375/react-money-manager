import { FC, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'

interface MenuLinkProps {
  name: string
  icon: ReactElement
  path: string
}

const MenuLink: FC<MenuLinkProps> = ({ path, icon, name }) => {
  return (
    <NavLink className="menu-link" to={path}>
      <div className="menu-link__icon">{icon}</div>
      <div className="menu-link__text">{name}</div>
    </NavLink>
  )
}

export default MenuLink
