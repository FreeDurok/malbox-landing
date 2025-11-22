import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import QueueIcon from '@mui/icons-material/Queue';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
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
    icon: QueueIcon,
    title: 'Ingestion & Queuing',
    description: 'Backend extracts archives, detects file types, enqueues tasks',
    details: 'Ingestor worker stores samples in MinIO, publishes tasks to RabbitMQ queues',
    color: '#9C27B0'
  },
  {
    icon: AccountTreeIcon,
    title: 'Parallel Analysis',
    description: 'Plugin workers consume tasks from their queues in parallel',
    details: 'Each plugin analyzes independently: YARA, Strings, Email, Qiling, VirusTotal, etc.',
    color: '#FF9800'
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
    <Box id="dataflow" sx={{ mb: 10, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: '#FFFFFF',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Data Flow
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
        From sample upload to final report, here's how data flows through MalBox:
      </Typography>

      {/* Visual Flow - Card Style */}
      <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }}>
        {flowSteps.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === flowSteps.length - 1;
          const isEven = idx % 2 === 0;

          return (
            <React.Fragment key={idx}>
              {/* Step Card Container */}
              <Box
                sx={{
                  mb: isLast ? 0 : 1.5,
                  position: 'relative',
                  display: 'flex',
                  justifyContent: isEven ? 'flex-start' : 'flex-end'
                }}
              >

              {/* Step Card */}
              <Paper
                elevation={0}
                sx={{
                  width: { xs: '100%', md: '75%' },
                  p: 3,
                  bgcolor: `${step.color}10`,
                  border: '2px solid',
                  borderColor: step.color,
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 30px ${step.color}40`,
                    borderColor: step.color,
                    bgcolor: `${step.color}18`
                  }
                }}
              >
                {/* Step Number Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    left: isEven ? 20 : 'auto',
                    right: isEven ? 'auto' : 20,
                    width: 50,
                    height: 50,
                    borderRadius: '12px',
                    bgcolor: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 20px ${step.color}60`,
                    border: '3px solid',
                    borderColor: 'background.default',
                    zIndex: 1
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#fff',
                      fontFamily: 'monospace'
                    }}
                  >
                    {idx + 1}
                  </Typography>
                </Box>

                {/* Icon Floating */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: isEven ? 20 : 'auto',
                    left: isEven ? 'auto' : 20,
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'background.default',
                    border: '3px solid',
                    borderColor: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 30px ${step.color}50`,
                    zIndex: 1
                  }}
                >
                  <Icon sx={{ fontSize: 32, color: step.color }} />
                </Box>

                {/* Content */}
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: step.color,
                      mb: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    {step.title}
                    <Box
                      sx={{
                        flexGrow: 1,
                        height: 2,
                        bgcolor: step.color,
                        opacity: 0.3,
                        borderRadius: 1
                      }}
                    />
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1.5,
                      color: 'text.primary',
                      fontWeight: 500
                    }}
                  >
                    {step.description}
                  </Typography>

                  <Box
                    sx={{
                      pl: 2,
                      borderLeft: '3px solid',
                      borderColor: `${step.color}40`
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontStyle: 'italic', lineHeight: 1.6 }}
                    >
                      {step.details}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
              </Box>

              {/* Connection Dots - Separate Element */}
              {!isLast && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    py: 1,
                    mb: 1.5
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: step.color,
                        opacity: 0.7,
                        boxShadow: `0 0 10px ${step.color}60`
                      }}
                    />
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: `linear-gradient(180deg, ${step.color}, ${flowSteps[idx + 1].color})`,
                        opacity: 0.6
                      }}
                    />
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: flowSteps[idx + 1].color,
                        opacity: 0.7,
                        boxShadow: `0 0 10px ${flowSteps[idx + 1].color}60`
                      }}
                    />
                  </Box>
                </Box>
              )}
            </React.Fragment>
          );
        })}
      </Box>

    </Box>
  );
}
