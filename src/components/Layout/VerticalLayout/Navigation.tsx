import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '@/routes'
import { HomeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
const navigation = [
  { name: 'Dashboard', href: routes.dashboard, icon: HomeIcon },
  { name: 'Settings', href: routes.settings, icon: WrenchScrewdriverIcon },
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
          {({ isActive }) => (
            <>
              <item.icon
                className={classNames(
                  isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900',
                  'mr-4 flex-shrink-0 h-6 w-6',
                )}
                aria-hidden='true'
              />
              {item.name}
            </>
          )}
        </NavLink>
      ))}
    </>
  )
}

export default Navigation
