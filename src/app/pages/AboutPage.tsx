import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Award, Users, Target, TrendingUp, Heart, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build long-term partnerships.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge strategies and technologies.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Data-backed decisions that deliver measurable outcomes.',
    },
    {
      icon: Globe,
      title: 'Transparency',
      description: 'Clear communication and honest reporting at every step.',
    },
  ];

  const team = [
    { name: 'John Smith', role: 'CEO & Founder', initials: 'JS' },
    { name: 'Sarah Williams', role: 'Creative Director', initials: 'SW' },
    { name: 'Mike Johnson', role: 'Head of Strategy', initials: 'MJ' },
    { name: 'Emma Davis', role: 'Lead Developer', initials: 'ED' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We're a team of passionate digital experts dedicated to helping businesses thrive in the ever-evolving digital landscape.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737729991003-521d47240eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzI2MDc1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our office"
                  className="w-full h-[500px] object-cover"
                />
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Founded in 2015, DigitalPro started with a simple mission: to help businesses succeed in the digital age through innovative marketing strategies and creative excellence.
                </p>
                <p>
                  What began as a small team of three has grown into a powerhouse of 50+ digital experts serving clients across the globe. Our success is built on a foundation of trust, transparency, and tangible results.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses transform their digital presence, generating millions in revenue and building lasting partnerships along the way.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="text-white/60">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-white/60">Team Members</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6 text-center">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-white/60">{value.description}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-white/60">{member.role}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
