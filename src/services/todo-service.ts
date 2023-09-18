import { Todo } from '@models/Todo'
import todos from './data/todos.json'

export const sortTodos = (a: Todo, b: Todo): number => {
  return +a.checked - +b.checked
}

export const getTodos = (): Todo[] => {
  const todoList = todos as Todo[]
  return todoList
}

export const getSortedTodos = (): Todo[] => {
  return getTodos().sort(sortTodos)
}

export const getTodo = (id: string): Todo | undefined => {
  const todo = todos.find((todo) => todo.id === id)
  return todo
}
