import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * Custom Isometric 3D Cube Icon - minimalist style
 * Renders a large cube made up of smaller cubes in a 3x3x3 grid pattern
 */
export default function IsometricCubeIcon({ sx, ...props }) {
  return (
    <SvgIcon sx={sx} {...props} viewBox="0 0 100 100">
      {/* TOP FACE - 3x3 grid of small cubes - lightest */}
      <path d="M50 3 L65 11 L50 19 L35 11 Z" fill="currentColor" opacity="0.95" />
      <path d="M65 11 L80 19 L65 27 L50 19 Z" fill="currentColor" opacity="0.9" />
      <path d="M80 19 L95 27 L80 35 L65 27 Z" fill="currentColor" opacity="0.95" />

      <path d="M35 11 L50 19 L35 27 L20 19 Z" fill="currentColor" opacity="0.9" />
      <path d="M50 19 L65 27 L50 35 L35 27 Z" fill="currentColor" opacity="0.85" />
      <path d="M65 27 L80 35 L65 43 L50 35 Z" fill="currentColor" opacity="0.9" />

      <path d="M20 19 L35 27 L20 35 L5 27 Z" fill="currentColor" opacity="0.95" />
      <path d="M35 27 L50 35 L35 43 L20 35 Z" fill="currentColor" opacity="0.9" />
      <path d="M50 35 L65 43 L50 51 L35 43 Z" fill="currentColor" opacity="0.95" />

      {/* LEFT FACE - 3x3 grid - darkest */}
      <path d="M5 27 L20 35 L20 50 L5 42 Z" fill="currentColor" opacity="0.5" />
      <path d="M20 35 L35 43 L35 58 L20 50 Z" fill="currentColor" opacity="0.55" />
      <path d="M35 43 L50 51 L50 66 L35 58 Z" fill="currentColor" opacity="0.5" />

      <path d="M5 42 L20 50 L20 65 L5 57 Z" fill="currentColor" opacity="0.45" />
      <path d="M20 50 L35 58 L35 73 L20 65 Z" fill="currentColor" opacity="0.5" />
      <path d="M35 58 L50 66 L50 81 L35 73 Z" fill="currentColor" opacity="0.45" />

      <path d="M5 57 L20 65 L20 80 L5 72 Z" fill="currentColor" opacity="0.5" />
      <path d="M20 65 L35 73 L35 88 L20 80 Z" fill="currentColor" opacity="0.55" />
      <path d="M35 73 L50 81 L50 96 L35 88 Z" fill="currentColor" opacity="0.5" />

      {/* RIGHT FACE - 3x3 grid - medium */}
      <path d="M50 51 L65 43 L65 58 L50 66 Z" fill="currentColor" opacity="0.7" />
      <path d="M65 43 L80 35 L80 50 L65 58 Z" fill="currentColor" opacity="0.75" />
      <path d="M80 35 L95 27 L95 42 L80 50 Z" fill="currentColor" opacity="0.7" />

      <path d="M50 66 L65 58 L65 73 L50 81 Z" fill="currentColor" opacity="0.65" />
      <path d="M65 58 L80 50 L80 65 L65 73 Z" fill="currentColor" opacity="0.7" />
      <path d="M80 50 L95 42 L95 57 L80 65 Z" fill="currentColor" opacity="0.65" />

      <path d="M50 81 L65 73 L65 88 L50 96 Z" fill="currentColor" opacity="0.7" />
      <path d="M65 73 L80 65 L80 80 L65 88 Z" fill="currentColor" opacity="0.75" />
      <path d="M80 65 L95 57 L95 72 L80 80 Z" fill="currentColor" opacity="0.7" />

      {/* Minimal grid lines - thin and subtle */}
      {/* Vertical lines on top face */}
      <path
        d="M35 11 L35 43 M65 11 L65 43"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
        fill="none"
      />
      {/* Horizontal lines on top face */}
      <path
        d="M20 19 L80 35 M5 27 L95 27"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
        fill="none"
      />

      {/* Vertical lines on left face */}
      <path
        d="M20 35 L20 80 M35 43 L35 88"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
        fill="none"
      />
      {/* Horizontal lines on left face */}
      <path
        d="M5 42 L50 66 M5 57 L50 81"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
        fill="none"
      />

      {/* Vertical lines on right face */}
      <path
        d="M65 43 L65 88 M80 35 L80 80"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
        fill="none"
      />
      {/* Horizontal lines on right face */}
      <path
        d="M95 42 L50 66 M95 57 L50 81"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
        fill="none"
      />

      {/* Main edges for outer cube - clean and minimal */}
      <path
        d="M50 3 L95 27 L50 51 L5 27 Z M5 27 L5 72 L50 96 M50 96 L95 72 L95 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </SvgIcon>
  );
}
