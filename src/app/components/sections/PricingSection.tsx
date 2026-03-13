import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '999',
    description: 'Perfect for small businesses getting started',
    features: [
      'Social Media Management (2 platforms)',
      'Content Creation (8 posts/month)',
      'Monthly Analytics Report',
      'Email Support',
      'Basic SEO Optimization',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '2,499',
    description: 'Ideal for growing businesses',
    features: [
      'Social Media Management (4 platforms)',
      'Content Creation (20 posts/month)',
      'Weekly Analytics Reports',
      'Priority Support',
      'Advanced SEO & PPC',
      'Dedicated Account Manager',
      'Monthly Strategy Call',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited Social Media Management',
      'Custom Content Creation',
      'Real-time Analytics Dashboard',
      '24/7 Priority Support',
      'Full Digital Marketing Suite',
      'Dedicated Team',
      'Custom Solutions',
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2  -translate-x-1/2 px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <GlassCard className={`p-8 h-full ${plan.popular ? 'border-2 border-blue-500/50' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-6">{plan.description}</p>
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl font-bold text-white">Custom</div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-white/60 ml-2">/month</span>
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full py-3 rounded-full text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-purple-500/50'
                      : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  Get Started
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
