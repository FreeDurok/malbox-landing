import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

export default function GettingStartedSection() {
  return (
    <Box id="getting-started" sx={{ mb: 10, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: '#FFFFFF',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Getting Started
      </Typography>
      <Box
        sx={{
          width: { xs: 120, sm: 140 },
          height: 4,
          borderRadius: 9999,
          background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main} 0%, rgba(0,0,0,0) 100%)`,
          mb: 3
        }}
      />

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
        MalBox is currently in active development.
      </Typography>

      {/* Private Repository Notice */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          mb: 3,
          bgcolor: 'rgba(255, 120, 0, 0.08)',
          border: '2px solid',
          borderColor: 'primary.main',
          borderRadius: 3,
          textAlign: 'center'
        }}
      >
        <InfoIcon sx={{ color: 'primary.main', fontSize: 48, mb: 2 }} />

        <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
          Under Development
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, maxWidth: '700px', mx: 'auto' }}>
          MalBox is currently under active development.
          We're working hard to build a robust, production-ready malware analysis platform.
        </Typography>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1.5,
            bgcolor: 'rgba(0, 0, 0, 0.3)',
            px: 3,
            py: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'rgba(255, 120, 0, 0.3)'
          }}
        >
          <EmailIcon sx={{ color: 'primary.main', fontSize: 24 }} />
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Get in touch:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                fontFamily: 'monospace'
              }}
            >
              info@malbox.org
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* What to Expect */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          bgcolor: 'rgba(33, 150, 243, 0.05)',
          border: '1px solid',
          borderColor: 'rgba(33, 150, 243, 0.3)',
          borderRadius: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
          What to Expect
        </Typography>

        <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
          <Box
            component="li"
            sx={{
              mb: 1.5,
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: '#2196F3' }
            }}
          >
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>Easy Setup:</Box> One-command deployment with Docker Compose
          </Box>
          <Box
            component="li"
            sx={{
              mb: 1.5,
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: '#2196F3' }
            }}
          >
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>CLI Tool:</Box> Powerful command-line interface for managing services and plugins
          </Box>
          <Box
            component="li"
            sx={{
              mb: 1.5,
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: '#2196F3' }
            }}
          >
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>Plugin System:</Box> Extensible architecture for custom analysis modules
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: '#2196F3' }
            }}
          >
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>Comprehensive Docs:</Box> Detailed documentation for deployment, plugin development, and API usage
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
