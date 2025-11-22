import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';

const techStack = [
  {
    category: 'Frontend',
    color: '#2196F3',
    technologies: [
      { name: 'React 18.2', description: 'UI framework' },
      { name: 'Vite 5.0', description: 'Build tool' },
      { name: 'Material-UI 5.14', description: 'Component library' },
      { name: 'Zustand 4.5', description: 'State management' },
      { name: 'Axios', description: 'HTTP client' }
    ]
  },
  {
    category: 'Backend',
    color: '#FF9800',
    technologies: [
      { name: 'FastAPI', description: 'Python web framework' },
      { name: 'Python 3.11', description: 'Runtime' },
      { name: 'Dramatiq', description: 'Task queue' },
      { name: 'SQLAlchemy', description: 'ORM' },
      { name: 'Pydantic', description: 'Data validation' }
    ]
  },
  {
    category: 'Databases',
    color: '#4CAF50',
    technologies: [
      { name: 'MongoDB 7', description: 'Document store for reports' },
      { name: 'PostgreSQL 16', description: 'Plugin registry & config' },
      { name: 'MinIO', description: 'S3-compatible object storage' }
    ]
  },
  {
    category: 'Infrastructure',
    color: '#9C27B0',
    technologies: [
      { name: 'Docker', description: 'Containerization' },
      { name: 'Docker Compose', description: 'Orchestration' },
      { name: 'RabbitMQ 3.13', description: 'Message broker' },
      { name: 'Nginx', description: 'Reverse proxy' }
    ]
  },
  {
    category: 'Analysis Tools',
    color: '#F44336',
    technologies: [
      { name: 'YARA', description: '13,000+ malware rules' },
      { name: 'CAPA', description: 'Capability detection' },
      { name: 'Qiling Framework', description: 'Binary emulation' },
      { name: 'VirusTotal API', description: 'Threat intelligence' },
      { name: 'python-magic', description: 'File type detection' },
      { name: 'pefile', description: 'PE file analysis' }
    ]
  },
  {
    category: 'DevOps',
    color: '#00BCD4',
    technologies: [
      { name: 'Click', description: 'CLI framework' },
      { name: 'Rich', description: 'Terminal UI' },
      { name: 'Vercel', description: 'Frontend deployment' },
      { name: 'GitHub', description: 'Version control' }
    ]
  }
];

export default function TechStackSection() {
  return (
    <Box id="techstack" sx={{ mb: 8, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Tech Stack
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
        MalBox is built with modern, battle-tested technologies for performance, scalability, and developer experience.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>
        {techStack.map((stack, idx) => (
          <Box key={idx} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)' } }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                bgcolor: `${stack.color}08`,
                border: '2px solid',
                borderColor: stack.color,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 24px ${stack.color}40`
                }
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  color: stack.color,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                {stack.category}
                <Chip
                  label={stack.technologies.length}
                  size="small"
                  sx={{
                    bgcolor: stack.color,
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.7rem'
                  }}
                />
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {stack.technologies.map((tech, techIdx) => (
                  <Box
                    key={techIdx}
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      gap: { xs: 0.5, sm: 0 },
                      p: 1.5,
                      bgcolor: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: stack.color,
                        bgcolor: `${stack.color}10`
                      }
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        fontSize: '0.95rem'
                      }}
                    >
                      {tech.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.8rem',
                        fontStyle: 'italic'
                      }}
                    >
                      {tech.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>

      {/* Architecture Highlights */}
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 3,
          bgcolor: 'rgba(255, 120, 0, 0.05)',
          border: '1px solid',
          borderColor: 'primary.main',
          borderRadius: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
          Why These Technologies?
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 8px)' } }}>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 1 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>FastAPI + React:</Box> Modern, high-performance stack with excellent developer experience and type safety.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 1 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>MongoDB + PostgreSQL:</Box> Best of both worlds - document flexibility for reports, relational integrity for config.
            </Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 8px)' } }}>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 1 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>RabbitMQ + Dramatiq:</Box> Robust message-driven architecture enables true horizontal scalability.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 1 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>Docker Compose:</Box> Simple orchestration for development and production deployments.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
