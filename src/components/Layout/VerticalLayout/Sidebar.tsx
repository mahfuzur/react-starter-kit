import React from 'react'
import Logo from '@/components/Logo'
import { Link } from 'react-router-dom'
import { routes } from '@/routes'
import Navigation from '@/components/Layout/VerticalLayout/Navigation'

const Sidebar: React.FC = () => {
  return (
    <div className='flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white'>
      <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
        <div className='flex flex-shrink-0 items-center px-4'>
          <Logo />
        </div>
        <nav className='mt-5 flex-1 space-y-1 bg-white px-4'>
          <Navigation />
        </nav>
      </div>
      <div className='flex flex-shrink-0 border-t border-gray-200 p-4'>
        <a href='#' className='group block w-full flex-shrink-0'>
          <div className='flex items-center'>
            <div>
              <img
                className='inline-block h-9 w-9 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <p className='text-md font-medium text-gray-900 group-hover:text-gray-900 font-bold'>
                Tom Cook
              </p>
              <Link
                to={routes.logout}
                className='text-sm font-medium text-gray-900 group-hover:text-gray-700'
              >
                Sign Out
              </Link>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
