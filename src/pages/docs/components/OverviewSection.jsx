import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import ExtensionIcon from '@mui/icons-material/Extension';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const features = [
  {
    icon: ExtensionIcon,
    title: 'Plugin-Based',
    description: 'Extensible architecture with official, community, and third-party plugins',
    color: '#FF7800'
  },
  {
    icon: SpeedIcon,
    title: 'Scalable',
    description: 'Message-driven microservices architecture for parallel analysis',
    color: '#4CAF50'
  },
  {
    icon: CloudQueueIcon,
    title: 'Containerized',
    description: 'Docker-based deployment; orchestrate with Docker Compose or Kubernetes',
    color: '#2196F3'
  },
  {
    icon: HubIcon,
    title: 'Message-Driven',
    description: 'RabbitMQ-backed queues keep services decoupled and resilient',
    color: '#9C27B0'
  }
];

export default function OverviewSection() {
  return (
    <Box id="overview" sx={{ mb: 10, pb: 2, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: '#FFFFFF',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Overview
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

      <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
        MalBox is a lightweight, experimental malware analysis sandbox platform designed as a{' '}
        <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
          modular, containerized, and extensible system
        </Box>
        . It follows a distributed microservices architecture for performing automated malware analysis using Docker containers orchestrated with Docker Compose or Kubernetes.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3.5, md: 3 },
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          alignItems: 'stretch',
          mt: 2,
          mb: 2
        }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 2.5,
                minHeight: 0,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                bgcolor: 'rgba(18, 18, 18, 0.3)',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '@media (hover: hover)': {
                  '&:hover': {
                    borderColor: feature.color,
                    boxShadow: `0 8px 24px ${feature.color}30`
                  }
                }
              }}
            >
              <Icon sx={{ fontSize: 48, color: feature.color, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: feature.color }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {feature.description}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}
