import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token')
    navigate('/')
  }, [history])

  return <div>Logging out...</div>
}

export default Logout
