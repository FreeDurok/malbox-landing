import React from 'react';
import { Box, Typography } from '@mui/material';
import IsometricCubeIcon from '../../../components/icons/IsometricCubeIcon';
import MalBoxLogo from '../../../components/common/MalBoxLogo';

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: `
          radial-gradient(ellipse at 15% 20%, rgba(255, 120, 0, 0.18), rgba(255, 120, 0, 0) 32%),
          radial-gradient(ellipse at 85% 10%, rgba(164, 89, 209, 0.14), rgba(164, 89, 209, 0) 28%),
          linear-gradient(135deg, rgba(8, 8, 12, 0.95) 0%, rgba(12, 12, 18, 0.9) 45%, rgba(6, 6, 10, 0.96) 100%)
        `,
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: '100%' }}>
        <IsometricCubeIcon sx={{ fontSize: { xs: 60, md: 80 }, color: 'primary.main', mb: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 2 }}>
          <MalBoxLogo fontSize={{ xs: '2.4rem', md: '3rem' }} />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.4rem' },
              background: 'linear-gradient(135deg, #FF7800, #FFA040)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Architecture
          </Typography>
        </Box>

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
