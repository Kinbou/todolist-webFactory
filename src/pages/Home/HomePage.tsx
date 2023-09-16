import { useContext, useEffect } from 'react'

import TodoList from './components/TodoList'
import { TodoContext } from '@/contexts/todo-context'
import { getTodos } from '@/services/todo-service'

const HomePage = () => {
  const { updateTodoList, todoList } = useContext(TodoContext)

  useEffect(() => {
    const result = getTodos()
    updateTodoList(result)
  }, [updateTodoList])

  return (
    <div className="w-100% text-center flex flex-col items-center">
      <TodoList items={todoList} />
    </div>
  )
}

export default HomePage
