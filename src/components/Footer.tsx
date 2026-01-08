import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Footer() {
  const links = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/mohamedhossam123' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-hossam-070a1332a/' },
    { icon: Mail, label: 'Email', href: 'mailto:mohamedhossam25709@gmail.com' },
    { icon: FileText, label: 'Resume', href: '/CvMohamedHossam67 (1).docx' },
  ];

  return (
    <footer className="py-16 px-6 bg-[#0d1117] border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl text-gray-100 mb-6">Let's Connect</h3>
          
          <div className="flex justify-center gap-6 mb-8">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <link.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </motion.a>
            ))}
          </div>

          <p className="text-gray-500 text-sm mb-2">
            Open to backend engineering opportunities
          </p>
          
          <p className="text-gray-600 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>

          {/* Subtle closing element */}
          <div className="mt-12">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mx-auto mb-6"></div>
            <div className="text-xs text-gray-600 tracking-wider">
              © 2026 — Backend Engineer Portfolio [Mohamed Hossam]
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
