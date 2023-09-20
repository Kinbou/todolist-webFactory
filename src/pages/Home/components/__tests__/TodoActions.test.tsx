import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import TodoActions from '../TodoActions'

describe('TodoActions', () => {
  const goToTodoDetailFn = vi.fn()
  const deleteTodoFn = vi.fn()

  test('Renders without crashing', () => {
    render(
      <TodoActions
        goToTodoDetail={goToTodoDetailFn}
        deleteTodo={deleteTodoFn}
      />,
    )
    expect(screen).toBeDefined()
  })

  test('Edit button click function call', () => {
    render(
      <TodoActions
        goToTodoDetail={goToTodoDetailFn}
        deleteTodo={deleteTodoFn}
      />,
    )

    const editBtn = screen.getByTitle('Edit')
    editBtn.click()

    expect(goToTodoDetailFn).toHaveBeenCalled()
  })

  test('Delete button click function call an edit todo function', () => {
    render(
      <TodoActions
        goToTodoDetail={goToTodoDetailFn}
        deleteTodo={deleteTodoFn}
      />,
    )

    const deleteBtn = screen.getByTitle('Remove')
    deleteBtn.click()

    expect(deleteTodoFn).toHaveBeenCalled()
  })
})
