import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Auth/Login'
import Page404 from '@/pages/_Static/Page404'
import { Navigate } from 'react-router-dom'
import Logout from '@/pages/Auth/Logout'

interface Route {
  path: string
  component: any
  name?: string
}
interface RoutesMap {
  [key: string]: string
}

const authProtectedRoutes: Route[] = [
  { path: '/dashboard', component: Dashboard, name: 'dashboard' },
  { path: '/', component: () => <Navigate to='/dashboard' /> },
  { path: '*', component: Page404 },
]
const publicRoutes: Route[] = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/logout', component: Logout, name: 'logout' },
]

const routes = [...authProtectedRoutes, ...publicRoutes]
  .filter((route) => !!route.name && !!route.path)
  .reduce((acc, route) => {
    if (route.name) {
      acc[route.name] = route.path
    }
    return acc
  }, {} as RoutesMap)

export { authProtectedRoutes, publicRoutes, routes }
