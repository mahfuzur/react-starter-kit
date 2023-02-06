import { Route, Routes } from 'react-router-dom'
import { authProtectedRoutes, publicRoutes } from '@/routes'
import AppRoute from '@/routes/route'
import PublicLayout from '@/components/Layout/PublicLayout/PublicLayout'
import VerticalLayout from '@/components/Layout/VerticalLayout/VerticalLayout'

function App() {
  return (
    <Routes>
      <Route>
        {publicRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={<AppRoute isAuthProtected={false} layout={PublicLayout} />}
          >
            <Route path={route.path} element={<route.component />} />
          </Route>
        ))}
        {authProtectedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={<AppRoute isAuthProtected={true} layout={VerticalLayout} />}
          >
            <Route path={route.path} element={<route.component />} />
          </Route>
        ))}
      </Route>
    </Routes>
  )
}

export default App
