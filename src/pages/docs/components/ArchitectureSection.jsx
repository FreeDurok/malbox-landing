import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ArchitectureSection() {
  return (
    <Box id="architecture" sx={{ mb: 10, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: '#FFFFFF',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Architecture
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
        MalBox follows a{' '}
        <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
          microservices architecture
        </Box>
        {' '}with independent containerized services communicating via message queues.
      </Typography>

      {/* Architecture Diagram */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 1, sm: 2, md: 4 },
          bgcolor: 'rgba(18, 18, 18, 0.3)',
          border: '2px solid',
          borderColor: 'divider',
          borderRadius: 3,
          mb: 4
        }}
      >
        <ArchitectureDiagram />
      </Paper>

      {/* Architecture Principles */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, rgba(255, 120, 0, 0.15) 0%, rgba(255, 120, 0, 0.05) 100%)',
            borderRadius: 2,
            border: 'none'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
            Modular Design
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Each component runs as an independent Docker service. Plugins are auto-discovered from the filesystem and registered in PostgreSQL. Add new analysis capabilities by simply creating a new plugin directory with a Dockerfile and worker code.
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(76, 175, 80, 0.05) 100%)',
            borderRadius: 2,
            border: 'none'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'success.main' }}>
            Message-Driven
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            RabbitMQ enables decoupled, asynchronous communication. Each plugin subscribes to its own queue (e.g., static.yara, dynamic.windows-emulation). Results are aggregated by the Results Collector and stored in MongoDB.
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(33, 150, 243, 0.05) 100%)',
            borderRadius: 2,
            border: 'none'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'info.main' }}>
            Real-Time Updates
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Server-Sent Events (SSE) provide real-time analysis progress updates to the frontend. Users see live status changes as plugins complete their tasks, without polling.
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.15) 0%, rgba(156, 39, 176, 0.05) 100%)',
            borderRadius: 2,
            border: 'none'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
            Horizontal Scalability
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Scale analysis capacity by increasing worker replicas. Multiple instances of the same plugin can process tasks in parallel from the same queue.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
