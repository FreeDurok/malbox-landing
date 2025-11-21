import React from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import IsometricCubeIcon from '../../../components/icons/IsometricCubeIcon';
import ConstructionIcon from '@mui/icons-material/Construction';
import MalBoxLogo from '../../../components/common/MalBoxLogo';

export default function LoginCard({ onEnter }) {
  return (
    <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
      <Paper
        elevation={8}
        sx={{
          p: { xs: 3, sm: 4, md: 6 },
          borderRadius: { xs: 2, sm: 3, md: 4 },
          bgcolor: 'rgba(18, 18, 18, 0.1)',
          backdropFilter: 'blur(10px)',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          textAlign: 'center'
        }}
      >
        {/* Logo - static, no animation */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 2, sm: 2, md: 2 },
            mt: { xs: 1, sm: 1.5, md: 2 }
          }}
        >
          <IsometricCubeIcon sx={{ fontSize: { xs: 70, sm: 80, md: 90 }, color: 'primary.main' }} />
        </Box>

        {/* Title - PornHub style */}
        <Box sx={{ mb: 2 }}>
          <MalBoxLogo fontSize={{ xs: '2.5rem', sm: '3rem' }} />
        </Box>

        {/* Subtitle with emphasis on modularity */}
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            mb: 1,
            fontWeight: 400,
            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' }
          }}
        >
          Advanced Malware Analysis Platform
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: { xs: 3, sm: 3.5, md: 4 },
            color: 'primary.light',
            fontWeight: 500,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
          }}
        >
          Plugin-based • Modular Architecture • Extensible
        </Typography>

        {/* Feature highlights */}
        <Box sx={{ mb: { xs: 3, sm: 3.5, md: 4 }, textAlign: 'left' }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' }
            }}
          >
            <Box
              component="span"
              sx={{
                width: { xs: 5, sm: 5.5, md: 6 },
                height: { xs: 5, sm: 5.5, md: 6 },
                bgcolor: 'primary.main',
                borderRadius: '50%'
              }}
            />
            Dynamic plugin system for custom analysis workflows
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' }
            }}
          >
            <Box
              component="span"
              sx={{
                width: { xs: 5, sm: 5.5, md: 6 },
                height: { xs: 5, sm: 5.5, md: 6 },
                bgcolor: 'secondary.main',
                borderRadius: '50%'
              }}
            />
            Real-time monitoring and task orchestration
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' }
            }}
          >
            <Box
              component="span"
              sx={{
                width: { xs: 5, sm: 5.5, md: 6 },
                height: { xs: 5, sm: 5.5, md: 6 },
                bgcolor: 'success.main',
                borderRadius: '50%'
              }}
            />
            Scalable architecture for enterprise deployments
          </Typography>
        </Box>

        {/* Enter button */}
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={onEnter}
          startIcon={<ConstructionIcon />}
          sx={{
            py: { xs: 1.2, sm: 1.4, md: 1.5 },
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
            fontWeight: 600,
            borderRadius: { xs: 1.5, sm: 1.75, md: 2 },
            textTransform: 'none',
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            '&:hover': {
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
              transform: 'translateY(-2px)',
              boxShadow: (theme) => `0 8px 24px ${theme.palette.primary.main}60`
            },
            transition: 'all 0.3s ease'
          }}
        >
          Coming Soon - Under Development
        </Button>

        {/* Footer note */}
        <Typography
          variant="caption"
          color="text.disabled"
          sx={{
            display: 'block',
            mt: { xs: 2.5, sm: 2.75, md: 3 },
            fontSize: { xs: '0.7rem', sm: '0.72rem', md: '0.75rem' }
          }}
        >
          Modular malware analysis platform with extensible plugin architecture
        </Typography>
      </Paper>
    </Container>
  );
}
