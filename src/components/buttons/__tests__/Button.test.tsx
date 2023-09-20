import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import Button from '../Button'

describe('Button', () => {
  const onClickFn = vi.fn()

  test('Renders without crashing', () => {
    render(<Button onClick={onClickFn} text="testText" type="button" />)
    expect(screen).toBeDefined()
  })

  test('Button has a title', () => {
    render(<Button onClick={onClickFn} text="testText" type="button" />)
    const titleElement = screen.getAllByText
    expect(titleElement).toBeDefined()
  })

  test('onClick button', () => {
    render(<Button onClick={onClickFn} text="testText" type="button" />)
    expect(onClickFn).not.toBeNull()
  })
})
