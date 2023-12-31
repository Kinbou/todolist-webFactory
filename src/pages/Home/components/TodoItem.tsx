import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { Todo } from '@models/Todo'
import TodoActions from './TodoActions'

import './todoItem.css'
import { removeTodo } from '@services/todo-service'
import { useContext } from 'react'
import { TodoContext } from '@/contexts/todo-context'

interface TodoItemProps {
  item: Todo
  toggleState: () => void
}

const TodoItem = ({ item, toggleState }: TodoItemProps) => {
  const { updateTodoList, todoList } = useContext(TodoContext)
  const navigate = useNavigate()
  if (!item) {
    return
  }

  const { id, checked, title, description } = item

  const goToTodoDetail = () => {
    navigate(`/todo/${id}`)
  }

  const deleteTodo = () => {
    const result = removeTodo(todoList, item.id)
    if (result) {
      updateTodoList(result)
    }
  }

  return (
    <div
      className={cx(
        'todoItem border border-solid border-l-solid border-l-#27557d border-l-5 border-#27557d m-1em flex justify-start items-center rounded-md p-x-1em p-y-.5em box-border m-h-100px relative w-100%',
        {
          'line-through border-l-green': item.checked,
        },
      )}
    >
      <input
        type="checkbox"
        id={'chk' + id}
        defaultChecked={checked}
        onChange={toggleState}
        className="cursor-pointer"
      />
      <label
        className={cx(
          'text-left ml-1em font-size-5 whitespace-break-spaces text-ellipsis overflow-hidden cursor-pointer',
          {
            'italic text-orange': !title,
          },
        )}
        htmlFor={'chk' + id}
        title={description}
      >
        {title || 'untitled'}
      </label>
      <div className="hidden todoActions">
        <TodoActions goToTodoDetail={goToTodoDetail} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}

export default TodoItem
