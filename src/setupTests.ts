import { Mock, vi } from 'vitest'

console.log('setupTests')
const useNavigateMock: Mock = vi.fn()
vi.mock('react-router-dom', async (): Promise<unknown> => {
  const actual: Record<string, unknown> =
    await vi.importActual('react-router-dom')

  return {
    ...actual,
    ...vi.importMock('react-router-dom'),
    useNavigate: (): Mock => useNavigateMock,
    Router: () => vi.fn(),
    HashRouter: () => vi.fn(),
  }
})
