import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import HomePage from '../HomePage'

describe('HomePage', () => {
  const toggleState = vi.fn()

  // beforeAll(() => {
  //   render(<HomePage />)
  // })

  test('Renders without crashing', () => {
    render(<HomePage />)
    expect(screen).toBeDefined()
  })

  test('HomePage has a title', () => {
    render(<HomePage />)
    const titleElement = screen.getByRole('heading')
    expect(titleElement).toBeDefined()
  })

  test('Call toggleState function', () => {
    render(<HomePage />)
    toggleState(0)
    expect(toggleState).toHaveBeenCalled()
    // TODO: verify that context item 'checked' has been properly toggled, and that list has been sorted
  })
})
