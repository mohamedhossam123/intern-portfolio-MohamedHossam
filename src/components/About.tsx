import { motion } from 'motion/react';
import SystemFlowRail from './SystemFlowRail';

export function About() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-cyan-400 font-light">
            Engineering Mindset
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              I'm a sophomore engineer who approaches problems through the lens of system architecture. 
              My focus is on building backend systems that scale—thinking through trade-offs between 
              consistency and performance, designing async workflows, and optimizing data pipelines.
            </p>
            
            <p className="text-lg">
              I've shipped real systems handling thousands of users with REST APIs, WebSocket connections, 
              async task queues, and caching layers. My work prioritizes reliability, observability, and 
              making the right architectural decisions for the problem at hand.
            </p>
            
            <p className="text-lg text-gray-400">
              Every system is a series of trade-offs. I enjoy reasoning about them.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle divider */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
      </div>

      {/* System Flow Rail */}
      <SystemFlowRail align="right" />
    </section>
  );
}