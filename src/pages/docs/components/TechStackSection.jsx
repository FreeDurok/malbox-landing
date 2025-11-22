import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import ExtensionIcon from '@mui/icons-material/Extension';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DnsIcon from '@mui/icons-material/Dns';

const techStack = [
  {
    category: 'Frontend',
    icon: CodeIcon,
    color: '#2196F3',
    technologies: ['React', 'Vite', 'Material-UI', 'Zustand'],
    badge: 'SPA'
  },
  {
    category: 'Backend',
    icon: DnsIcon,
    color: '#FF7800',
    technologies: ['FastAPI', 'Python 3.11', 'Dramatiq', 'SQLAlchemy'],
    badge: 'REST API'
  },
  {
    category: 'Storage',
    icon: StorageIcon,
    color: '#4CAF50',
    technologies: ['MongoDB', 'PostgreSQL', 'MinIO'],
    badge: 'Multi-DB'
  },
  {
    category: 'Infrastructure',
    icon: CloudIcon,
    color: '#9C27B0',
    technologies: ['Docker', 'Kubernetes', 'RabbitMQ', 'Nginx'],
    badge: 'Cloud-Native'
  },
  {
    category: 'Plugins',
    icon: ExtensionIcon,
    color: '#F59E0B',
    technologies: ['YARA', 'CAPA', 'Qiling', 'VirusTotal'],
    badge: 'Extensible'
  }
];

export default function TechStackSection() {
  return (
    <Box id="techstack" sx={{ mb: 10, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: '#FFFFFF',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Tech Stack
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
        Modern stack powering high-performance malware analysis
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {techStack.map((stack, idx) => {
          const Icon = stack.icon;
          return (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                p: 2.5,
                background: `linear-gradient(90deg, ${stack.color}12 0%, ${stack.color}05 50%, rgba(0,0,0,0.1) 100%)`,
                borderRadius: 2,
                border: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: `linear-gradient(90deg, ${stack.color}18 0%, ${stack.color}08 50%, rgba(0,0,0,0.15) 100%)`,
                  transform: 'translateX(8px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                {/* Icon */}
                <Box
                  sx={{
                    minWidth: 45,
                    width: 45,
                    height: 45,
                    borderRadius: 2,
                    bgcolor: stack.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 12px ${stack.color}50`
                  }}
                >
                  <Icon sx={{ fontSize: 26, color: '#fff' }} />
                </Box>

                {/* Content */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: stack.color,
                        fontSize: '1.15rem'
                      }}
                    >
                      {stack.category}
                    </Typography>
                    {stack.badge && (
                      <Chip
                        icon={stack.badge === 'Extensible' ? <AllInclusiveIcon sx={{ fontSize: 14 }} /> : undefined}
                        label={stack.badge}
                        size="small"
                        sx={{
                          bgcolor: `${stack.color}25`,
                          color: stack.color,
                          fontWeight: 600,
                          fontSize: '0.65rem',
                          height: 22,
                          border: '1px solid',
                          borderColor: `${stack.color}60`,
                          '& .MuiChip-icon': {
                            color: stack.color
                          }
                        }}
                      />
                    )}
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {stack.technologies.map((tech, techIdx) => (
                      <Box
                        key={techIdx}
                        sx={{
                          px: 1.5,
                          py: 0.4,
                          bgcolor: 'rgba(0, 0, 0, 0.3)',
                          borderRadius: 1,
                          border: '1px solid',
                          borderColor: `${stack.color}30`,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: `${stack.color}20`,
                            borderColor: stack.color
                          }
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            color: 'text.primary',
                            fontSize: '0.85rem'
                          }}
                        >
                          {tech}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}
