import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import ParticleBackground from './components/ParticleBackground';
import LoginCard from './components/LoginCard';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default'
      }}
    >
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Login card */}
      <LoginCard onEnter={() => navigate('/docs')} />
    </Box>
  );
}
