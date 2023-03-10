import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Logo from '@/components/Logo'
import Sidebar from '@/components/Layout/VerticalLayout/Sidebar'
import Navigation from '@/components/Layout/VerticalLayout/Navigation'
interface VerticalLayoutProps {
  children: React.ReactNode
}

const VerticalLayout: React.FC<VerticalLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as='div' className='relative z-40 md:hidden' onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='h-0 flex-1 overflow-y-auto pt-5 pb-4'>
                    <div className='flex flex-shrink-0 items-center px-4'>
                      <Logo />
                    </div>
                    <nav className='mt-5 space-y-1 px-2'>
                      <Navigation />
                    </nav>
                  </div>
                  <div className='flex flex-shrink-0 border-t border-gray-200 p-4'>
                    <a href='#' className='group block flex-shrink-0'>
                      <div className='flex items-center'>
                        <div>
                          <img
                            className='inline-block h-10 w-10 rounded-full'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                          />
                        </div>
                        <div className='ml-3'>
                          <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
                            Tom Cook
                          </p>
                          <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0'>
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col'>
          <Sidebar />
        </div>
        <div className='flex flex-1 flex-col md:pl-72'>
          <div className='sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden'>
            <button
              type='button'
              className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
            </button>
          </div>
          <main className='flex-1'>
            <div className='py-6'>
              <div className='mx-auto max-w-8xl px-4 sm:px-6 md:px-8'>
                {/* <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1> */}
              </div>
              <div className='mx-auto max-w-8xl px-4 sm:px-6 md:px-8'>
                <>{children}</>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default VerticalLayout
