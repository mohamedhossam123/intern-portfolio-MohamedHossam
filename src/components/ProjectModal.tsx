// components/ProjectModal.tsx
import React, { FC, ReactNode, useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const ProjectModal: FC<ProjectModalProps> = memo(({ isOpen, onClose, title, children }) => {
  // const [isMinimized, setIsMinimized] = useState(false); // Removed unused state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to manage body overflow when modal is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    
    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId); 
      };
    }
  }, [isOpen]);

  const memoizedSparkles = React.useMemo(() => (
    <motion.div
      className="relative w-4 h-4"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <Sparkles className="w-full h-full text-cyan-400" />
    </motion.div>
  ), []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }} 
          onClick={onClose}
        >
          <motion.div
            className="fixed pointer-events-none z-[101] w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 opacity-30 blur-sm"
            style={{
              left: mousePosition.x - 12,
              top: mousePosition.y - 12,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <motion.div
            className="relative bg-black/40 border border-white/10 rounded-3xl shadow-2xl w-full max-w-6xl overflow-hidden backdrop-blur-2xl"
            initial={{ 
              y: 200, 
              opacity: 0, 
              scale: 0.8,
              rotateY: 15
            }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              scale: 1,
              rotateY: 0
            }}
            exit={{ 
              y: -200, 
              opacity: 0, 
              scale: 0.8,
              rotateY: -15
            }}
            transition={{ 
              type: "spring", 
              damping: 20,
              stiffness: 200, 
              mass: 0.8 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                {[...Array(10)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={Math.random() * 800}
                    cy={Math.random() * 600}
                    r="1"
                    fill="white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: Math.random() * 2 + 1, 
                      repeat: Infinity,
                      delay: Math.random() * 1.5 
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Holographic header */}
            <div className="relative border-b border-white/10 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  {memoizedSparkles} 
                  
                  <motion.h2 
                    className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }} 
                  >
                    {title}
                  </motion.h2>
                  
                  <motion.div
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }} 
                  >
                  </motion.div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={onClose}
                    className="p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 transition-all duration-300 backdrop-blur-sm border border-red-400/30"
                    whileHover={{ scale: 1.05, y: -2, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              </div>
              
              {/* Progress bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }} 
              />
            </div>

            {/* Content area */}
            <AnimatePresence>
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }} 
              >
                <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent">
                  <motion.div
                    className="p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }} 
                  >
                    {children}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Holographic footer */}
            <motion.div
              className="border-t border-white/10 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }} 
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-sm text-gray-500">
                  Neural Interface v2.1
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

ProjectModal.displayName = 'ProjectModal'; 
export default ProjectModal;