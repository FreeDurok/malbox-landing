import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import AssessmentIcon from '@mui/icons-material/Assessment';

const flowSteps = [
  {
    icon: UploadFileIcon,
    title: 'File Upload',
    description: 'User uploads sample via web UI (React frontend)',
    details: 'Supports multiple file formats, archives (ZIP, 7z), and encrypted containers',
    color: '#2196F3'
  },
  {
    icon: SettingsIcon,
    title: 'Ingestion & Queuing',
    description: 'Backend extracts archives, detects file types, enqueues tasks',
    details: 'Ingestor worker stores samples in MinIO, publishes tasks to RabbitMQ queues',
    color: '#FF9800'
  },
  {
    icon: SettingsIcon,
    title: 'Parallel Analysis',
    description: 'Plugin workers consume tasks from their queues in parallel',
    details: 'Each plugin analyzes independently: YARA, Strings, Email, Qiling, VirusTotal, etc.',
    color: '#9C27B0'
  },
  {
    icon: StorageIcon,
    title: 'Results Aggregation',
    description: 'Results Collector aggregates plugin outputs',
    details: 'Combines all plugin results into a unified report stored in MongoDB',
    color: '#4CAF50'
  },
  {
    icon: AssessmentIcon,
    title: 'Report Display',
    description: 'Frontend fetches and visualizes the complete report',
    details: 'Plugin-specific visualizers render results with real-time SSE updates',
    color: '#F44336'
  }
];

export default function DataFlowSection() {
  return (
    <Box id="dataflow" sx={{ mb: 8, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Data Flow
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
        From sample upload to final report, here's how data flows through MalBox:
      </Typography>

      {/* Visual Flow */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 4 },
          mb: 4,
          bgcolor: 'rgba(18, 18, 18, 0.3)',
          border: '2px solid',
          borderColor: 'divider',
          borderRadius: 3
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {flowSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === flowSteps.length - 1;

            return (
              <Box key={idx}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 3,
                    position: 'relative',
                    pb: isLast ? 0 : 4
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: { xs: 50, md: 60 },
                      height: { xs: 50, md: 60 },
                      borderRadius: '50%',
                      bgcolor: `${step.color}20`,
                      border: '3px solid',
                      borderColor: step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    <Icon sx={{ fontSize: 32, color: step.color }} />
                  </Box>

                  {/* Content */}
                  <Box sx={{ flexGrow: 1, pt: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Typography
                        sx={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: step.color,
                          fontFamily: 'monospace'
                        }}
                      >
                        {idx + 1}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: step.color }}>
                        {step.title}
                      </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ mb: 1, color: 'text.primary' }}>
                      {step.description}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      {step.details}
                    </Typography>
                  </Box>
                </Box>

                {/* Connector Line */}
                {!isLast && (
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 29,
                      width: 2,
                      height: 60,
                      bgcolor: step.color,
                      opacity: 0.3,
                      mt: -4,
                      mb: 4
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </Paper>

      {/* Code Example */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
          Example: Queue Naming Convention
        </Typography>

        <Box
          component="pre"
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            p: { xs: 1.5, md: 2 },
            borderRadius: 1,
            overflow: 'auto',
            overflowX: 'auto',
            fontSize: { xs: '0.75rem', md: '0.85rem' },
            lineHeight: 1.6,
            color: '#A9B7C6'
          }}
        >
          <Box component="code">
            {`# RabbitMQ Queue Names
{category}.{plugin-id}

# Examples:
static.yara              → YARA pattern matching
static.strings           → String extraction
static.email-analyzer    → Email analysis
dynamic.windows-emulation → Behavior emulation
third-party.virustotal   → VirusTotal scanning
core.results             → Results aggregation

# Each plugin subscribes to its queue and processes tasks independently`}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
