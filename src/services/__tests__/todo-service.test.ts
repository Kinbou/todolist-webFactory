import { describe, expect, expectTypeOf, test } from 'vitest'
import { Todo } from '@models/Todo'
import { getSortedTodos, getTodos, sortTodos } from '@/services/todo-service'
import sortedTodosExample from '../data/sorted-todos.json'

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
  const todos = getTodos()

  test('return type is number between -1 and 1', () => {
    todos.sort((a, b) => {
      const res = sortTodos(a, b)
      expectTypeOf(res).toEqualTypeOf<number>()
      expect(res).toBeGreaterThanOrEqual(-1)
      expect(res).toBeLessThanOrEqual(1)
      return res
    })
  })

  test('sorts properly by boolean `checked` property : false>true', () => {
    const sortedTodos = [...todos].sort(sortTodos)
    expect(sortedTodos).toEqual(sortedTodosExample)
  })
})

describe('getSortedTodos Function', () => {
  test('returns sorted dataset', () => {
    const result = getSortedTodos()
    expect(result).toEqual(sortedTodosExample)
  })
})
