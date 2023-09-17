import { Todo } from '@models/Todo'
import todos from './data/todos.json'

export const sortTodos = (a: Todo, b: Todo): number => {
  return +a.checked - +b.checked
}

export const getTodos = (): Todo[] => {
  const todoList = todos as Todo[]
  const sortedResult = todoList.sort(sortTodos)
  return sortedResult
}
