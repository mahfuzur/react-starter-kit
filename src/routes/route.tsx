import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Navigate } from 'react-router-dom'
import { routes } from '@/routes/index'

interface AppRouteProps {
  isAuthProtected?: boolean
  layout: React.FC<{ children: React.ReactNode }>
}
const AppRoute: React.FC<AppRouteProps> = ({ isAuthProtected, layout: Layout }) => {
  if (isAuthProtected && !localStorage.getItem('token')) return <Navigate to={routes.login} />

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

AppRoute.propTypes = {
  isAuthProtected: PropTypes.bool,
}

export default AppRoute
