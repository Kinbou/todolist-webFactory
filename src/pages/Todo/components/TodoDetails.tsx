import { ReactNode, SyntheticEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { Todo } from '@models/Todo'
import { addTodo, updateTodo } from '@services/todo-service'
import { TodoContext } from '@/contexts/todo-context'
import Button from '@components/buttons/Button'

const TodoDetails = ({ todo }: { todo: Todo | undefined }): ReactNode => {
  const [title, setTitle] = useState<string>(todo?.title ?? '')
  const [description, setDescription] = useState<string>(
    todo?.description ?? '',
  )
  const navigate = useNavigate()
  const { updateTodoList, todoList } = useContext(TodoContext)

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
    if (todo) {
      const result = updateTodo(todoList, {
        description,
        title,
        checked: todo.checked,
        id: todo.id,
      })
      updateTodoList(result)
      navigate('/')
    }
  }

  const goToHome = () => {
    navigate('/')
  }

  return (
    <div className="min-w-40% max-w-90%rounded-md bg-#212226 flex flex-col items-center relative">
      <button
        className="i-carbon-arrow-left p-1em cursor-pointer absolute top-2.5em left-2em"
        onClick={goToHome}
      />
      <h1>{todo ? 'Modify Todo' : 'Add Todo'}</h1>
      <form
        className=" flex flex-col w-100% min-w-70% max-w-80% p-2em"
        onSubmit={todo ? handleEditTodo : handleAddTodo}
      >
        <div className="flex flex-col mb-3rem w-100%">
          <label
            className="text-14px mb-.3rem text-gray-200 font-bold"
            htmlFor="title"
          >
            Title *
          </label>
          <input
            id="title"
            className="pl-1rem h-50px border-none rounded-md"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-100%">
          <label
            htmlFor={'description'}
            className="text-14px mb-.3rem text-gray-200 font-bold"
          >
            Description
          </label>
          <textarea
            name={todo?.description}
            id={'description'}
            cols={20}
            rows={10}
            className="border-none rounded-md p-1rem max-w-100%"
            value={description}
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="w-100% flex justify-end">
          <Button text={todo ? 'Edit' : 'Add'} disable={!title} type="submit" />
        </div>
      </form>
    </div>
  )
}

export default TodoDetails
