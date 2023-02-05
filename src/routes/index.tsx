import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Auth/Login'
import Page404 from '@/pages/_Static/Page404'
import { Navigate } from 'react-router-dom'
import Logout from '@/pages/Auth/Logout'

const authProtectedRoutes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/', component: () => <Navigate to='/dashboard' /> },
  { path: '*', component: Page404 },
]
const publicRoutes = [
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
]

export { authProtectedRoutes, publicRoutes }
