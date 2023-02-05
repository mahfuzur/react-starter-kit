import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Navigate } from 'react-router-dom'

const AppRoute = ({ isAuthProtected }) => {
  if (isAuthProtected && !localStorage.getItem('token')) return <Navigate to='/login' />

  return (
    <div className={'border-4 border-amber-900'}>
      <Outlet />
    </div>
  )
}

AppRoute.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default AppRoute
