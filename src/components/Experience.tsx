import { motion } from 'motion/react';
import { TrendingUp, Code, Layers, Users } from 'lucide-react';
import SystemFlowRail from './SystemFlowRail';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { AspectRatio } from './ui/aspect-ratio';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Experience() {
  return (
    <section className="relative py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-cyan-400 font-light">
            Experience & Leadership
          </h2>
          <p className="text-gray-400 mb-12">
            Sophomore engineer with production system experience and technical leadership
          </p>

          {/* Featured Experience - Software Engineer Intern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0a0e17] border-2 border-cyan-400/40 rounded-lg p-8 mb-8 shadow-lg shadow-cyan-400/10"
          >
            {/* Cyan accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-l-lg"></div>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 text-xs rounded">
                FEATURED EXPERIENCE
              </div>
              <div className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs rounded">
                Production System
              </div>
              <div className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs rounded">
                Real Users
              </div>
              <div className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs rounded">
                System Design Focus
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center">
                  <Code className="w-7 h-7 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-gray-100 mb-1">Software Engineer Intern</h3>
                <p className="text-cyan-400 mb-1">IECC Nile Preneurs</p>
                <p className="text-gray-500 text-sm">Jul 2025 – Present</p>
              </div>
            </div>

            {/* Key Highlight */}
            <div className="bg-cyan-400/5 border-l-4 border-cyan-400 rounded-r p-4 mb-6">
              <p className="text-gray-100 leading-relaxed">
                <span className="text-cyan-400 font-medium">Production Impact:</span> Shipped production backend code used by{' '}
                <span className="text-cyan-300 font-medium">5,000–10,000 weekly users</span> on the main Nile University mobile application
              </p>
            </div>

            {/* Architecture image preview + lightbox */}
            <div className="mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group w-full text-left">
                    <div className="rounded-lg overflow-hidden border border-gray-800 bg-[#0b0f17] hover:border-cyan-400/40 transition">
                      <AspectRatio ratio={16 / 9}>
                        <ImageWithFallback
                          src="/Booking_app_Archticture.png"
                          alt="System architecture redesigned during internship"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      New architecture — tap to view full size
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-[#0d1117] border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-gray-100">New architecture</DialogTitle>
                  </DialogHeader>
                  <div className="max-h-[80vh] overflow-auto">
                    <img
                      src="/project-images/internship-architecture.png"
                      alt="System architecture redesigned during internship"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                <span>Architected and developed a scalable reservation system using Django, PostgreSQL, Redis, and GraphQL</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                <span>Designed real-time booking and availability updates using Django Channels + Redis, handling thousands of live notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                <span>Eliminated frontend polling by implementing backend-driven WebSocket events, improving performance and consistency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                <span>Reduced critical race-condition failures by 82% through advanced concurrency control and authoritative server state</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                <span>Automated background workflows using Celery + RabbitMQ for slot expiration, validation, and quota resets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                <span>Integrated the system into the main NU application using a microservices architecture and secure API key design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                <span>Desgined 5 main Cronjobs that run periodically to manage system tasks and maintenance</span>
              </li>
              <li className="flex items-start gap-3">
  <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
  <span>
    Implemented Redis as a cache-first layer following the cache-aside pattern
    to reduce database load and improve response latency
  </span>
</li>

<li className="flex items-start gap-3">
  <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
  <span>
    Redesigned the system architecture to reduce infrastructure costs by
    approximately <strong>56%</strong> while improving performance,
    consistency, and overall user experience
  </span>
</li>

            </ul>
          </motion.div>

          {/* Microsoft Learn Student Ambassadors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0a0e17] border border-gray-800 rounded-lg p-8 hover:border-cyan-400/30 transition-all duration-300 mb-16"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-gray-100 mb-1">Vice Head, Software Development Track</h3>
                <p className="text-cyan-400 text-sm mb-1">Microsoft Learn Student Ambassadors — Nile University</p>
                <p className="text-gray-500 text-sm">Aug 2025 – Present</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Lead and deliver hands-on workshops and coding sessions in both backend and frontend web development, reaching hundreds of students</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Teach advanced software engineering topics including <span className="text-cyan-300">asynchronous vs synchronous programming</span>, <span className="text-cyan-300">Object-Oriented Programming (OOP)</span>, and <span className="text-cyan-300">ORMs</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Mentor peers on clean architecture, backend fundamentals, and practical real-world system design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Advocate for modern development tools, frameworks, and engineering best practices as a representative of Microsoft Learn</span>
              </li>
            </ul>
          </motion.div>

          {/* Learning Journey Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-gray-100 mb-2">Fast Iteration Velocity</h3>
                <p className="text-gray-300 leading-relaxed">
                  As a sophomore engineer, I've accelerated my learning by shipping frequently. 
                  Every project is an opportunity to tackle new architectural challenges—from designing 
                  async workflows to optimizing database queries under load.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-gray-100 mb-2">System-Level Thinking</h3>
                <p className="text-gray-300 leading-relaxed">
                  I approach problems at the system level—considering trade-offs between consistency and 
                  availability, choosing the right data structures, and designing for failure. I read 
                  production logs, profile slow queries, and reason about bottlenecks. This mindset drives 
                  how I build.
                </p>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-800"
            >
              
            </motion.div>
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