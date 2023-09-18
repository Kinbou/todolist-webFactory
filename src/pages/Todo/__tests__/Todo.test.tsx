import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Todo from '@pages/Todo/Todo'

describe('TodoList', () => {
  test('Renders without crashing', () => {
    render(<Todo />)
    expect(screen).toBeDefined()
  })
})
