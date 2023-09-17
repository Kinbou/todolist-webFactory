import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import TodoList from '../TodoList'
import { getTodos } from '@/services/todo-service'

describe('TodoList', () => {
  const fnToggleState = vi.fn()

  test('Renders without crashing', () => {
    const todoList = getTodos()
    render(<TodoList items={todoList} toggleState={fnToggleState} />)
    expect(screen).toBeDefined()
  })

  test('Renders empty message when list is empty array', () => {
    render(<TodoList items={[]} toggleState={fnToggleState} />)
    const noData = screen.getByText('You have nothing to do. Add new items')
    expect(noData).not.toBeNull()
  })
})
