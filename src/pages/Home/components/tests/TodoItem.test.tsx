import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import TodoItem from '../TodoItem'
import { getTodos } from '@/services/todo-service'

describe('TodoItem', () => {
  test('Renders without crashing', () => {
    const todoList = getTodos()
    render(<TodoItem item={todoList[0]} />)
    expect(screen).toBeDefined()
  })

  test('Renders "untitled" for empty item title', () => {
    const todoItem = {
      title: '',
      checked: false,
      id: '1',
    }
    render(<TodoItem item={todoItem} />)
    const untitled = screen.getByLabelText('untitled')
    expect(untitled).not.toBeNull()
  })
})
