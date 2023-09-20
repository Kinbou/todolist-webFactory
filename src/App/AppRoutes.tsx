import { useRoutes, Navigate, HashRouter } from 'react-router-dom'

import HomePage from '@pages/Home/HomePage'
import Todo from '@pages/Todo/Todo'

const APP_ROUTES = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/todo/:todoId',
    element: <Todo />,
  },
  {
    path: '/todo/new',
    element: <Todo />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]

const RoutesComponent = () => useRoutes(APP_ROUTES)

export const AppRoutes = () => {
  const base = '' // import.meta.env.DEV ? '/' : '/todolist-webFactory/'
  return (
    <HashRouter basename={base}>
      <RoutesComponent />
    </HashRouter>
  )
}
