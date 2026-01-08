import { motion } from 'motion/react';
import { Database, Zap, Server, Activity, Layers, MessageSquare } from 'lucide-react';
import { LogoLoop } from './LogoLoop';
import SystemFlowRail from './SystemFlowRail';

export function Skills() {
  const languages = [
    { src: '/project-images/python.svg', alt: 'Python', title: 'Python' },
    { src: '/project-images/csharp.svg', alt: 'C#', title: 'C#' },
    { src: '/project-images/cpp.svg', alt: 'C++', title: 'C++' },
    { src: '/project-images/javascript.svg', alt: 'JavaScript', title: 'JavaScript' },
    { src: '/project-images/typescript.svg', alt: 'TypeScript', title: 'TypeScript' },
  ];

  const toolsFrameworks = [
    { src: '/project-images/fastapi.svg', alt: 'FastAPI', title: 'FastAPI' },
    { src: '/project-images/django.svg', alt: 'Django', title: 'Django' },
    { src: '/project-images/celery.svg', alt: 'Celery', title: 'Celery' },
    { src: '/project-images/dotnet.svg', alt: '.NET', title: '.NET' },
    { src: '/project-images/react.svg', alt: 'React', title: 'React' },
    { src: '/project-images/postgresql.svg', alt: 'PostgreSQL', title: 'PostgreSQL' },
    { src: '/project-images/redis.svg', alt: 'Redis', title: 'Redis' },
    { src: '/project-images/docker.svg', alt: 'Docker', title: 'Docker' },
    { src: '/project-images/git.svg', alt: 'Git', title: 'Git' },
    { src: '/project-images/github.svg', alt: 'GitHub', title: 'GitHub' },
    { src: '/project-images/railway.svg', alt: 'Railway', title: 'Railway' },
    { src: '/project-images/rabbitmq.svg', alt: 'RabbitMQ', title: 'RabbitMQ' },
  ];

  const skillCategories = [
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['RESTful APIs', 'GraphQL', 'WebSockets', 'JWT Authentication', 'API Key–based service communication'],
    },
    {
      title: 'Databases & Caching',
      icon: Database,
      skills: ['PostgreSQL', 'SQL Server', 'Redis (caching, pub/sub, real-time state sync)'],
    },
    {
      title: 'Async Processing & Messaging',
      icon: Zap,
      skills: ['Celery', 'RabbitMQ', 'Task queues & background workers'],
    },
    {
      title: 'Performance & Scaling',
      icon: Activity,
      skills: ['Cache-first design', 'Concurrency control & race condition prevention', 'Real-time system optimization', 'Event-driven updates instead of polling'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Layers,
      skills: ['Docker', 'Azure', 'Cron jobs & scheduled background tasks', 'Microservices architecture'],
    },
    {
      title: 'Programming Languages',
      icon: MessageSquare,
      skills: ['Python', 'C#', 'C++', 'C', 'JavaScript / TypeScript'],
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0d1117] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-cyan-400 font-light">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 mb-12">
            Backend-focused toolkit for building scalable systems
          </p>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h3 className="text-xl text-gray-200 mb-6 font-light">Programming Languages</h3>
            <LogoLoop
              logos={languages}
              speed={80}
              direction="left"
              logoHeight={32}
              gap={40}
              fadeOut={true}
              fadeOutColor="#0d1117"
              pauseOnHover={true}
              className="rounded-lg"
            />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-lg text-gray-100">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-gray-400 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Frameworks Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl text-gray-200 mb-6 font-light">Frameworks & Tools</h3>
            <LogoLoop
              logos={toolsFrameworks}
              speed={100}
              direction="left"
              logoHeight={36}
              gap={48}
              fadeOut={true}
              fadeOutColor="#0d1117"
              pauseOnHover={true}
              className="rounded-lg"
            />
          </motion.div>
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