import { describe, expect, expectTypeOf, test } from 'vitest'
import { Todo } from '@models/Todo'
import { getTodos, sortTodos } from '@/services/todo-service'
import todos from '@services/data/todos.json'

describe('getTodos Function', () => {
  test('returns data', () => {
    const result = getTodos()
    expect(result).not.toBeNull()
  })

  test('return type is Todo array', () => {
    const result = getTodos()
    expectTypeOf(result).toEqualTypeOf<Todo[]>()
  })
})

describe('sortTodos Function', () => {
  test('returns data', () => {
    const result = sortTodos(todos[0], todos[1])
    expect(result).not.toBeNull()
  })

  test('return type is number', () => {
    const result = sortTodos(todos[0], todos[1])
    expectTypeOf(result).toEqualTypeOf<number>()
  })
})
