import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { Todo } from '@models/Todo'

interface TodoItemProps {
  item: Todo
  toggleState: () => void
}

const TodoItem = ({ item, toggleState }: TodoItemProps) => {
  const navigate = useNavigate()
  if (!item) {
    return
  }

  const { id, checked, title } = item

  const goToTodoDetail = () => {
    navigate(`/todo/${id}`)
  }

  return (
    <div
      className={cx(
        'w-30% border border-solid border-l-solid border-l-#27557d border-l-5 border-#27557d m-1em flex justify-start items-center rounded-md p-x-1em p-y-.5em box-border m-h-100px',
        {
          'line-through border-l-green': item.checked,
        },
      )}
      onClick={goToTodoDetail}
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
        title={title}
      >
        {title || 'untitled'}
      </label>
    </div>
  )
}

export default TodoItem
