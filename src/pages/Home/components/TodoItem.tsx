import { Todo } from '../../../models/Todo'

interface TodoItemProps {
  item: Todo
}

const TodoItem = ({ item }: TodoItemProps) => {
  if (!item) {
    return
  }

  const { id, checked, title } = item
  return (
    <div className="w-25% h-80px border border-solid border-#27557d m-1em flex justify-start rounded-md pl-2em box-border">
      <input type="checkbox" id={id} defaultChecked={checked} />
      <label
        className="ml-.5em flex items-center font-size-5"
        htmlFor={id}
        title={title}
      >
        {title || 'untitled'}
      </label>
    </div>
  )
}

export default TodoItem
