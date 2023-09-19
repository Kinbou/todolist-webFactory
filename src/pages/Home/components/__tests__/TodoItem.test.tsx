import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import TodoItem from '../TodoItem'
import { getTodos } from '@/services/todo-service'

describe('TodoItem', () => {
  const todoItem = getTodos()[0]
  const toggleStateFn = vi.fn()

  test('Renders without crashing', () => {
    render(<TodoItem item={todoItem} toggleState={toggleStateFn} />)
    expect(screen).toBeDefined()
  })

  test('Renders "untitled" for empty item title', () => {
    const item = { ...todoItem, title: '' }
    render(<TodoItem item={item} toggleState={toggleStateFn} />)
    const untitled = screen.getByText('untitled')
    expect(untitled).not.toBeNull()
  })

  test('Clicking an item triggers toogleState function', () => {
    render(<TodoItem item={todoItem} toggleState={toggleStateFn} />)

    const todoChk = screen.getByText(todoItem.title)
    todoChk.click()

    expect(toggleStateFn).toHaveBeenCalled()
  })
})
