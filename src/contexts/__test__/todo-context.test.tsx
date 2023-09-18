import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import TodoProvider from '@/contexts/todo-context'

describe('TodoList', () => {
  test('Renders without crashing', () => {
    render(
      <TodoProvider>
        <div></div>
      </TodoProvider>,
    )
    expect(screen).toBeDefined()
  })
})
