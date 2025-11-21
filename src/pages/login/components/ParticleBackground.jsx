import { useEffect, useRef } from 'react';
import { useTheme } from '@mui/material';

export default function ParticleBackground() {
  const theme = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get theme colors and convert to RGB
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 255, g: 152, b: 0 }; // Fallback to orange
    }

    const primaryRgb = hexToRgb(theme.palette.primary.main);
    const secondaryRgb = hexToRgb(theme.palette.secondary.main);
    const warningRgb = hexToRgb(theme.palette.warning.main);

    const primaryRgbString = `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`;
    const secondaryRgbString = `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`;
    const warningRgbString = `${warningRgb.r}, ${warningRgb.g}, ${warningRgb.b}`;

    // Cubes and particles use primary, secondary, or warning colors randomly
    const colors = [primaryRgbString, secondaryRgbString, warningRgbString];

    // Hex characters for digital artifacts
    const hexChars = '0123456789ABCDEF'

    // Digital artifacts (glitch ghost particles)
    const digitalArtifacts = []

    // Grid properties for Matrix-style background
    const gridSize = 80; // Distance between grid lines
    const gridLines = {
      horizontal: [],
      vertical: []
    };

    // Initialize grid lines
    for (let x = 0; x < canvas.width; x += gridSize) {
      gridLines.vertical.push({
        x: x,
        pulseOffset: Math.random() * Math.PI * 2,
        activated: false,
        activationLife: 0
      });
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      gridLines.horizontal.push({
        y: y,
        pulseOffset: Math.random() * Math.PI * 2,
        activated: false,
        activationLife: 0
      });
    }

    // Connection lines between cubes
    const connectionLines = []

    // Explosive particle system with cube formations
    class Particle {
      constructor(cubeCenter, index, totalInCube, cubeIndex) {
        this.cubeCenter = cubeCenter;
        this.cubeIndex = cubeIndex;
        this.index = index;
        this.totalInCube = totalInCube;
        this.reset();
      }

      reset() {
        // More chaotic explosion - random angle with variation instead of uniform distribution
        const baseAngle = (this.index / this.totalInCube) * Math.PI * 2;
        const angleVariation = (Math.random() - 0.5) * 1.2; // +/- 1.2 radians (~70 degrees) variation
        const angle = baseAngle + angleVariation;

        // More varied explosion radius for chaotic spread
        this.explosionRadius = 80 + Math.random() * 100; // Wider range: 80-180px
        this.angle = angle;

        // Start from cube center - use absolute position
        this.x = this.cubeCenter.x;
        this.y = this.cubeCenter.y;
        this.startX = this.cubeCenter.x;
        this.startY = this.cubeCenter.y;

        // Varied velocity multiplier for non-uniform speeds - faster
        const speedMultiplier = 0.022 + Math.random() * 0.028; // Faster: 0.015-0.035 -> 0.022-0.05
        this.targetOffsetX = Math.cos(angle) * this.explosionRadius;
        this.targetOffsetY = Math.sin(angle) * this.explosionRadius;
        this.velocityX = this.targetOffsetX * speedMultiplier;
        this.velocityY = this.targetOffsetY * speedMultiplier;

        this.size = Math.random() * 4 + 2;
        this.opacity = 0;
        this.life = 0;
        this.maxLife = 70 + Math.random() * 35; // Faster lifecycle: 70-105 frames
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;

        // Trail effect
        this.trail = [];
        this.maxTrailLength = 8;
      }

      update(cubeIsFadingOut, cubeDead) {
        this.life++;

        // Store previous position for trail
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }

        // CRITICAL: If cube is fading or dead, skip lifecycle checks
        if (cubeIsFadingOut || cubeDead) {
          // Cube is dying or dead - particles just keep floating and fading
          if (this.life < 25) {
            // Still in explosion phase
            this.opacity = this.life / 25;
            this.x += this.velocityX * 1.5;
            this.y += this.velocityY * 1.5;
          } else {
            // Post-explosion - fade out gradually
            const fadeOutProgress = Math.min(1, this.life / 80); // Fade over 80 frames
            this.opacity = 0.9 * (1 - fadeOutProgress);
            this.y -= 0.5;
          }
          return; // Don't reset - particles will die with cube
        }

        // Normal lifecycle when cube is healthy
        if (this.life < 25) {
          // Explosion phase - more dramatic
          this.opacity = this.life / 25;
          this.x += this.velocityX * 1.5;
          this.y += this.velocityY * 1.5;
        } else if (this.life < this.maxLife - 30) {
          // Floating phase - straight up, no oscillation
          this.opacity = 0.9;
          this.y -= 0.5; // Constant upward drift
        } else {
          // Natural fade out at end of life - faster fade (30 frames)
          const fadeOutProgress = (this.life - (this.maxLife - 30)) / 30;
          this.opacity = 0.9 * (1 - fadeOutProgress); // Gradual fade from 0.9 to 0
          this.y -= 0.5; // Continue moving up while fading
        }

        // Reset particle when it reaches end of life (only when cube is healthy)
        if (this.life >= this.maxLife) {
          this.reset(); // Particle restarts its cycle
        }
      }

      draw() {
        // Skip if barely visible (optimization)
        if (this.opacity < 0.01) return;

        ctx.save();

        // Draw trail first
        this.trail.forEach((point, index) => {
          const trailOpacity = (index / this.trail.length) * point.opacity * 0.5;
          ctx.globalAlpha = trailOpacity;
          ctx.fillStyle = `rgba(${this.color}, 1)`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw main particle
        const x = this.x;
        const y = this.y;

        // MORE INTENSE glitch on particles during explosion phase
        const shouldGlitch = this.life < 40 && Math.random() < 0.15; // More frequent and longer

        ctx.globalAlpha = this.opacity;

        if (shouldGlitch) {
          // INTENSE Chromatic aberration with multiple layers
          const glitchOffset = (Math.random() - 0.5) * 8;
          const glitchOffset2 = (Math.random() - 0.5) * 6;

          // Red channel
          ctx.fillStyle = `rgba(255, 100, 100, ${this.opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(x + glitchOffset, y + glitchOffset2 * 0.5, this.size * 1.2, 0, Math.PI * 2);
          ctx.fill();

          // Blue channel
          ctx.fillStyle = `rgba(100, 150, 255, ${this.opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(x - glitchOffset, y - glitchOffset2 * 0.5, this.size * 1.2, 0, Math.PI * 2);
          ctx.fill();

          // Green channel for extra chaos
          ctx.fillStyle = `rgba(100, 255, 150, ${this.opacity * 0.6})`;
          ctx.beginPath();
          ctx.arc(x + glitchOffset2, y - glitchOffset, this.size * 1.1, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw particle with minimal glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 1.2);
        gradient.addColorStop(0, `rgba(${this.color}, 1)`);
        gradient.addColorStop(0.5, `rgba(${this.color}, 0.3)`);
        gradient.addColorStop(1, `rgba(${this.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, this.size * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Core particle - more defined
        ctx.fillStyle = `rgba(${this.color}, 1)`;
        ctx.beginPath();
        ctx.arc(x, y, this.size * 0.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Cube management
    const cubes = [];
    const particlesPerCube = 15;
    const maxCubes = 15;
    const cubeSize = 50;
    const minDistanceBetweenCubes = 250; // Minimum distance between cubes

    // Function to check if position is far enough from existing cubes
    function isPositionValid(x, y) {
      for (let cube of cubes) {
        const dx = cube.center.x - x;
        const dy = cube.center.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistanceBetweenCubes) {
          return false;
        }
      }
      return true;
    }

    // Function to create a new cube at random position
    function createCube() {
      const margin = 150;
      let x, y;
      let attempts = 0;
      const maxAttempts = 50;

      // Try to find a valid position that doesn't overlap
      do {
        x = margin + Math.random() * (canvas.width - margin * 2);
        y = margin + Math.random() * (canvas.height - margin * 2);
        attempts++;
      } while (!isPositionValid(x, y) && attempts < maxAttempts);

      // If we couldn't find a valid position after max attempts, use the last position anyway
      const colorIndex = Math.floor(Math.random() * colors.length);

      const cubeCenter = {
        x: x,
        y: y,
        baseX: x,
        baseY: y,
        moveAngle: Math.random() * Math.PI * 2,
        moveRadius: 80 + Math.random() * 120,
        orbitSpeed: (Math.random() - 0.5) * 0.012, // Faster: 0.008 -> 0.012
        floatSpeed: 0.018 + Math.random() * 0.018, // Faster: 0.012-0.024 -> 0.018-0.036
        driftX: (Math.random() - 0.5) * 0.9, // Faster: 0.6 -> 0.9
        driftY: (Math.random() - 0.5) * 0.9, // Faster: 0.6 -> 0.9
        rotationSpeed: 0.015 + Math.random() * 0.03, // Faster: 0.01-0.03 -> 0.015-0.045
        rotation: Math.random() * Math.PI * 2,
        color: colors[colorIndex]
      };

      const cubeParticles = [];
      for (let j = 0; j < particlesPerCube; j++) {
        cubeParticles.push(new Particle(cubeCenter, j, particlesPerCube, colorIndex));
      }

      // Each cube has completely random lifecycle timings - faster
      const fadeInDuration = 30 + Math.random() * 20; // Faster: 30-50 instead of 40-70
      const stableDuration = 50 + Math.random() * 100; // Faster: 50-150 instead of 60-180
      const explosionDuration = 120 + Math.random() * 80; // Faster: 120-200 instead of 150-250
      const fadeOutDuration = 40 + Math.random() * 20; // Faster: 40-60 instead of 50-80
      const particleGracePeriod = 50; // Faster grace period: 50 instead of 60

      const targetGlitchCount = 3 + Math.floor(Math.random() * 2); // 2 or 3 glitches
      const glitchTimes = [];

      // Calculate glitch times - distribute evenly across cube's visible lifetime
      const visibleLifetime = fadeInDuration + stableDuration + explosionDuration + fadeOutDuration;
      for (let i = 0; i < targetGlitchCount; i++) {
        // Distribute glitches evenly across lifetime with some randomness
        const segment = visibleLifetime / (targetGlitchCount + 1);
        const glitchTime = segment * (i + 1) + (Math.random() - 0.5) * segment * 0.4;
        glitchTimes.push(Math.floor(glitchTime));
      }

      return {
        center: cubeCenter,
        particles: cubeParticles,
        color: cubeCenter.color,
        lifetime: 0,
        fadeInEnd: fadeInDuration,
        explosionStart: fadeInDuration + stableDuration,
        fadeOutStart: fadeInDuration + stableDuration + explosionDuration,
        cubeDeathTime: fadeInDuration + stableDuration + explosionDuration + fadeOutDuration,
        maxLifetime: fadeInDuration + stableDuration + explosionDuration + fadeOutDuration + particleGracePeriod,
        opacity: 0,
        hasExploded: false,
        cubeDead: false,
        // Glitch properties - guaranteed 2-3 glitches per lifetime
        glitchActive: false,
        glitchDuration: 0,
        glitchCount: 0,
        targetGlitchCount: targetGlitchCount,
        glitchTimes: glitchTimes,
        glitchOffset: { x: 0, y: 0 },
        // Binary code strings that appear during explosion
        binaryStrings: []
      };
    }

    // Spawn timing
    let framesSinceLastSpawn = 0;
    const minSpawnInterval = 60;
    const maxSpawnInterval = 120;
    let nextSpawnIn = Math.floor(Math.random() * (maxSpawnInterval - minSpawnInterval) + minSpawnInterval);

    // Start with more cubes, staggered to explode soon
    const initialCubes = 8;
    for (let i = 0; i < initialCubes; i++) {
      const cube = createCube();
      // Stagger the initial cubes so they explode quickly but naturally
      // This ensures their positions are updated before explosion
      cube.lifetime = cube.fadeInEnd + Math.random() * 30; // Start just before explosion
      cubes.push(cube);
    }

    // Pre-computed vertices for cube (optimization)
    const baseVertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ];

    // Draw wireframe cube at center positions with color and glitch effect
    function drawCubeWireframe(center, size, rotation, opacity, color, glitchOffset = { x: 0, y: 0 }, glitchActive = false) {
      const halfSize = size / 2;

      // Cache trig calculations (major optimization)
      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);
      const rotation07 = rotation * 0.7;
      const cosR2 = Math.cos(rotation07);
      const sinR2 = Math.sin(rotation07);
      const halfSize0866 = halfSize * 0.866;
      const halfSize05 = halfSize * 0.5;

      const projected = new Array(8);
      for (let i = 0; i < 8; i++) {
        const [x, y, z] = baseVertices[i];
        const x1 = x * cosR - z * sinR;
        const z1 = x * sinR + z * cosR;
        const y1 = y * cosR2 - z1 * sinR2;
        const z2 = y * sinR2 + z1 * cosR2;

        projected[i] = {
          x: center.x + (x1 - y1) * halfSize0866,
          y: center.y + (x1 + y1 - z2 * 0.5) * halfSize05
        };
      }

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];

      ctx.save();

      // Holographic flickering effect - subtle opacity variation
      const hologramFlicker = opacity * (0.85 + Math.sin(frameCount * 0.1) * 0.15);

      // Glitch effect: draw chromatic aberration (RGB split) - MORE INTENSE
      if (glitchActive) {
        // Multiple offset layers for intense glitch
        const offsets = [
          { x: glitchOffset.x * 1.5, y: glitchOffset.y * 0.5, color: '255, 0, 0', opacity: 0.7 },
          { x: -glitchOffset.x * 1.5, y: -glitchOffset.y * 0.5, color: '0, 100, 255', opacity: 0.7 },
          { x: glitchOffset.y, y: glitchOffset.x, color: '0, 255, 100', opacity: 0.5 }
        ];

        offsets.forEach(offset => {
          ctx.shadowBlur = 12;
          ctx.shadowColor = `rgba(${offset.color}, 0.6)`;
          ctx.strokeStyle = `rgba(${offset.color}, ${opacity * offset.opacity})`;
          ctx.lineWidth = 2.5;
          edges.forEach(([start, end]) => {
            ctx.beginPath();
            ctx.moveTo(projected[start].x + offset.x, projected[start].y + offset.y);
            ctx.lineTo(projected[end].x + offset.x, projected[end].y + offset.y);
            ctx.stroke();
          });
        });

        // Random edge displacement for more chaos
        const randomEdges = [0, 3, 7].map(i => edges[i]);
        ctx.strokeStyle = `rgba(${color}, ${opacity * 0.8})`;
        ctx.lineWidth = 3;
        randomEdges.forEach(([start, end]) => {
          const displaceX = (Math.random() - 0.5) * 15;
          const displaceY = (Math.random() - 0.5) * 15;
          ctx.beginPath();
          ctx.moveTo(projected[start].x + displaceX, projected[start].y + displaceY);
          ctx.lineTo(projected[end].x + displaceX, projected[end].y + displaceY);
          ctx.stroke();
        });
      }

      // Main cube with holographic effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${color}, ${hologramFlicker * 0.6})`;
      ctx.strokeStyle = `rgba(${color}, ${hologramFlicker * 0.8})`;
      ctx.lineWidth = 2.5;

      edges.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(projected[start].x, projected[start].y);
        ctx.lineTo(projected[end].x, projected[end].y);
        ctx.stroke();
      });

      // Semi-transparent faces for holographic effect
      ctx.fillStyle = `rgba(${color}, ${hologramFlicker * 0.05})`;
      // Front face
      ctx.beginPath();
      ctx.moveTo(projected[0].x, projected[0].y);
      ctx.lineTo(projected[1].x, projected[1].y);
      ctx.lineTo(projected[2].x, projected[2].y);
      ctx.lineTo(projected[3].x, projected[3].y);
      ctx.closePath();
      ctx.fill();

      // Vertices with enhanced glow
      ctx.shadowBlur = 8;
      projected.forEach(point => {
        ctx.fillStyle = `rgba(${color}, ${hologramFlicker})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Extra glow
        ctx.fillStyle = `rgba(${color}, ${hologramFlicker * 0.3})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    }

    // Draw 3D grid background
    function drawGrid() {
      ctx.save();

      // Vertical lines
      gridLines.vertical.forEach(line => {
        const basePulse = Math.sin(frameCount * 0.02 + line.pulseOffset) * 0.5 + 0.5;
        let opacity = 0.03 + basePulse * 0.02;

        if (line.activated) {
          opacity = 0.3 * (1 - line.activationLife / 60);
          line.activationLife++;
          if (line.activationLife > 60) {
            line.activated = false;
            line.activationLife = 0;
          }
        }

        ctx.strokeStyle = `rgba(${primaryRgbString}, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, canvas.height);
        ctx.stroke();
      });

      // Horizontal lines
      gridLines.horizontal.forEach(line => {
        const basePulse = Math.sin(frameCount * 0.02 + line.pulseOffset) * 0.5 + 0.5;
        let opacity = 0.03 + basePulse * 0.02;

        if (line.activated) {
          opacity = 0.3 * (1 - line.activationLife / 60);
          line.activationLife++;
          if (line.activationLife > 60) {
            line.activated = false;
            line.activationLife = 0;
          }
        }

        ctx.strokeStyle = `rgba(${primaryRgbString}, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        ctx.lineTo(canvas.width, line.y);
        ctx.stroke();
      });

      ctx.restore();
    }

    // Draw connection lines between nearby cubes (holographic network)
    function drawConnectionLines(cubesArray) {
      ctx.save();

      connectionLines.length = 0; // Clear previous connections

      for (let i = 0; i < cubesArray.length; i++) {
        for (let j = i + 1; j < cubesArray.length; j++) {
          const cube1 = cubesArray[i];
          const cube2 = cubesArray[j];

          if (cube1.cubeDead || cube2.cubeDead) continue;

          const dx = cube1.center.x - cube2.center.x;
          const dy = cube1.center.y - cube2.center.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only connect cubes within 300px
          if (distance < 300) {
            const opacity = (1 - distance / 300) * 0.2 * Math.min(cube1.opacity, cube2.opacity);

            // Pulsing effect
            const pulse = Math.sin(frameCount * 0.05 + i + j) * 0.5 + 0.5;
            const finalOpacity = opacity * (0.5 + pulse * 0.5);

            ctx.strokeStyle = `rgba(${primaryRgbString}, ${finalOpacity})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 10]);

            ctx.beginPath();
            ctx.moveTo(cube1.center.x, cube1.center.y);
            ctx.lineTo(cube2.center.x, cube2.center.y);
            ctx.stroke();

            ctx.setLineDash([]);

            // Data packets traveling along connection
            if (Math.random() < 0.02) {
              connectionLines.push({
                x1: cube1.center.x,
                y1: cube1.center.y,
                x2: cube2.center.x,
                y2: cube2.center.y,
                progress: 0,
                life: 0,
                maxLife: 60
              });
            }
          }
        }
      }

      // Draw data packets
      for (let i = connectionLines.length - 1; i >= 0; i--) {
        const conn = connectionLines[i];
        conn.life++;
        conn.progress = conn.life / conn.maxLife;

        if (conn.life > conn.maxLife) {
          connectionLines.splice(i, 1);
          continue;
        }

        const x = conn.x1 + (conn.x2 - conn.x1) * conn.progress;
        const y = conn.y1 + (conn.y2 - conn.y1) * conn.progress;

        const packetOpacity = Math.sin(conn.progress * Math.PI) * 0.8;

        ctx.fillStyle = `rgba(${primaryRgbString}, ${packetOpacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${primaryRgbString}, 0.8)`;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
    }

    // Draw digital artifacts (ghost particles from glitch)
    function drawDigitalArtifacts() {
      for (let i = digitalArtifacts.length - 1; i >= 0; i--) {
        const artifact = digitalArtifacts[i];
        artifact.life++;

        if (artifact.life > artifact.maxLife) {
          digitalArtifacts.splice(i, 1);
          continue;
        }

        const fadeProgress = artifact.life / artifact.maxLife;
        const opacity = (1 - fadeProgress) * 0.6;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = `rgba(${artifact.color}, 1)`;
        ctx.beginPath();
        ctx.arc(artifact.x, artifact.y, artifact.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Draw hex code strings with floating animation and typewriter effect
    function drawHexStrings(cube) {
      if (cube.binaryStrings.length === 0) return;

      ctx.save();
      ctx.font = 'bold 13px monospace';
      ctx.shadowBlur = 6;

      for (let i = cube.binaryStrings.length - 1; i >= 0; i--) {
        const str = cube.binaryStrings[i];
        str.life++;
        str.y += str.velocityY; // Float upward

        // Typewriter effect - progressively reveal characters
        str.typewriterProgress += str.typewriterSpeed;
        str.charsRevealed = Math.min(Math.floor(str.typewriterProgress), str.text.length);

        if (str.life > str.maxLife) {
          cube.binaryStrings.splice(i, 1);
          continue;
        }

        const fadeProgress = str.life / str.maxLife;
        const opacity = (1 - fadeProgress) * 0.9;

        // Intense glitch effect at start
        const glitchIntensity = str.life < 15 ? 1 : 0;

        ctx.globalAlpha = opacity;
        ctx.shadowColor = `rgba(${cube.color}, ${opacity})`;
        ctx.fillStyle = `rgba(${cube.color}, 1)`;

        // Draw only revealed characters with intense glitch effect
        for (let j = 0; j < str.charsRevealed; j++) {
          let charX = str.x + j * 9;
          let charY = str.y;

          // Glitch displacement - more intense on newly revealed chars
          const isNewChar = j === str.charsRevealed - 1;
          const charGlitchIntensity = isNewChar ? 1 : glitchIntensity;

          if (charGlitchIntensity > 0 && Math.random() < 0.3) {
            charX += (Math.random() - 0.5) * 8 * charGlitchIntensity;
            charY += (Math.random() - 0.5) * 8 * charGlitchIntensity;

            // Random chromatic aberration on some chars
            if (Math.random() < 0.2) {
              ctx.fillStyle = 'rgba(255, 100, 100, 0.7)';
              ctx.fillText(str.text[j], charX + 2, charY);
              ctx.fillStyle = 'rgba(100, 150, 255, 0.7)';
              ctx.fillText(str.text[j], charX - 2, charY);
            }
          }

          ctx.fillStyle = `rgba(${cube.color}, 1)`;
          ctx.fillText(str.text[j], charX, charY);
        }
      }

      ctx.restore();
    }

    // Animation loop
    let animationFrameId;
    let frameCount = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;
      framesSinceLastSpawn++;

      // Draw grid first (background layer)
      drawGrid();

      if (framesSinceLastSpawn >= nextSpawnIn && cubes.length < maxCubes) {
        cubes.push(createCube());
        framesSinceLastSpawn = 0;
        nextSpawnIn = Math.floor(Math.random() * (maxSpawnInterval - minSpawnInterval) + minSpawnInterval);
      }

      for (let i = cubes.length - 1; i >= 0; i--) {
        const cube = cubes[i];
        cube.lifetime++;

        // Update cube position FIRST, before explosion check
        const moveAngle = cube.center.moveAngle + frameCount * cube.center.orbitSpeed;
        const floatX = Math.cos(moveAngle) * cube.center.moveRadius;
        const floatY = Math.sin(moveAngle) * cube.center.moveRadius * 0.6;

        const wobbleX = Math.sin(frameCount * cube.center.floatSpeed * 1.3) * 15;
        const wobbleY = Math.cos(frameCount * cube.center.floatSpeed * 0.8) * 20;

        cube.center.baseX += cube.center.driftX;
        cube.center.baseY += cube.center.driftY;

        if (cube.center.baseX < 150 || cube.center.baseX > canvas.width - 150) {
          cube.center.driftX *= -1;
        }
        if (cube.center.baseY < 150 || cube.center.baseY > canvas.height - 150) {
          cube.center.driftY *= -1;
        }

        cube.center.x = cube.center.baseX + floatX + wobbleX;
        cube.center.y = cube.center.baseY + floatY + wobbleY;
        cube.center.rotation += cube.center.rotationSpeed;

        // Activate nearby grid lines when cube passes (Matrix effect) - optimized with spatial filtering
        // Only check lines near the cube position instead of all lines
        const activationRange = 50;
        const cubeX = cube.center.x;
        const cubeY = cube.center.y;

        // Find closest vertical line index
        const vLineIndex = Math.floor(cubeX / gridSize);
        for (let offset = -1; offset <= 1; offset++) {
          const idx = vLineIndex + offset;
          if (idx >= 0 && idx < gridLines.vertical.length) {
            const line = gridLines.vertical[idx];
            if (Math.abs(line.x - cubeX) < activationRange && !line.activated && Math.random() < 0.05) {
              line.activated = true;
              line.activationLife = 0;
            }
          }
        }

        // Find closest horizontal line index
        const hLineIndex = Math.floor(cubeY / gridSize);
        for (let offset = -1; offset <= 1; offset++) {
          const idx = hLineIndex + offset;
          if (idx >= 0 && idx < gridLines.horizontal.length) {
            const line = gridLines.horizontal[idx];
            if (Math.abs(line.y - cubeY) < activationRange && !line.activated && Math.random() < 0.05) {
              line.activated = true;
              line.activationLife = 0;
            }
          }
        }

        // Glitch effect logic - guaranteed 2-3 times per lifetime
        if (cube.glitchCount < cube.targetGlitchCount && cube.lifetime >= cube.glitchTimes[cube.glitchCount]) {
          // Start new glitch
          cube.glitchActive = true;
          cube.glitchDuration = 0;
          cube.glitchCount++;
          cube.glitchOffset = {
            x: (Math.random() - 0.5) * 12,
            y: (Math.random() - 0.5) * 12
          };

          // Create digital artifacts (ghost particles)
          for (let j = 0; j < 15; j++) {
            digitalArtifacts.push({
              x: cube.center.x + (Math.random() - 0.5) * 80,
              y: cube.center.y + (Math.random() - 0.5) * 80,
              size: Math.random() * 4 + 1,
              color: cube.color,
              life: 0,
              maxLife: 25 + Math.random() * 20
            });
          }
        }

        // Turn off glitch after brief moment
        if (cube.glitchActive) {
          cube.glitchDuration++;
          if (cube.glitchDuration > 12) {
            cube.glitchActive = false;
          }
        }

        // Now handle lifecycle phases with updated position
        if (cube.lifetime < cube.fadeInEnd) {
          cube.opacity = cube.lifetime / cube.fadeInEnd;
        } else if (cube.lifetime < cube.explosionStart) {
          cube.opacity = 1;
        } else if (cube.lifetime >= cube.explosionStart && !cube.hasExploded) {
          cube.hasExploded = true;
          cube.opacity = 1;
          // Particles will reset from current cube position
          cube.particles.forEach(particle => {
            particle.reset();
          });

          // Spawn hex strings with random positions and staggered appearance
          const numStrings = 11 + Math.floor(Math.random() * 4); // 11-14 strings
          for (let j = 0; j < numStrings; j++) {
            // Completely random angle and radius for varied positions
            const angle = Math.random() * Math.PI * 2;
            const radius = 60 + Math.random() * 80; // Wider spread: 60-140px
            let hexString = '';
            const stringLength = 6 + Math.floor(Math.random() * 8); // Variable length 6-14 chars
            for (let k = 0; k < stringLength; k++) {
              hexString += hexChars[Math.floor(Math.random() * hexChars.length)];
            }
            cube.binaryStrings.push({
              text: hexString,
              x: cube.center.x + Math.cos(angle) * radius,
              y: cube.center.y + Math.sin(angle) * radius,
              life: 0,
              maxLife: 45 + Math.random() * 30, // Faster: 45-75 frames instead of 50-90
              velocityY: -0.45 - Math.random() * 0.6, // Faster float: -0.45 to -1.05 instead of -0.3 to -0.8
              // Typewriter effect properties - heavily staggered start times
              charsRevealed: 0,
              typewriterSpeed: 0.4 + Math.random() * 0.5, // Faster: 0.4-0.9 chars per frame instead of 0.3-0.7
              typewriterProgress: -j * (6 + Math.random() * 6) // Faster start: 6-12 frames instead of 8-16
            });
          }
        } else if (cube.lifetime < cube.fadeOutStart) {
          cube.opacity = 1;
        } else if (cube.lifetime < cube.cubeDeathTime) {
          // Cube is fading out
          const fadeProgress = (cube.lifetime - cube.fadeOutStart) / (cube.cubeDeathTime - cube.fadeOutStart);
          cube.opacity = 1 - fadeProgress;
        } else if (cube.lifetime < cube.maxLifetime) {
          // Cube is dead, but particles still alive - grace period
          cube.opacity = 0;
          cube.cubeDead = true;
        } else {
          // All particles should be done now, remove cube
          cubes.splice(i, 1);
          continue;
        }

        // Only draw cube if it's not dead yet
        if (!cube.cubeDead) {
          drawCubeWireframe(cube.center, cubeSize, cube.center.rotation, cube.opacity, cube.color, cube.glitchOffset, cube.glitchActive);
        }

        // Draw hex strings
        drawHexStrings(cube);

        if (cube.hasExploded) {
          const cubeIsFadingOut = cube.lifetime >= cube.fadeOutStart;
          cube.particles.forEach(particle => {
            particle.update(cubeIsFadingOut, cube.cubeDead);

            // Apply cube opacity only if cube is still visible
            const originalOpacity = particle.opacity;
            if (!cube.cubeDead) {
              particle.opacity *= cube.opacity;
            }
            particle.draw();
            particle.opacity = originalOpacity;
          });
        }
      }

      // Draw connection lines between cubes (holographic network)
      drawConnectionLines(cubes);

      // Draw all digital artifacts
      drawDigitalArtifacts();

      // Reset global alpha to prevent accumulation (optimization)
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.palette.mode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
}
