import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('Renders without crashing', () => {
    render(<App />)
    expect(screen).toBeDefined()
  })

  test('App has a title', () => {
    render(<App />)
    const titleElement = screen.getByRole('heading')
    expect(titleElement).toBeDefined()
  })
})
