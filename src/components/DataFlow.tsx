import { motion } from 'motion/react';

export function DataFlow() {
  // Abstract system nodes
  const nodes = [
    { x: 20, y: 30 },
    { x: 45, y: 20 },
    { x: 70, y: 35 },
    { x: 30, y: 60 },
    { x: 55, y: 70 },
    { x: 80, y: 60 },
  ];

  // Connections between nodes
  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 2, to: 5 },
  ];

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Connection lines */}
      {connections.map((conn, i) => (
        <motion.line
          key={`line-${i}`}
          x1={nodes[conn.from].x}
          y1={nodes[conn.from].y}
          x2={nodes[conn.to].x}
          y2={nodes[conn.to].y}
          stroke="rgba(6, 182, 212, 0.3)"
          strokeWidth="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1,
          }}
        />
      ))}

      {/* Data packets moving along lines */}
      {connections.map((conn, i) => (
        <motion.circle
          key={`packet-${i}`}
          r="0.4"
          fill="#06b6d4"
          initial={{
            cx: nodes[conn.from].x,
            cy: nodes[conn.from].y,
            opacity: 0,
          }}
          animate={{
            cx: nodes[conn.to].x,
            cy: nodes[conn.to].y,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
      ))}

      {/* System nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="1.5"
            fill="rgba(6, 182, 212, 0.2)"
            stroke="rgba(6, 182, 212, 0.6)"
            strokeWidth="0.2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="1.5"
            fill="none"
            stroke="rgba(6, 182, 212, 0.4)"
            strokeWidth="0.1"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: i * 0.3,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
