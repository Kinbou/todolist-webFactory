import { useContext, useEffect } from 'react'

import TodoList from './components/TodoList'
import { TodoContext } from '@/contexts/todo-context'
import { getSortedTodos, sortTodos } from '@/services/todo-service'

const HomePage = () => {
  const { updateTodoList, todoList } = useContext(TodoContext)

  const toggleState = (index: number): void => {
    const copyList = [...todoList]
    const el = copyList[index]
    el.checked = !el.checked
    copyList.sort(sortTodos)
    updateTodoList(copyList)
  }

  useEffect(() => {
    const todoList = getSortedTodos()
    updateTodoList(todoList)
  }, [])

  return (
    <div className="w-100% text-center flex flex-col items-center">
      <TodoList items={todoList} toggleState={toggleState} />
    </div>
  )
}

export default HomePage
