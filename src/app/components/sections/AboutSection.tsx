import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { Award, Users, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in digital marketing',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '30+ certified professionals',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Target,
      title: 'Result Driven',
      description: '95% client satisfaction rate',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround on all projects',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">FivePS Digital</span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              We're a team of passionate digital marketers, designers, and developers dedicated to helping businesses thrive in the digital age.
            </p>
            <p className="text-white/60 mb-8">
              Since 2015, we've helped over 500 companies transform their online presence through innovative strategies and cutting-edge solutions. Our data-driven approach ensures every campaign delivers measurable results.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-white/60">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GlassCard className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737729991003-521d47240eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzI2MDc1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team working"
                className="w-full h-[500px] object-cover"
              />
            </GlassCard>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
