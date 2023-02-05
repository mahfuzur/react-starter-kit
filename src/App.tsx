import { Route, Routes } from 'react-router-dom'
import { authProtectedRoutes, publicRoutes } from '@/routes'
import AppRoute from '@/routes/route'

function App() {
  return (
    <Routes>
      <Route>
        {publicRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<AppRoute isAuthProtected={false} />}>
            <Route path={route.path} element={<route.component />} />
          </Route>
        ))}
        {authProtectedRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<AppRoute isAuthProtected={true} />}>
            <Route path={route.path} element={<route.component />} />
          </Route>
        ))}
      </Route>
    </Routes>
  )
}

export default App
