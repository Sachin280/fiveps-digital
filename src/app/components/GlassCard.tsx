import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        relative rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 
        border border-white/10 shadow-2xl overflow-hidden
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-50" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
