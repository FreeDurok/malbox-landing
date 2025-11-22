import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import LoginPage from './pages/login/LoginPage'
import DocsPage from './pages/docs/DocsPage'
import { ThemeProvider } from './theme'

export default function App(){
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Box sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary'
        }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </ThemeProvider>
  )
}
