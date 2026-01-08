import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function SystemDesign() {
  // System flow stages
  const stages = [
    { label: 'Request', detail: 'HTTP/WS' },
    { label: 'Load Balancer', detail: 'Nginx' },
    { label: 'API Gateway', detail: 'Auth/Rate Limit' },
    { label: 'Cache', detail: 'Redis' },
    { label: 'Queue', detail: 'Async Tasks' },
    { label: 'Workers', detail: 'Celery' },
    { label: 'Database', detail: 'PostgreSQL' },
    { label: 'Response', detail: 'JSON/Stream' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-cyan-400 font-light">
            System Design Thinking
          </h2>
          <p className="text-gray-400 mb-12">
            Backend-driven real-time architecture with authoritative server-side state
          </p>

          {/* Main flow diagram */}
          <div className="bg-[#0a0e17] border border-gray-800 rounded-lg p-8 mb-8">
            <h3 className="text-xl text-gray-100 mb-4">Backend-Driven Real-Time Architecture</h3>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              Database and Redis are updated before sending WebSocket events. WebSocket updates are sent 
              once per state change, not on fixed intervals. Frontend timers are removed; real-time state 
              is fully controlled by backend signals. Slot availability, booking, and expiration are handled 
              server-side with authoritative state. Background validation and expiration checks are triggered 
              from the backend, not the UI. This ensures reliability, consistency, and scalability.
            </p>
            
            <div className="space-y-6">
              {/* Desktop flow */}
              <div className="hidden lg:flex items-center justify-between gap-2">
                {stages.map((stage, index) => (
                  <div key={stage.label} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-24 h-24 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex flex-col items-center justify-center hover:bg-cyan-400/20 transition-colors group">
                        <div className="text-sm text-cyan-400 mb-1">{stage.label}</div>
                        <div className="text-xs text-gray-500">{stage.detail}</div>
                      </div>
                    </motion.div>
                    
                    {index < stages.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        className="mx-2"
                      >
                        <ArrowRight className="w-5 h-5 text-cyan-400/50" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile flow */}
              <div className="lg:hidden space-y-4">
                {stages.map((stage, index) => (
                  <div key={stage.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-cyan-400/10 border border-cyan-400/30 rounded p-4"
                    >
                      <div className="text-cyan-400">{stage.label}</div>
                      <div className="text-sm text-gray-500">{stage.detail}</div>
                    </motion.div>
                    {index < stages.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowRight className="w-5 h-5 text-cyan-400/50 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0a0e17] border border-gray-800 rounded-lg p-6"
            >
              <h4 className="text-lg text-cyan-400 mb-4">Performance First</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Cache aggressively at multiple layers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Async processing for non-blocking operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Database query optimization and indexing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Connection pooling and resource management</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0a0e17] border border-gray-800 rounded-lg p-6"
            >
              <h4 className="text-lg text-cyan-400 mb-4">Scalability Patterns</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Horizontal scaling with stateless services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Message queues for decoupled architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Load balancing and health checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Database read replicas and sharding strategies</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0a0e17] border border-gray-800 rounded-lg p-6"
            >
              <h4 className="text-lg text-cyan-400 mb-4">Reliability</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Graceful degradation and fallback strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Retry logic with exponential backoff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Circuit breakers for service dependencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Comprehensive logging and monitoring</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0a0e17] border border-gray-800 rounded-lg p-6"
            >
              <h4 className="text-lg text-cyan-400 mb-4">Real-Time Systems</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>WebSocket connections for bidirectional streaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Pub/Sub patterns for event distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Server-Sent Events for live updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Optimistic UI updates and conflict resolution</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle divider */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
      </div>
    </section>
  );
}