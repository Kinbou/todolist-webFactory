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
    <div className="w-30% border border-solid border-l-solid border-l-#27557d border-l-5 border-#27557d m-1em flex justify-start items-center rounded-md p-x-1em p-y-.5em box-border m-h-100px">
      <input type="checkbox" id={'chk' + id} defaultChecked={checked} />
      <label
        className="text-left ml-1em font-size-5 whitespace-break-spaces text-ellipsis overflow-hidden"
        htmlFor={'chk' + id}
        title={title}
      >
        {title || 'untitled'}
      </label>
    </div>
  )
}

export default TodoItem
