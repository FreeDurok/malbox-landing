import React, { createContext, useContext, useMemo, useState } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const ThemeContext = createContext()

const makePalette = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#ff6f00' : '#f57c00',
      light: '#ffa040',
      dark: '#c43e00',
      contrastText: '#ffffff'
    },
    secondary: {
      main: mode === 'dark' ? '#ff9800' : '#42a5f5',
      light: mode === 'dark' ? '#ffb74d' : '#64b5f6',
      dark: mode === 'dark' ? '#f57c00' : '#1e88e5'
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669'
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706'
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626'
    },
    // Custom colors for enhanced UI palette
    purple: {
      main: '#a855f7',
      light: '#c084fc',
      dark: '#9333ea',
      contrastText: '#ffffff'
    },
    teal: {
      main: '#14b8a6',
      light: '#2dd4bf',
      dark: '#0d9488',
      contrastText: '#ffffff'
    },
    magenta: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#db2777',
      contrastText: '#ffffff'
    },
    pink: {
      main: '#f472b6',
      light: '#f9a8d4',
      dark: '#ec4899',
      contrastText: '#ffffff'
    },
    orange: {
      main: '#fb923c',
      light: '#fdba74',
      dark: '#f97316',
      contrastText: '#ffffff'
    },
    cyan: {
      main: '#06b6d4',
      light: '#22d3ee',
      dark: '#0891b2',
      contrastText: '#ffffff'
    },
    indigo: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff'
    },
    lime: {
      main: '#84cc16',
      light: '#a3e635',
      dark: '#65a30d',
      contrastText: '#ffffff'
    },
    background: {
      default: mode === 'dark' ? '#0a0a0f' : '#b0bec5',
      paper: mode === 'dark' ? '#13131a' : '#cfd8dc'
    },
    text: {
      primary: mode === 'dark' ? '#f1f5f9' : '#263238',
      secondary: mode === 'dark' ? '#94a3b8' : '#455a64'
    },
    divider: mode === 'dark' ? 'rgba(148,163,184,0.12)' : 'rgba(38,50,56,0.2)'
  }
})

export function ThemeProvider({children}){
  const [mode, setMode] = useState('dark')
  const muiTheme = useMemo(()=> createTheme({
    ...makePalette(mode),
    typography: {
      fontFamily: "'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      h1: { fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' },
      h2: { fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.01em' },
      h3: { fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.01em' },
      h4: { fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.01em' },
      h5: { fontSize: '1.25rem', fontWeight: 600 },
      h6: { fontSize: '1.125rem', fontWeight: 600 },
      subtitle1: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.5 },
      subtitle2: { fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.57 },
      body1: { fontSize: '0.95rem', lineHeight: 1.6 },
      body2: { fontSize: '0.875rem', lineHeight: 1.5 },
      button: { textTransform: 'none', fontWeight: 700 },
      caption: { fontSize: '0.75rem', lineHeight: 1.5 },
      overline: { fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }
    },
    shape: {
      borderRadius: 12
    },
    shadows: [
      'none',
      mode === 'dark'
        ? '0 2px 4px rgba(0,0,0,0.4)'
        : '0 1px 3px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.05)',
      mode === 'dark'
        ? '0 4px 8px rgba(0,0,0,0.4)'
        : '0 3px 6px rgba(15,23,42,0.1), 0 2px 4px rgba(15,23,42,0.06)',
      mode === 'dark'
        ? '0 8px 16px rgba(0,0,0,0.4)'
        : '0 10px 15px rgba(15,23,42,0.1), 0 4px 6px rgba(15,23,42,0.05)',
      mode === 'dark'
        ? '0 16px 24px rgba(0,0,0,0.5)'
        : '0 20px 25px rgba(15,23,42,0.1), 0 10px 10px rgba(15,23,42,0.04)',
      ...Array(20).fill('none')
    ],
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarWidth: 'thin',
            scrollbarColor: mode === 'dark' ? '#374151 #1f2937' : '#90a4ae #b0bec5',
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px'
            },
            '&::-webkit-scrollbar-track': {
              background: mode === 'dark' ? '#1f2937' : '#b0bec5'
            },
            '&::-webkit-scrollbar-thumb': {
              background: mode === 'dark' ? '#374151' : '#90a4ae',
              borderRadius: '4px',
              '&:hover': {
                background: mode === 'dark' ? '#4b5563' : '#78909c'
              }
            }
          }
        }
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 10,
            fontWeight: 700,
            padding: '8px 20px',
            transition: 'all 0.2s ease-in-out'
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: mode === 'dark'
                ? '0 8px 16px rgba(255,111,0,0.3)'
                : '0 8px 16px rgba(245,124,0,0.2)',
              transform: 'translateY(-2px)'
            }
          },
          outlined: {
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
              transform: 'translateY(-1px)'
            }
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: mode === 'dark'
              ? '1px solid rgba(148,163,184,0.08)'
              : '1px solid rgba(15,23,42,0.05)',
            boxShadow: mode === 'dark'
              ? '0 4px 6px rgba(0,0,0,0.3)'
              : '0 1px 3px rgba(15,23,42,0.08)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: mode === 'dark'
                ? '0 20px 25px rgba(0,0,0,0.4), 0 10px 10px rgba(0,0,0,0.3)'
                : '0 20px 25px rgba(15,23,42,0.1), 0 10px 10px rgba(15,23,42,0.04)'
            }
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none'
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 10
            }
          }
        }
      }
    }
  }), [mode])
  return (
    <ThemeContext.Provider value={{mode, setMode}}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  return useContext(ThemeContext)
}
