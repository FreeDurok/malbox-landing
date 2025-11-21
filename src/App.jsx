import React from 'react'
import { Box } from '@mui/material'
import { Analytics } from '@vercel/analytics/react'
import LoginPage from './pages/login/LoginPage'
import { ThemeProvider } from './theme'

export default function App(){
  return (
    <ThemeProvider>
      <Box sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary'
      }}>
        <LoginPage onEnter={() => {
          window.location.href = 'https://malbox.org'
        }} />
      </Box>
      <Analytics />
    </ThemeProvider>
  )
}
