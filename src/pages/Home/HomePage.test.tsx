import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import HomePage from './HomePage'

describe('HomePage', () => {
  test('Renders without crashing', () => {
    render(<HomePage />)
    expect(screen).toBeDefined()
  })
})
