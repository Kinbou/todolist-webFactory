import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('Renders without crashing', () => {
    render(<App />)
    expect(screen).toBeDefined()
  })
})
