import TodoProvider from '@/contexts/todo-context'
import { ThemeContext } from '@/contexts/theme-context'
import { AppRoutes } from './AppRoutes'
import ButtonIcon from '@components/buttons/ButtonIcon'
import { useContext } from 'react'

function App() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <div
      className={`${theme} text-text bg-background flex flex-col h-100% center items-center relative`}
    >
      <ButtonIcon
        iconName={`${theme === 'dark' ? 'i-carbon-moon' : 'i-carbon-sun'}`}
        styles="w-40px h-40px absolute top-15px right-15px"
        onClick={toggleTheme}
      />
      <TodoProvider>
        <AppRoutes />
      </TodoProvider>
    </div>
  )
}

export default App
