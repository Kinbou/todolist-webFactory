import { useId } from 'react'
import TodoList from './components/TodoList'
import { Todo } from '@models/Todo'

const HomePage = () => {
  const listItems: Todo[] = [
    {
      id: useId(),
      title: 'Pikachu',
      checked: true,
    },
    {
      id: useId(),
      title: '',
      checked: false,
    },
    {
      id: useId(),
      title: 'Drag & Drop',
      checked: false,
    },
    {
      id: useId(),
      title: 'Remove todo',
      checked: false,
    },
    {
      id: useId(),
      title: 'Manage multiple lists',
      checked: false,
    },
  ]

  return (
    <div className="w-100% text-center flex flex-col items-center">
      <TodoList items={listItems} />
    </div>
  )
}

export default HomePage
