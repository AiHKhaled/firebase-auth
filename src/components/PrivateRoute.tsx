import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/context'

export const PrivateRoute = () => {
  const { currentUser } = useAuthContext()

  return currentUser ? <Outlet /> : <Navigate to="/login" />
}
