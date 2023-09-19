import { ReactNode, SyntheticEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Todo } from '@models/Todo'
import { addTodo } from '@services/todo-service'
import { TodoContext } from '@/contexts/todo-context'

const TodoDetails = ({ todo }: { todo: Todo | undefined }): ReactNode => {
  const [title, setTitle] = useState<string>(todo?.title ?? '')
  const [description, setDescription] = useState<string>(
    todo?.description ?? '',
  )
  const navigate = useNavigate()
  const { updateTodoList } = useContext(TodoContext)

  const handleAddTodo = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log('handleAddTodo', title, description)
    if (!title) {
      return
    }

    const result = addTodo({
      description,
      title,
      checked: false,
      id: 'qsqlkdjqs',
    })
    if (result) {
      updateTodoList(result)
      navigate('/')
    }
  }

  const handleEditTodo = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log('handleEditTodo')
  }

  return (
    <div className="flex flex-col min-w-70% max-w-100% items-center">
      <h1>{todo ? 'Modify Todo' : 'Add Todo'}</h1>
      <form
        className=" flex flex-col w-100%"
        onSubmit={todo ? handleEditTodo : handleAddTodo}
      >
        <div className="flex flex-col mb-3rem">
          <label
            className="text-14px mb-.3rem text-gray-200 font-bold"
            htmlFor=""
          >
            Title *
          </label>
          <input
            className="pl-1rem h-50px border-none rounded-md"
            placeholder="Enter title"
            value={title}
            readOnly={!!todo}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-14px mb-.3rem text-gray-200 font-bold"
          >
            Description
          </label>
          <textarea
            name={todo?.description}
            id={todo?.id}
            cols={20}
            rows={10}
            className="border-none rounded-md p-1rem max-w-100%"
            readOnly={!!todo}
            value={description}
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="w-100% flex justify-end">
          <button
            className="mt-2em w-auto w-min"
            type="submit"
            disabled={!title}
          >
            {todo ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoDetails
