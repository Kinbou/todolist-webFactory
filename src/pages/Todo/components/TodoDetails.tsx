import { ReactNode, SyntheticEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '@models/Todo'
import { addTodo, updateTodo } from '@services/todo-service'
import { TodoContext } from '@/contexts/todo-context'
import Button from '@components/buttons/Button'
import ButtonIcon from '@components/buttons/ButtonIcon'
import { ThemeContext } from '@/contexts/theme-context'

const TodoDetails = ({ todo }: { todo: Todo | undefined }): ReactNode => {
  const [title, setTitle] = useState<string>(todo?.title ?? '')
  const [description, setDescription] = useState<string>(
    todo?.description ?? '',
  )
  const navigate = useNavigate()
  const { updateTodoList, todoList } = useContext(TodoContext)
  const { theme } = useContext(ThemeContext)

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
      id: uuidv4(),
    })
    if (result) {
      updateTodoList(result)
      navigate('/')
    }
  }

  const handleEditTodo = (e: SyntheticEvent) => {
    e.preventDefault()
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
    <div
      className={`${theme} min-w-40% max-w-90% rounded-md bg-backgroundTodoDetail flex flex-col items-center relative text-text`}
    >
      <ButtonIcon
        iconName="i-carbon-arrow-left"
        onClick={goToHome}
        styles="absolute top-2.5em left-2em p-1em"
      />
      <h1>{todo ? 'Modify Todo' : 'Add Todo'}</h1>
      <form
        className=" flex flex-col w-100% min-w-70% max-w-80% p-2em"
        onSubmit={todo ? handleEditTodo : handleAddTodo}
      >
        <div className="flex flex-col mb-3rem w-100%">
          <label className="text-14px mb-.3rem font-bold" htmlFor="title">
            Title *
          </label>
          <input
            id="title"
            className={`${theme} pl-1rem h-50px border-none rounded-md bg-background text-text`}
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-100%">
          <label
            htmlFor={'description'}
            className="text-14px mb-.3rem font-bold"
          >
            Description
          </label>
          <textarea
            name={todo?.description}
            id={'description'}
            cols={20}
            rows={10}
            className={`${theme} border-none rounded-md p-1rem max-w-100% bg-background text-text`}
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
