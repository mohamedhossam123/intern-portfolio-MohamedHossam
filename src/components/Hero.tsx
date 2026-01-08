import { motion } from 'motion/react';
import { DataFlow } from './DataFlow';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background data flow visualization */}
      <div className="absolute inset-0 opacity-20">
        <DataFlow />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm md:text-base text-gray-300 mb-4 tracking-wide font-light">
            Mohamed Hossam
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Software Engineer
          </h1>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-light tracking-wide">
            Backend Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable systems with a focus on performance, reliability, and architectural trade-offs.
          Thinking in pipelines, async workflows, and distributed systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 text-sm text-gray-500 tracking-wider"
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>

      {/* Subtle gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0e17]"></div>
    </section>
  );
}
