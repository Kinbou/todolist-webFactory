import { Todo } from '@models/Todo'
import todos from './data/todos.json'

export const sortTodos = (a: Todo, b: Todo): number => {
  return +a.checked - +b.checked
}

export const getTodos = (): Todo[] => {
  const todoList = todos as Todo[]
  return todoList
}

export const getSortedTodos = (todoList?: Todo[]): Todo[] => {
  const listTodo = todoList?.length ? todoList : (todos as Todo[])
  return listTodo.sort(sortTodos)
}

export const getTodo = (id: string, newTodos?: Todo[]): Todo | undefined => {
  const trueTodo = newTodos?.length ? newTodos : todos
  const todo = trueTodo.find((todo) => todo.id === id)
  return todo
}

export const addTodo = (todo: Todo) => {
  const newTodo = [todo, ...todos]
  return newTodo
}

export const updateTodo = (todos: Todo[], todo: Todo): Todo[] => {
  const index = todos.findIndex((item: Todo) => item.id === todo.id)
  const copyTodos = [...todos]
  copyTodos[index] = todo
  return copyTodos
}
