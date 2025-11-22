import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import MalBoxLogo from '../../components/common/MalBoxLogo';

import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ArchitectureSection from './components/ArchitectureSection';
import PluginSystemSection from './components/PluginSystemSection';
import DataFlowSection from './components/DataFlowSection';
import TechStackSection from './components/TechStackSection';
import GettingStartedSection from './components/GettingStartedSection';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'plugins', label: 'Plugin System' },
  { id: 'dataflow', label: 'Data Flow' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'getting-started', label: 'Getting Started' }
];

export default function DocsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setDrawerOpen(false);
    }
  };

  const NavContent = () => (
    <List>
      {sections.map((section) => (
        <ListItem key={section.id} disablePadding>
          <ListItemButton
            onClick={() => scrollToSection(section.id)}
            sx={{
              '&:hover': {
                bgcolor: 'rgba(255, 120, 0, 0.1)',
                borderLeft: '3px solid',
                borderColor: 'primary.main'
              },
              transition: 'all 0.2s ease'
            }}
          >
            <ListItemText
              primary={section.label}
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Fixed AppBar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'rgba(18, 18, 18, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate('/')}
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <MalBoxLogo fontSize="1.5rem" />
            <Box
              sx={{
                ml: 2,
                px: 1.5,
                py: 0.5,
                bgcolor: 'rgba(255, 120, 0, 0.1)',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'primary.main'
              }}
            >
              <Box component="span" sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'primary.main' }}>
                Documentation
              </Box>
            </Box>
          </Box>

          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            bgcolor: 'background.default',
            borderLeft: '1px solid',
            borderColor: 'divider'
          }
        }}
      >
        <NavContent />
      </Drawer>

      {/* Main Content */}
      <Box sx={{ display: 'flex', pt: '64px' }}>
        {/* Desktop Sidebar */}
        {!isMobile && (
          <Box
            sx={{
              width: 250,
              flexShrink: 0,
              position: 'fixed',
              height: 'calc(100vh - 64px)',
              overflowY: 'auto',
              borderRight: '1px solid',
              borderColor: 'divider',
              bgcolor: 'rgba(18, 18, 18, 0.5)'
            }}
          >
            <NavContent />
          </Box>
        )}

        {/* Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            ml: isMobile ? 0 : '250px',
            minHeight: 'calc(100vh - 64px)',
            width: '100%'
          }}
        >
          <HeroSection />

          <Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, sm: 3, md: 4 }, maxWidth: { sm: '90%', md: '85%', lg: '75%' }, mx: { sm: 'auto' } }}>
            <OverviewSection />
            <ArchitectureSection />
            <PluginSystemSection />
            <DataFlowSection />
            <TechStackSection />
            <GettingStartedSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
