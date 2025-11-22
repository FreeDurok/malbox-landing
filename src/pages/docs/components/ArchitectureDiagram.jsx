import React from 'react';

export default function ArchitectureDiagram() {
  return (
    <svg
      width="100%"
      viewBox="0 0 1200 780"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Markers */}
      <defs>
        <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2196F3" />
        </marker>
        <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#FF7800" />
        </marker>
        <marker id="arrowPrimary" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#FF6F00" />
        </marker>
        <marker id="arrowWarning" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#F59E0B" />
        </marker>
        <marker id="arrowInfo" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#42A5F5" />
        </marker>
        <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#4CAF50" />
        </marker>
        <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#9C27B0" />
        </marker>
      </defs>

      {/* Title */}
      <text x="600" y="35" textAnchor="middle" fill="#B0B0B0" fontSize="24" fontWeight="bold">
        Microservices Architecture
      </text>

      {/* ============ ROW 1: Frontend + Backend + Storage ============ */}

      {/* Frontend */}
      <rect x="50" y="70" width="280" height="85" fill="rgba(33, 150, 243, 0.08)" stroke="#2196F3" strokeWidth="3" rx="8" />
      <text x="190" y="98" textAnchor="middle" fill="#2196F3" fontSize="16" fontWeight="bold">Frontend</text>
      <text x="190" y="120" textAnchor="middle" fill="#90CAF9" fontSize="11">React + Vite + MUI</text>
      <text x="190" y="138" textAnchor="middle" fill="#90CAF9" fontSize="10">Plugin Visualizers</text>

      {/* Backend API */}
      <rect x="460" y="70" width="280" height="85" fill="rgba(255, 120, 0, 0.08)" stroke="#FF7800" strokeWidth="3" rx="8" />
      <text x="600" y="98" textAnchor="middle" fill="#FF7800" fontSize="16" fontWeight="bold">Backend API</text>
      <text x="600" y="120" textAnchor="middle" fill="#FFB74D" fontSize="11">FastAPI (Python 3.11)</text>
      <text x="600" y="138" textAnchor="middle" fill="#FFB74D" fontSize="10">REST + SSE Events</text>

      {/* Storage Layer */}
      <rect x="870" y="70" width="280" height="85" fill="rgba(76, 175, 80, 0.08)" stroke="#4CAF50" strokeWidth="3" strokeDasharray="5,5" rx="8" />
      <text x="1010" y="98" textAnchor="middle" fill="#4CAF50" fontSize="16" fontWeight="bold">Storage</text>
      <text x="1010" y="120" textAnchor="middle" fill="#81C784" fontSize="10">MongoDB • PostgreSQL • MinIO</text>
      <text x="1010" y="138" textAnchor="middle" fill="#81C784" fontSize="10">Reports + Config + Samples</text>

      {/* Arrow: Frontend -> Backend */}
      <path d="M 335 112 L 455 112" stroke="#2196F3" strokeWidth="2" fill="none" markerEnd="url(#arrowBlue)" />
      <text x="395" y="105" textAnchor="middle" fill="#2196F3" fontSize="9">HTTP</text>

      {/* Arrow: Backend -> Storage */}
      <path d="M 745 112 L 865 112" stroke="#4CAF50" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" strokeDasharray="4,4" />
      <text x="805" y="105" textAnchor="middle" fill="#4CAF50" fontSize="9">Read/Write</text>

      {/* ============ ROW 2: RabbitMQ ============ */}

      <rect x="300" y="210" width="600" height="75" fill="rgba(156, 39, 176, 0.08)" stroke="#9C27B0" strokeWidth="3" rx="8" />
      <text x="600" y="238" textAnchor="middle" fill="#9C27B0" fontSize="16" fontWeight="bold">RabbitMQ Message Broker</text>
      <text x="600" y="260" textAnchor="middle" fill="#CE93D8" fontSize="11">Task Queues: static.*, dynamic.*, third-party.*</text>

      {/* Arrow: Backend -> RabbitMQ */}
      <path d="M 600 160 L 600 205" stroke="#9C27B0" strokeWidth="2" fill="none" markerEnd="url(#arrowPurple)" />
      <text x="620" y="185" fill="#9C27B0" fontSize="11" fontWeight="600">Enqueue</text>

      {/* ============ ROW 3: Workers (Generic plugin categories) ============ */}

      <text x="560" y="330" textAnchor="end" fill="#FFB74D" fontSize="15" fontWeight="bold">Worker Plugins</text>
      <text x="640" y="330" textAnchor="start" fill="#FFB74D" fontSize="15" fontWeight="bold">(Parallel Execution)</text>

      {/* Static Analysis Category */}
      <rect x="50" y="370" width="280" height="95" fill="rgba(255, 111, 0, 0.08)" stroke="#FF6F00" strokeWidth="2" rx="8" />
      <text x="190" y="405" textAnchor="middle" fill="#FF6F00" fontSize="16" fontWeight="bold">Static</text>
      <text x="190" y="428" textAnchor="middle" fill="#FFA040" fontSize="11">Analysis Plugins</text>
      <text x="190" y="450" textAnchor="middle" fill="#999" fontSize="10" fontStyle="italic">YARA, Strings, PE, Email, CAPA...</text>

      {/* Dynamic Analysis Category */}
      <rect x="460" y="370" width="280" height="95" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" strokeWidth="2" rx="8" />
      <text x="600" y="405" textAnchor="middle" fill="#F59E0B" fontSize="16" fontWeight="bold">Dynamic</text>
      <text x="600" y="428" textAnchor="middle" fill="#FBBF24" fontSize="11">Analysis Plugins</text>
      <text x="600" y="450" textAnchor="middle" fill="#999" fontSize="10" fontStyle="italic">Qiling, Sandbox, Emulation...</text>

      {/* Third-Party Category */}
      <rect x="870" y="370" width="280" height="95" fill="rgba(66, 165, 245, 0.08)" stroke="#42A5F5" strokeWidth="2" rx="8" />
      <text x="1010" y="405" textAnchor="middle" fill="#42A5F5" fontSize="16" fontWeight="bold">Third-Party</text>
      <text x="1010" y="428" textAnchor="middle" fill="#64B5F6" fontSize="11">Integration Plugins</text>
      <text x="1010" y="450" textAnchor="middle" fill="#999" fontSize="10" fontStyle="italic">VirusTotal, External APIs...</text>

      {/* ============ Arrows: RabbitMQ -> Workers (clean, non-overlapping) ============ */}

      <path d="M 380 290 L 380 320 L 190 320 L 190 365" stroke="#FF6F00" strokeWidth="2" fill="none" markerEnd="url(#arrowPrimary)" />
      <path d="M 600 290 L 600 365" stroke="#F59E0B" strokeWidth="2" fill="none" markerEnd="url(#arrowWarning)" />
      <path d="M 820 290 L 820 320 L 1010 320 L 1010 365" stroke="#42A5F5" strokeWidth="2" fill="none" markerEnd="url(#arrowInfo)" />

      {/* ============ ROW 4: Results Collector ============ */}

      <rect x="300" y="530" width="600" height="75" fill="rgba(76, 175, 80, 0.08)" stroke="#4CAF50" strokeWidth="3" rx="8" />
      <text x="600" y="558" textAnchor="middle" fill="#4CAF50" fontSize="16" fontWeight="bold">Results Collector Worker</text>
      <text x="600" y="580" textAnchor="middle" fill="#81C784" fontSize="11">Aggregates all plugin outputs → Stores unified report in MongoDB</text>

      {/* ============ Arrows: Workers -> Results Collector (clean paths) ============ */}

      <path d="M 190 470 L 190 500 L 380 500 L 380 525" stroke="#66BB6A" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" strokeDasharray="3,3" />
      <path d="M 600 470 L 600 525" stroke="#66BB6A" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" strokeDasharray="3,3" />
      <path d="M 1010 470 L 1010 500 L 820 500 L 820 525" stroke="#66BB6A" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" strokeDasharray="3,3" />

      {/* ============ Arrows: Results -> Storage + Backend (routing externally) ============ */}

      {/* Results -> Storage (far right side, external path) */}
      <path d="M 905 567 L 1180 567 L 1180 112 L 1155 112" stroke="#4CAF50" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />
      <text x="1040" y="585" textAnchor="middle" fill="#4CAF50" fontSize="12" fontWeight="600">Save</text>

      {/* Results -> Backend (far left side, external path via SSE) */}
      <path d="M 295 567 L 20 567 L 20 112 L 45 112" stroke="#2196F3" strokeWidth="2" fill="none" markerEnd="url(#arrowBlue)" strokeDasharray="4,4" />
      <text x="110" y="585" textAnchor="middle" fill="#2196F3" fontSize="12" fontWeight="600">SSE</text>

      {/* ============ LEGEND ============ */}

      <rect x="50" y="660" width="1100" height="110" fill="rgba(18, 18, 18, 0.5)" stroke="#666" strokeWidth="1" rx="6" />
      <text x="600" y="695" textAnchor="middle" fill="#B0B0B0" fontSize="17" fontWeight="bold">Key Concepts</text>

      {/* Column anchors for consistent alignment */}
      {/* col1 = 100, col2 = 460, col3 = 820 */}

      {/* Row 1 */}
      <circle cx="100" cy="715" r="7" fill="#FF6F00" />
      <text x="120" y="720" fill="#FFA040" fontSize="11">Static Analysis: File inspection (no execution)</text>

      <circle cx="460" cy="715" r="7" fill="#F59E0B" />
      <text x="480" y="720" fill="#FBBF24" fontSize="11">Dynamic Analysis: Behavior monitoring</text>

      <circle cx="820" cy="715" r="7" fill="#42A5F5" />
      <text x="840" y="720" fill="#64B5F6" fontSize="11">Third-Party: External APIs</text>

      {/* Row 2 */}
      <rect x="92" y="740" width="16" height="16" fill="none" stroke="#9C27B0" strokeWidth="2" />
      <text x="120" y="752" fill="#CE93D8" fontSize="11">Message-driven: Async task queuing</text>

      <line x1="440" y1="748" x2="480" y2="748" stroke="#4CAF50" strokeWidth="2" strokeDasharray="3,3" />
      <text x="500" y="752" fill="#81C784" fontSize="11">Results: Dashed green lines</text>

      <line x1="800" y1="748" x2="840" y2="748" stroke="#2196F3" strokeWidth="2" strokeDasharray="4,4" />
      <text x="860" y="752" fill="#64B5F6" fontSize="11">Real-time SSE events</text>
    </svg>
  );
}
