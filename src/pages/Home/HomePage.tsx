import { useContext, useEffect } from 'react'

import TodoList from './components/TodoList'
import { TodoContext } from '@/contexts/todo-context'
import { getSortedTodos, sortTodos } from '@/services/todo-service'
import { useNavigate } from 'react-router-dom'
import ButtonIcon from '@components/buttons/ButtonIcon'

const HomePage = () => {
  const { updateTodoList, todoList } = useContext(TodoContext)
  const navigate = useNavigate()

  const toggleState = (index: number): void => {
    const copyList = [...todoList]
    const el = copyList[index]
    el.checked = !el.checked
    copyList.sort(sortTodos)
    updateTodoList(copyList)
  }

  const addNewTodo = () => {
    navigate(`/todo/new`)
  }

  useEffect(() => {
    const sortTodoList = todoList ? getSortedTodos(todoList) : getSortedTodos()
    updateTodoList(sortTodoList)
  }, [])

  return (
    <div className="w-30% h-100% text-center flex flex-col items-center">
      <div className="flex justify-between items-center mt-2em w-100%">
        <h1 id="app-title" className=" text-4xl ">
          Todo App
        </h1>
        <ButtonIcon
          data-testid="btn-new-todo"
          onClick={addNewTodo}
          iconName="i-carbon-add-alt"
          styles="w-40px h-40px"
        />
      </div>
      <TodoList items={todoList} toggleState={toggleState} />
    </div>
  )
}

export default HomePage
