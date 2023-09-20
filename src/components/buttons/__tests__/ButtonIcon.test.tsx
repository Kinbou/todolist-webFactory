import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import ButtonIcon from '../ButtonIcon'

describe('ButtonIcon', () => {
  const onClickFn = vi.fn()

  test('Renders without crashing', () => {
    render(<ButtonIcon onClick={onClickFn} iconName="test icon" />)
    expect(screen).toBeDefined()
  })

  test('onClick button', () => {
    render(<ButtonIcon onClick={onClickFn} iconName="test icon" />)
    expect(onClickFn).not.toBeNull()
  })
})
