import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import TodoDetails from '@pages/Todo/components/TodoDetails'

describe('TodoList', () => {
  const totoTest = {
    title: 'Pikachu',
    description: 'Pokemon de type électrique',
    id: '65265ae0-5e7f-416d-81b7-d220306cb8cb',
    checked: true,
  }
  test('Renders without crashing', () => {
    render(<TodoDetails todo={totoTest} />)
    expect(screen).toBeDefined()
  })
})
