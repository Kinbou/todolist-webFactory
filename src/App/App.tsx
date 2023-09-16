import HomePage from '@pages/Home/HomePage'
import TodoProvider from '@/contexts/todo-context'

function App() {
  return (
    <div className="flex flex-col center items-center">
      <h1 id="app-title" className="mt-2em text-4xl">
        Todo App
      </h1>
      <TodoProvider>
        <HomePage />
      </TodoProvider>
    </div>
  )
}

export default App
