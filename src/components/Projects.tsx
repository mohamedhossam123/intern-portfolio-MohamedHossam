import { motion } from 'motion/react';
import { ExternalLink, GitBranch } from 'lucide-react';
import SystemFlowRail from './SystemFlowRail';

export function Projects() {
  const projects = [
    {
      title: 'Memzy — Social Media Platform',
      description: 'Backend-heavy full-stack system built with .NET Core and SQL Server. Designed for performance and scalability with real-time messaging capabilities and secure authentication.',
      architecture: ['.NET Core', 'SQL Server', 'Next.js', 'WebSockets', 'JWT'],
      highlights: [
        'Real-time messaging using WebSockets',
        'Secure authentication using JWT',
        'Performance-focused API design',
        'Winner of 1st place at GDG NU Fullstack Competition',
      ],
    },
    {
      title: 'FitLogic — Fitness Recommendation Platform',
      description: 'Backend logic system with dual recommendation engine for exercise matching and calorie calculation. Built to drive intelligent user personalization through server-side algorithms.',
      architecture: ['.NET Core', 'SQL Server', 'Recommendation Engine'],
      highlights: [
        'Dual recommendation engine (exercise matching + calorie calculation)',
        'Improved user retention by 25% through intelligent backend-driven personalization',
        'Performance-optimized query design',
        'Scalable backend architecture',
      ],
    },
    {
      title: 'GestureDraw — CV Whiteboard Overlay',
      description:
        'Small computer-vision tool in Python that uses the webcam to detect hand gestures and spawn overlay elements. A peace ✌️ sign spawns a cube; an OK 👌 sign toggles free text drawing — making it easy to annotate and explain ideas during online meetings.',
      architecture: ['Python', 'OpenCV', 'MediaPipe Hands', 'NumPy'],
      highlights: [
        'Real-time hand landmark detection with MediaPipe',
        'Gesture mapping: ✌️ → 3D cube overlay, 👌 → text drawing mode',
        'Smooth overlays rendered over the camera feed for screen sharing',
        'Lightweight and portable; runs locally with minimal setup',
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0a0e17]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-cyan-400 font-light">
            Projects
          </h2>
          <p className="text-gray-400 mb-12">
            Real systems built with scalability and performance in mind
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0d1117] border border-gray-800 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl text-gray-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <ExternalLink className="w-5 h-5 text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <GitBranch className="w-5 h-5 text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors" />
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Mini architecture visualization */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
                      <span>Client</span>
                    </div>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
                      <span>API</span>
                    </div>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
                      <span>Cache</span>
                    </div>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
                      <span>Database</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle divider */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
      </div>

      <SystemFlowRail align="right" />
    </section>
  );
}