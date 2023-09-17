import { AppRoutes } from './AppRoutes'

function App() {
  return (
    <div className="flex flex-col h-100% center items-center">
      <h1 id="app-title" className="mt-2em text-4xl">
        Todo App
      </h1>
      <AppRoutes />
    </div>
  )
}

export default App
