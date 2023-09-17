import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import TodoList from '../TodoList'
import { getTodos } from '@/services/todo-service'

describe('TodoList', () => {
  const todoList = getTodos()
  test('Renders without crashing', () => {
    render(<TodoList items={todoList} />)
    expect(screen).toBeDefined()
  })

  test('Renders empty message when list is empty array', () => {
    render(<TodoList items={[]} />)
    const noData = screen.getByText('You have nothing to do. Add new items')
    expect(noData).not.toBeNull()
  })
})
