import { motion } from 'motion/react';

export function SystemFlowRail({ align = 'right' }: { align?: 'left' | 'right' }) {
  const sideClass = align === 'right' ? 'right-12' : 'left-12';

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${sideClass} top-0 bottom-0 w-[2px]`}
    >
      {/* Vertical connector line */}
      <motion.div
        className="h-full bg-cyan-400/40"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.2, 0.0, 0.2, 1] }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Boundary node */}
      <motion.div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400/70 shadow-[0_0_0_8px_rgba(34,211,238,0.15)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: [1, 1.2, 1] }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
    </div>
  );
}

export default SystemFlowRail;
