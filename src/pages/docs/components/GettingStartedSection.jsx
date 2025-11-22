import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function GettingStartedSection() {
  return (
    <Box id="getting-started" sx={{ mb: 8, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Getting Started
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Get MalBox running locally in minutes with our CLI tool.
      </Typography>

      {/* Quick Start */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          mb: 3,
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          border: '2px solid',
          borderColor: 'primary.main',
          borderRadius: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <RocketLaunchIcon sx={{ color: 'primary.main', fontSize: 28 }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
            Quick Start
          </Typography>
        </Box>

        <Box
          component="pre"
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            p: { xs: 1.5, md: 2.5 },
            borderRadius: 1,
            overflow: 'auto',
            overflowX: 'auto',
            fontSize: { xs: '0.75rem', md: '0.9rem' },
            lineHeight: 1.8,
            color: '#A9B7C6',
            mb: 0
          }}
        >
          <Box component="code">
            {`# Clone the repository
git clone https://github.com/FreeDurok/MalBox.git
cd MalBox

# Install the CLI tool
./install.sh

# Start all services
malbox dev start

# Check status
malbox status

# Access the platform
# Web UI:  http://localhost:3000
# API:     http://localhost:8080
# RabbitMQ: http://localhost:15672 (guest/guest)
# MinIO:   http://localhost:9001`}
          </Box>
        </Box>
      </Paper>

      {/* CLI Commands */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          mb: 3,
          bgcolor: 'rgba(18, 18, 18, 0.3)',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
          Common CLI Commands
        </Typography>

        <Box
          component="pre"
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            p: { xs: 1.5, md: 2.5 },
            borderRadius: 1,
            overflow: 'auto',
            overflowX: 'auto',
            fontSize: { xs: '0.75rem', md: '0.85rem' },
            lineHeight: 1.7,
            color: '#A9B7C6'
          }}
        >
          <Box component="code">
            {`# Development mode with hot reload
malbox dev start [service-names...]

# Production deployment
malbox up [service-names...]

# Stop all services
malbox down

# View service logs
malbox logs <service-name> -f

# List available plugins
malbox plugin list

# View plugin details
malbox plugin info <plugin-name>

# Setup/reconfigure environment
malbox setup`}
          </Box>
        </Box>
      </Paper>

      {/* Requirements */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          bgcolor: 'rgba(33, 150, 243, 0.05)',
          border: '1px solid',
          borderColor: 'info.main',
          borderRadius: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'info.main' }}>
          System Requirements
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' } }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, lineHeight: 1.6 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>Docker:</Box> 20.10+
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, lineHeight: 1.6 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>Docker Compose:</Box> 2.0+
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, lineHeight: 1.6 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>Python:</Box> 3.8+ (for CLI)
            </Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' } }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, lineHeight: 1.6 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>RAM:</Box> 4GB minimum, 8GB recommended
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, lineHeight: 1.6 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>Disk:</Box> 10GB+ free space
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, lineHeight: 1.6 }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>OS:</Box> Linux, macOS, Windows (WSL2)
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Next Steps */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          bgcolor: 'rgba(76, 175, 80, 0.05)',
          border: '1px solid',
          borderColor: 'success.main',
          borderRadius: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'success.main' }}>
          Next Steps
        </Typography>

        <Box component="ol" sx={{ m: 0, pl: 2.5 }}>
          <Box
            component="li"
            sx={{
              mb: 1,
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: 'success.main', fontWeight: 'bold' }
            }}
          >
            Upload a sample file via the web UI at <Box component="code" sx={{ bgcolor: 'rgba(0,0,0,0.3)', px: 0.5, borderRadius: 0.5 }}>http://localhost:3000</Box>
          </Box>
          <Box
            component="li"
            sx={{
              mb: 1,
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: 'success.main', fontWeight: 'bold' }
            }}
          >
            Select analysis plugins (YARA, Strings, Email, etc.)
          </Box>
          <Box
            component="li"
            sx={{
              mb: 1,
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: 'success.main', fontWeight: 'bold' }
            }}
          >
            Watch real-time analysis progress via Server-Sent Events
          </Box>
          <Box
            component="li"
            sx={{
              mb: 1,
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: 'success.main', fontWeight: 'bold' }
            }}
          >
            View the comprehensive report with plugin-specific visualizations
          </Box>
          <Box
            component="li"
            sx={{
              fontSize: '0.95rem',
              color: 'text.secondary',
              lineHeight: 1.7,
              '&::marker': { color: 'success.main', fontWeight: 'bold' }
            }}
          >
            Create custom plugins to extend analysis capabilities
          </Box>
        </Box>
      </Paper>

      {/* GitHub CTA */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<GitHubIcon />}
          href="https://github.com/FreeDurok/MalBox"
          target="_blank"
          sx={{
            py: 1.5,
            px: 4,
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: 2,
            textTransform: 'none',
            background: 'linear-gradient(135deg, #FF7800, #FFA040)',
            '&:hover': {
              background: 'linear-gradient(135deg, #FFA040, #FF7800)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(255, 120, 0, 0.4)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          View on GitHub
        </Button>

        <Typography variant="body2" color="text.disabled" sx={{ mt: 2 }}>
          Star the project if you find it useful!
        </Typography>
      </Box>
    </Box>
  );
}
