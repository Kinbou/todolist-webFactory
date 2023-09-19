import TodoProvider from '@/contexts/todo-context'
import { AppRoutes } from './AppRoutes'

function App() {
  return (
    <div className="flex flex-col h-100% center items-center">
      <TodoProvider>
        <AppRoutes />
      </TodoProvider>
    </div>
  )
}

export default App
