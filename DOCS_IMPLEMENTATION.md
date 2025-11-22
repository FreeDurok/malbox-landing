# MalBox Landing - Documentation Implementation

## What's New

The landing page has been enhanced with a complete **internal documentation site** accessible by clicking the "Coming Soon - Under Development" button.

## Features

### 1. Routing System
- **React Router** for client-side navigation
- `/` - Landing page with animated background
- `/docs` - Full documentation site

### 2. Documentation Sections

#### **Hero Section**
- Eye-catching header with MalBox branding
- Gradient typography
- Clear value proposition

#### **Overview Section** (`#overview`)
- High-level introduction to MalBox
- 4 key feature cards:
  - Plugin-Based architecture
  - Scalable design
  - Containerized deployment
  - Multi-engine analysis

#### **Architecture Section** (`#architecture`)
- **Excalidraw-style SVG diagram** showing:
  - Frontend (React + Vite)
  - Backend API (FastAPI)
  - Message Broker (RabbitMQ)
  - Storage Layer (MongoDB, PostgreSQL, MinIO)
  - Worker Plugins (YARA, Strings, Email, Qiling, VirusTotal)
  - Results Collector
  - Data flow with arrows and color-coding
  - Interactive legend explaining concepts
- 4 principle cards:
  - Modular Design
  - Message-Driven architecture
  - Real-Time Updates
  - Horizontal Scalability

#### **Plugin System Section** (`#plugins`)
- **3 plugin categories** with visual cards:
  - **Official Plugins** (6 plugins): YARA, Strings, Email, PE, CAPA, Windows Emulation
  - **Community Plugins** (1 plugin): Document Analyzer
  - **Third-Party Integrations** (1 plugin): VirusTotal
- Each plugin card shows:
  - Name
  - Type badge (Static/Dynamic/Third-Party)
  - Key features list
- **Extension guide** with step-by-step instructions for:
  - Creating backend plugins
  - Creating frontend plugins
- Auto-discovery explanation

#### **Data Flow Section** (`#dataflow`)
- Visual timeline showing 5 steps:
  1. File Upload
  2. Ingestion & Queuing
  3. Parallel Analysis
  4. Results Aggregation
  5. Report Display
- Code example with RabbitMQ queue naming convention
- Color-coded icons for each step

#### **Tech Stack Section** (`#techstack`)
- **6 technology categories**:
  - Frontend (React, Vite, MUI, Zustand, Axios)
  - Backend (FastAPI, Python, Dramatiq, SQLAlchemy)
  - Databases (MongoDB, PostgreSQL, MinIO)
  - Infrastructure (Docker, RabbitMQ, Nginx)
  - Analysis Tools (YARA, CAPA, Qiling, VirusTotal)
  - DevOps (Click, Rich, Vercel, GitHub)
- Each category has hover effects
- Technology rationale section

#### **Getting Started Section** (`#getting-started`)
- Quick start code block with installation commands
- CLI commands reference
- System requirements table
- Next steps checklist
- GitHub CTA button with gradient effect

### 3. Navigation

#### **Desktop**
- Fixed AppBar with MalBox logo
- Left sidebar with section links
- Smooth scroll to sections
- Hover effects on menu items

#### **Mobile**
- Responsive design
- Hamburger menu (drawer)
- Touch-friendly navigation
- Optimized layouts for small screens

### 4. Design System

#### **Colors**
- Primary: `#FF7800` (Orange)
- Secondary: `#9C27B0` (Purple)
- Success: `#4CAF50` (Green)
- Info: `#2196F3` (Blue)
- Error: `#F44336` (Red)

#### **Effects**
- Glassmorphism cards (`backdrop-filter: blur(10px)`)
- Gradient backgrounds
- Hover animations (scale, translate, glow)
- Smooth transitions
- Color-coded categories

#### **Typography**
- Consistent hierarchy (h3, h5, h6, body1, body2)
- Responsive font sizes
- Code blocks with syntax-style formatting
- Monospace for technical content

## File Structure

```
src/
├── App.jsx                                    # Router setup
├── pages/
│   ├── login/
│   │   ├── LoginPage.jsx                      # Updated with useNavigate
│   │   └── components/
│   │       ├── LoginCard.jsx                  # Unchanged
│   │       └── ParticleBackground.jsx         # Unchanged
│   └── docs/
│       ├── DocsPage.jsx                       # Main docs layout
│       └── components/
│           ├── HeroSection.jsx                # Top banner
│           ├── OverviewSection.jsx            # Introduction
│           ├── ArchitectureSection.jsx        # SVG diagram + principles
│           ├── PluginSystemSection.jsx        # Plugin cards + guides
│           ├── DataFlowSection.jsx            # Flow visualization
│           ├── TechStackSection.jsx           # Technology grid
│           └── GettingStartedSection.jsx      # Quick start guide
└── components/
    ├── common/
    │   └── MalBoxLogo.jsx                     # Reusable logo
    └── icons/
        └── IsometricCubeIcon.jsx              # Cube icon
```

## Key Highlights

### 🎨 Excalidraw-Style Diagram
The architecture diagram uses:
- Hand-drawn aesthetic (dashed lines, rounded corners)
- Color-coded components by layer
- Directional arrows showing data flow
- Interactive legend
- Responsive SVG (scales on mobile)

### 🔌 Plugin Extensibility Focus
The documentation emphasizes:
- 3-tier plugin system (Official/Community/Third-Party)
- Auto-discovery mechanism
- Step-by-step extension guides
- Queue naming conventions
- Frontend + Backend plugin creation

### 🚀 Developer Experience
- Clean code structure
- Reusable components
- Consistent theming
- Dark mode optimized
- Fast load times (no heavy dependencies)

## Testing

The site has been tested with:
- ✅ Docker Compose dev server
- ✅ Vite compilation (no errors)
- ✅ Responsive layouts
- ✅ Navigation flow
- ✅ All sections render correctly

## Next Steps

You can:
1. **Add your custom Excalidraw diagram**: Replace the SVG in `ArchitectureSection.jsx` with an exported Excalidraw SVG
2. **Customize content**: Edit any section in `src/pages/docs/components/`
3. **Add more sections**: Create new components and import them in `DocsPage.jsx`
4. **Deploy to Vercel**: The routing is configured for SPA deployment (see `vercel.json`)

## Development

```bash
# Start dev server with hot reload
docker compose up dev

# Access at http://localhost:5173

# Build for production
docker compose up prod

# Access at http://localhost:8080
```

## Deployment

The app is configured for Vercel with SPA routing:
- `vercel.json` handles client-side routing
- Build command: `npm run build`
- Output directory: `dist`

All routes (`/`, `/docs`) will work correctly on Vercel.

---

**Created by Claude Code**
Architecture documentation auto-generated from MalBox codebase analysis.
