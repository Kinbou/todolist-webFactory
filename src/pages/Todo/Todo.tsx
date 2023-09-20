import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { getTodo } from '@services/todo-service'
import { Todo } from '@models/Todo'
import { TodoContext } from '@/contexts/todo-context'

import TodoDetails from '@pages/Todo/components/TodoDetails'

const TodoPage = () => {
  const { todoId } = useParams()
  const { todoList } = useContext(TodoContext)

  const todo: Todo | undefined = todoId ? getTodo(todoId, todoList) : undefined

  return (
    <div className=" my-2rem py-4rem flex justify-center w-100%">
      <TodoDetails todo={todo} />
    </div>
  )
}

export default TodoPage
