import React from 'react';
import { Box, Typography } from '@mui/material';
import IsometricCubeIcon from '../../../components/icons/IsometricCubeIcon';

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, rgba(255, 120, 0, 0.1) 0%, rgba(18, 18, 18, 0.8) 100%)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: '100%' }}>
        <IsometricCubeIcon sx={{ fontSize: { xs: 60, md: 80 }, color: 'primary.main', mb: 2 }} />

        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2,
            background: 'linear-gradient(135deg, #FF7800, #FFA040)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          MalBox Architecture
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          A modular, plugin-based malware analysis platform built for extensibility and scale
        </Typography>
      </Box>
    </Box>
  );
}
