import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import CloudIcon from '@mui/icons-material/Cloud';

// Color mapping matching MalBox frontend
const CATEGORY_COLORS = {
  static: '#ff6f00',      // primary - orange
  dynamic: '#f59e0b',     // warning - amber/yellow-orange
  'third-party': '#42a5f5' // info - blue
};

const pluginCategories = [
  {
    title: 'Official Plugins',
    icon: ExtensionIcon,
    color: '#FF9800',
    description: 'Maintained by the MalBox core team',
    plugins: [
      {
        name: 'YARA',
        type: 'Static',
        categoryColor: CATEGORY_COLORS.static,
        features: ['13,000+ rules from YARA-Forge', 'Pattern matching', 'Multi-source integration']
      },
      {
        name: 'Strings & IOCs',
        type: 'Static',
        categoryColor: CATEGORY_COLORS.static,
        features: ['String extraction', 'Base64 decoding', 'Entropy analysis']
      },
      {
        name: 'Email Analyzer',
        type: 'Static',
        categoryColor: CATEGORY_COLORS.static,
        features: ['Phishing detection', '20+ DNSBL providers', 'SPF/DKIM/DMARC checks']
      },
      {
        name: 'PE Analyzer',
        type: 'Static',
        categoryColor: CATEGORY_COLORS.static,
        features: ['PE header inspection', 'Import/Export tables', 'Section analysis']
      },
      {
        name: 'CAPA',
        type: 'Static',
        categoryColor: CATEGORY_COLORS.static,
        features: ['Behavioral capabilities', 'ATT&CK mapping', 'Reverse engineering']
      },
      {
        name: 'Windows Emulation',
        type: 'Dynamic',
        categoryColor: CATEGORY_COLORS.dynamic,
        features: ['Qiling Framework', 'API hooking', 'Behavior monitoring']
      }
    ]
  },
  {
    title: 'Community Plugins',
    icon: GroupsIcon,
    color: '#4CAF50',
    description: 'Contributed by the community',
    plugins: [
      {
        name: 'Document Analyzer',
        type: 'Static',
        categoryColor: CATEGORY_COLORS.static,
        features: ['Office documents', 'Macro detection', 'Embedded objects']
      }
    ]
  },
  {
    title: 'Third-Party Integrations',
    icon: CloudIcon,
    color: '#42a5f5',
    description: 'External API integrations',
    plugins: [
      {
        name: 'VirusTotal',
        type: 'Third-Party',
        categoryColor: CATEGORY_COLORS['third-party'],
        features: ['Multi-engine scanning', 'Hash lookup', 'Threat intelligence']
      }
    ]
  }
];

const extensionPoints = [
  {
    title: 'Backend Plugin',
    icon: CodeIcon,
    color: '#FF7800',
    steps: [
      'Create directory: plugins/{category}/{subcategory}/{name}/',
      'Implement Dramatiq worker reading from RabbitMQ',
      'Add docker-compose.yaml (auto-discovered)',
      'Plugin auto-registers in PostgreSQL',
      'Report results to core.results queue'
    ]
  },
  {
    title: 'Frontend Plugin',
    icon: ExtensionIcon,
    color: '#2196F3',
    steps: [
      'Copy template: frontend/src/plugins/_PLUGIN_TEMPLATE',
      'Create visualization component',
      'Define metadata (id, name, matchers, category)',
      'Register in plugins/index.js',
      'One-line registration - auto-loaded'
    ]
  }
];

export default function PluginSystemSection() {
  return (
    <Box id="plugins" sx={{ mb: 8, scrollMarginTop: '80px' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Plugin System
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
        MalBox's plugin architecture allows{' '}
        <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
          unlimited extensibility
        </Box>
        . Plugins are categorized into three trust levels and auto-discovered from the filesystem.
      </Typography>

      {/* Plugin Categories */}
      {pluginCategories.map((category, idx) => {
        const Icon = category.icon;
        return (
          <Box key={idx} sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Icon sx={{ fontSize: 32, color: category.color }} />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, color: category.color }}>
                  {category.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, md: 2 } }}>
              {category.plugins.map((plugin, pluginIdx) => (
                <Box key={pluginIdx} sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)', md: '1 1 calc(50% - 8px)', lg: '1 1 calc(33.333% - 11px)' } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      height: '100%',
                      bgcolor: 'rgba(18, 18, 18, 0.3)',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: category.color,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 20px ${category.color}40`
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                        {plugin.name}
                      </Typography>
                      <Chip
                        label={plugin.type}
                        size="small"
                        sx={{
                          bgcolor: `${plugin.categoryColor}20`,
                          color: plugin.categoryColor,
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          border: `1px solid ${plugin.categoryColor}40`
                        }}
                      />
                    </Box>
                    <Box component="ul" sx={{ m: 0, pl: 2.5, listStyle: 'none' }}>
                      {plugin.features.map((feature, fIdx) => (
                        <Box
                          component="li"
                          key={fIdx}
                          sx={{
                            position: 'relative',
                            mb: 0.5,
                            fontSize: '0.85rem',
                            color: 'text.secondary',
                            '&:before': {
                              content: '"▸"',
                              position: 'absolute',
                              left: -16,
                              color: category.color,
                              fontWeight: 'bold'
                            }
                          }}
                        >
                          {feature}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Box>
        );
      })}

      {/* Extension Points */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
          How to Create a Plugin
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>
          {extensionPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <Box key={idx} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)' } }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, md: 3 },
                    height: '100%',
                    bgcolor: `${point.color}08`,
                    border: '2px solid',
                    borderColor: point.color,
                    borderRadius: 2
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Icon sx={{ fontSize: 28, color: point.color }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: point.color }}>
                      {point.title}
                    </Typography>
                  </Box>

                  <Box component="ol" sx={{ m: 0, pl: 2.5 }}>
                    {point.steps.map((step, stepIdx) => (
                      <Box
                        component="li"
                        key={stepIdx}
                        sx={{
                          mb: 1,
                          fontSize: '0.9rem',
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          '&::marker': {
                            color: point.color,
                            fontWeight: 'bold'
                          }
                        }}
                      >
                        <Box component="code" sx={{ bgcolor: 'rgba(0,0,0,0.3)', px: 0.5, borderRadius: 0.5, fontSize: '0.85rem' }}>
                          {step}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Plugin Discovery */}
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 3,
          bgcolor: 'rgba(156, 39, 176, 0.05)',
          border: '1px solid',
          borderColor: 'secondary.main',
          borderRadius: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
          Auto-Discovery & Registration
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          MalBox automatically discovers plugins from the filesystem on startup. Backend plugins are registered in PostgreSQL with their metadata (name, category, queue name). Frontend plugins are auto-loaded via a plugin registry in <Box component="code" sx={{ bgcolor: 'rgba(0,0,0,0.3)', px: 0.5, borderRadius: 0.5 }}>plugins/index.js</Box>. This makes plugin development incredibly fast - just create the files and restart the services.
        </Typography>
      </Paper>
    </Box>
  );
}
