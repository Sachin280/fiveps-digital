import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Research & Analysis',
    description: 'We dive deep into your market, competitors, and audience to understand the landscape.',
    number: '01',
  },
  {
    icon: Lightbulb,
    title: 'Strategy Development',
    description: 'Crafting a custom roadmap aligned with your business goals and target audience.',
    number: '02',
  },
  {
    icon: Rocket,
    title: 'Execution',
    description: 'Implementing campaigns with precision, creativity, and attention to detail.',
    number: '03',
  },
  {
    icon: BarChart,
    title: 'Monitor & Optimize',
    description: 'Continuous tracking and refinement to maximize ROI and performance.',
    number: '04',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full relative">
                  <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
