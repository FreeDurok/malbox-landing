import React from 'react';
import { Box, Typography, Paper, Chip, Grid } from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GroupsIcon from '@mui/icons-material/Groups';

// Color mapping matching MalBox frontend
const CATEGORY_COLORS = {
  static: '#ff6f00',      // primary - orange
  dynamic: '#f59e0b',     // warning - amber/yellow-orange
  'third-party': '#42a5f5' // info - blue
};

const TRUST_LEVELS = [
  {
    title: 'Official',
    icon: ExtensionIcon,
    color: '#FF9800',
    description: 'Shipped and maintained by the MalBox core team.'
  },
  {
    title: 'Community',
    icon: GroupsIcon,
    color: '#4CAF50',
    description: 'Marketplace-ready lane; currently populated by MalBox to show structure.'
  }
];

const pluginInventory = [
  {
    name: 'YARA',
    trust: 'Official',
    category: 'Static',
    categoryColor: CATEGORY_COLORS.static,
    features: ['13,000+ rules from YARA-Forge', 'Pattern matching', 'Multi-source integration']
  },
  {
    name: 'Strings & IOCs',
    trust: 'Official',
    category: 'Static',
    categoryColor: CATEGORY_COLORS.static,
    features: ['String extraction', 'Base64 decoding', 'Entropy analysis']
  },
  {
    name: 'Email Analyzer',
    trust: 'Official',
    category: 'Static',
    categoryColor: CATEGORY_COLORS.static,
    features: ['Phishing detection', '20+ DNSBL providers', 'SPF/DKIM/DMARC checks']
  },
  {
    name: 'PE Analyzer',
    trust: 'Official',
    category: 'Static',
    categoryColor: CATEGORY_COLORS.static,
    features: ['PE header inspection', 'Import/Export tables', 'Section analysis']
  },
  {
    name: 'CAPA',
    trust: 'Official',
    category: 'Static',
    categoryColor: CATEGORY_COLORS.static,
    features: ['Behavioral capabilities', 'ATT&CK mapping', 'Reverse engineering']
  },
  {
    name: 'Windows Emulation',
    trust: 'Official',
    category: 'Dynamic',
    categoryColor: CATEGORY_COLORS.dynamic,
    features: ['Qiling Framework', 'API hooking', 'Behavior monitoring']
  },
  {
    name: 'VirusTotal',
    trust: 'Official',
    category: 'Third-Party',
    categoryColor: CATEGORY_COLORS['third-party'],
    features: ['Multi-engine scanning', 'Hash lookup', 'Threat intelligence']
  },
  {
    name: 'Document Analyzer',
    trust: 'Community',
    category: 'Static',
    categoryColor: CATEGORY_COLORS.static,
    features: ['Office documents', 'Macro detection', 'Embedded objects']
  }
];

const extensionPoints = [
  {
    title: 'Backend Plugin',
    icon: SettingsOutlinedIcon,
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

const autoDiscoveryCard = {
  title: 'Auto-Discovery & Registration',
  icon: ManageSearchIcon,
  color: '#9C27B0',
  description: 'MalBox automatically discovers plugins from the filesystem on startup. Backend plugins register metadata (name, category, queue) into PostgreSQL. Frontend plugins are auto-loaded via the registry in plugins/index.js. Create the files and restart services to go live.'
};

const queueConventionSnippet = `# RabbitMQ Queue Names
{category}.{plugin-id}

# Examples:
static.yara               → YARA pattern matching
static.strings            → String extraction
static.email-analyzer     → Email analysis
dynamic.windows-emulation → Behavior emulation
third-party.virustotal    → VirusTotal scanning
core.results              → Results aggregation

# Each plugin subscribes to its queue and processes tasks independently`;

export default function PluginSystemSection() {
  return (
    <Box id="plugins" sx={{ mb: 10, scrollMarginTop: '80px' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: '#FFFFFF',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
      >
        Plugin System
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
        MalBox's plugin architecture allows{' '}
        <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
          unlimited extensibility
        </Box>
        . All current plugins are built by the MalBox team; the Official/Community split is paving the way for a future marketplace. Each plugin belongs to a trust level (Official or Community) and a technical category (today Static, Dynamic, or Third-Party, and extensible later). Plugins and metadata are auto-discovered from the filesystem.
      </Typography>

      {/* Trust Levels */}
      {TRUST_LEVELS.map((trust, idx) => {
        const Icon = trust.icon;
        const plugins = pluginInventory.filter((p) => p.trust === trust.title);
        return (
          <Box key={idx} sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Icon sx={{ fontSize: 32, color: trust.color }} />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, color: trust.color }}>
                  {trust.title} Plugins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {trust.description}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gap: { xs: 2, md: 2.5 },
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(auto-fit, minmax(280px, 1fr))'
                },
                alignItems: 'stretch',
                alignContent: 'start'
              }}
            >
              {plugins.map((plugin, pluginIdx) => (
                <Paper
                  key={pluginIdx}
                  elevation={0}
                  sx={{
                    p: 2.5,
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'rgba(18, 18, 18, 0.3)',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: trust.color,
                      boxShadow: `0 12px 26px ${trust.color}30`
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                      {plugin.name}
                    </Typography>
                    <Chip
                      label={plugin.category}
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
                            color: trust.color,
                            fontWeight: 'bold'
                          }
                        }}
                      >
                        {feature}
                      </Box>
                    ))}
                  </Box>
                </Paper>
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

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
          mb: 3
        }}>
          {extensionPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <Paper
                key={idx}
                elevation={0}
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${point.color}15 0%, ${point.color}05 100%)`,
                  borderRadius: 2,
                  border: 'none',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  {Icon ? <Icon sx={{ fontSize: 28, color: point.color }} /> : null}
                  <Typography variant="h6" sx={{ fontWeight: 600, color: point.color }}>
                    {point.title}
                  </Typography>
                </Box>

                <Box component="ol" sx={{ m: 0, pl: 2.5, flexGrow: 1 }}>
                  {point.steps.map((step, stepIdx) => (
                    <Box
                      component="li"
                      key={stepIdx}
                      sx={{
                        mb: 1.5,
                        fontSize: '0.9rem',
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        '&::marker': {
                          color: point.color,
                          fontWeight: 'bold'
                        }
                      }}
                    >
                      {step}
                    </Box>
                  ))}
                </Box>
              </Paper>
            );
          })}
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            background: `linear-gradient(135deg, ${autoDiscoveryCard.color}15 0%, ${autoDiscoveryCard.color}05 100%)`,
            borderRadius: 2,
            border: 'none'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            {autoDiscoveryCard.icon ? <autoDiscoveryCard.icon sx={{ fontSize: 28, color: autoDiscoveryCard.color }} /> : null}
            <Typography variant="h6" sx={{ fontWeight: 600, color: autoDiscoveryCard.color }}>
              {autoDiscoveryCard.title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2.5 }}>
            {autoDiscoveryCard.description}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: autoDiscoveryCard.color }}>
            Queue Naming Convention
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
              color: '#A9B7C6',
              m: 0
            }}
          >
            <Box component="code">
              {queueConventionSnippet}
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
