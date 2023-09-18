import { useRoutes, HashRouter, Navigate } from 'react-router-dom'

import TodoProvider from '@/contexts/todo-context'

import HomePage from '@pages/Home/HomePage'
import Todo from '@pages/Todo/Todo'

const APP_ROUTES = [
  {
    path: '/',
    element: (
      <TodoProvider>
        <HomePage />
      </TodoProvider>
    ),
  },
  {
    path: '/todo/:todoId',
    element: (
      <TodoProvider>
        <Todo />
      </TodoProvider>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]

const RoutesComponent = () => useRoutes(APP_ROUTES)

export const AppRoutes = () => {
  return (
    <HashRouter>
      <RoutesComponent />
    </HashRouter>
  )
}
