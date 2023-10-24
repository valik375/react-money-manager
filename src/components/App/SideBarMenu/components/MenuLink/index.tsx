import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'

interface MenuLinkProps {
  name: string
  icon: string
  path: string
}

const MenuLink: FC<MenuLinkProps> = ({ path, icon, name }) => {
  return (
    <NavLink className="menu-link" to={path}>
      <div className="menu-link__icon">
        <img src={icon} alt="Icom" />
      </div>
      <div className="menu-link__text">{name}</div>
    </NavLink>
  )
}

export default MenuLink
