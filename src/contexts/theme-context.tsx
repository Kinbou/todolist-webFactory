import React, { createContext, useMemo, useState } from 'react'

type AppTheme = 'dark' | 'light'

interface ContextProps {
  theme: AppTheme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<AppTheme>('dark')
  const obj = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
      },
    }),
    [theme],
  )
  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
