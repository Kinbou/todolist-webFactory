import TodoItem from './TodoItem'
import { Todo } from '@models/Todo'

interface TodoListProps {
  items: Todo[]
  toggleState: (index: number) => void
}

const TodoList = ({ items, toggleState }: TodoListProps) => {
  if (!items) return

  return (
    <>
      {items.length > 0 ? (
        items.map((item: Todo, index: number) => (
          <TodoItem
            key={item.id}
            item={item}
            toggleState={() => toggleState(index)}
          />
        ))
      ) : (
        <div id="no-data">You have nothing to do. Add new items</div>
      )}
    </>
  )
}

export default TodoList
