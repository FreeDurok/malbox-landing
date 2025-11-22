import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
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
    description: 'Docker-based deployment with orchestration via Docker Compose',
    color: '#2196F3'
  },
  {
    icon: SecurityIcon,
    title: 'Multi-Engine',
    description: 'YARA, CAPA, VirusTotal, Qiling and more analysis engines',
    color: '#9C27B0'
  }
];

export default function OverviewSection() {
  return (
    <Box id="overview" sx={{ mb: 8, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Overview
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
        MalBox is a lightweight, experimental malware analysis sandbox platform designed as a{' '}
        <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
          modular, containerized, and extensible system
        </Box>
        . It follows a distributed microservices architecture for performing automated malware analysis using Docker containers orchestrated with Docker Compose.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 }, mb: 2 }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', md: '1 1 calc(50% - 12px)', lg: '1 1 calc(25% - 18px)' } }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'rgba(18, 18, 18, 0.3)',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: feature.color,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${feature.color}30`
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
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
