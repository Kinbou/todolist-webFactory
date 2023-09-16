import { Todo } from '@models/Todo'
import todos from './data/todos.json'

export const getTodos = (): Todo[] => {
  return todos
}
