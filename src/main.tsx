import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import 'virtual:uno.css'

import './index.css'
import ThemeProvider from './contexts/theme-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
