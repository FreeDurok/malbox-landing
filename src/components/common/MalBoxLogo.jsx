import React from 'react';
import { Box } from '@mui/material';

/**
 * MalBox Logo component - PornHub style branding
 *
 * @param {Object} props
 * @param {string|Object} props.fontSize - Font size (can be responsive object like { xs: '2rem', sm: '3rem' })
 * @param {boolean} props.clickable - Whether the logo should be clickable
 * @param {function} props.onClick - Click handler
 */
export default function MalBoxLogo({ fontSize = '2rem', clickable = false, onClick }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontFamily: 'inherit',
        fontWeight: 700,
        fontSize: fontSize,
        letterSpacing: '-0.02em',
        lineHeight: 1,
        cursor: clickable ? 'pointer' : 'default',
        transition: clickable ? 'transform 0.2s' : 'none',
        '&:hover': clickable ? {
          transform: 'scale(1.02)'
        } : {}
      }}
      onClick={onClick}
    >
      {/* "Mal" part - white text */}
      <Box
        component="span"
        sx={{
          color: '#FFFFFF',
          fontWeight: 700,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          lineHeight: 1
        }}
      >
        Mal
      </Box>

      {/* "Box" part - black text on orange background */}
      <Box
        component="span"
        sx={{
          color: '#000000',
          bgcolor: 'primary.main',
          px: 0.5,
          py: 0.1,
          borderRadius: 0.4,
          fontWeight: 700,
          ml: 0.5,
          lineHeight: 1,
          display: 'inline-block'
        }}
      >
        Box
      </Box>
    </Box>
  );
}
