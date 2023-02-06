import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '@/routes'
const navigation = [
  { name: 'Dashboard', href: routes.dashboard, icon: <i></i>, current: true },
  { name: 'Settings', href: routes.settings, icon: <i></i>, current: false },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Navigation: React.FC = () => {
  return (
    <>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={({ isActive }) =>
            classNames(
              isActive
                ? 'bg-secondary text-gray-900 font-bold'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  )
}

export default Navigation
