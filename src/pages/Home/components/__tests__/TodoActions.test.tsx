import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import TodoActions from '../TodoActions'

describe('TodoActions', () => {
  const goToTodoDetailFn = vi.fn()

  test('Renders without crashing', () => {
    render(<TodoActions goToTodoDetail={goToTodoDetailFn} />)
    expect(screen).toBeDefined()
  })

  test('Clicking an edit todo function', () => {
    render(<TodoActions goToTodoDetail={goToTodoDetailFn} />)

    const editClick = screen.getByRole('button')
    editClick.click()

    expect(goToTodoDetailFn).toHaveBeenCalled()
  })
})
