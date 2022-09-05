import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/context'

const PublicRoutes = () => {
  const { currentUser } = useAuthContext()

  return currentUser ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoutes
