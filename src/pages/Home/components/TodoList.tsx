import TodoItem from './TodoItem'
import { Todo } from '@models/Todo'

interface TodoListProps {
  items: Todo[]
}

const TodoList = ({ items }: TodoListProps) => {
  if (!items) return

  return (
    <>
      {items.length > 0 ? (
        items.map((item) => <TodoItem key={item.id} item={item} />)
      ) : (
        <div id="no-data">You have nothing to do. Add new items</div>
      )}
    </>
  )
}

export default TodoList
