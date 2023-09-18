import { useParams } from 'react-router-dom'

import { getTodo } from '@services/todo-service'
import { Todo } from '@models/Todo'

import TodoDetails from '@pages/Todo/components/TodoDetails'

const TodoPage = () => {
  const { todoId } = useParams()

  const todo: Todo | undefined = todoId ? getTodo(todoId) : undefined

  return (
    <div className="min-w-40% max-w-90% my-2rem  py-4rem flex justify-center rounded-md bg-#212226">
      <TodoDetails todo={todo} />
    </div>
  )
}

export default TodoPage
