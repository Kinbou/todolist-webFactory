import { describe, expect, expectTypeOf, test } from 'vitest'
import { Todo } from '@models/Todo'
import { getTodos } from '@/services/todo-service'

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
