import React from 'react'

interface PublicLayoutProps {
  children: React.ReactNode
}
const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12'>
      <div className='p-10 xs:p-0 mx-auto md:w-full md:max-w-lg'>
        <>{children}</>
      </div>
    </div>
  )
}

export default PublicLayout
