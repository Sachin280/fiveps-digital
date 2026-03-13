import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Check, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  
  const serviceName = serviceSlug
    ? serviceSlug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('And', '&')
    : '';

  const features = [
    'Strategic planning and consultation',
    'Custom campaign development',
    'Performance tracking and analytics',
    'Regular optimization and testing',
    'Dedicated account manager',
    'Monthly performance reports',
  ];

  const benefits = [
    {
      title: 'Increased ROI',
      description: 'Data-driven strategies that maximize your marketing investment.',
    },
    {
      title: 'Enhanced Visibility',
      description: 'Stand out in your market with compelling campaigns.',
    },
    {
      title: 'Better Engagement',
      description: 'Connect with your audience in meaningful ways.',
    },
    {
      title: 'Measurable Results',
      description: 'Track every metric that matters to your business.',
    },
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
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Link to="/services" className="text-sm text-white/80 hover:text-white">
                ← Back to Services
              </Link>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {serviceName}
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Transform your business with our expert {serviceName.toLowerCase()} solutions designed to drive real results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2MDYxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={serviceName}
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
                What's Included
              </h2>
              <p className="text-white/70 mb-8">
                Our {serviceName.toLowerCase()} service includes everything you need to succeed in today's competitive digital landscape.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our {serviceName}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/60">{benefit.description}</p>
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
