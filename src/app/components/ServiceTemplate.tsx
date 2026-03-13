import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceTemplateProps {
  breadcrumb: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  overview: {
    title: string;
    description: string[];
    image: string;
  };
  strategy: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  pricing: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function ServiceTemplate({
  breadcrumb,
  title,
  tagline,
  icon,
  overview,
  strategy,
  benefits,
  pricing,
  faqs,
}: ServiceTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111827] to-[#0D0D0D]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 mb-6">
              <Link to="/" className="hover:text-[#3B82F6] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/services" className="hover:text-[#3B82F6] transition-colors">
                Services
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{breadcrumb}</span>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h1 className="text-6xl font-bold text-white leading-tight">{title}</h1>
              </div>
            </div>
            <p className="text-2xl text-white/70 max-w-3xl">{tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">{overview.title}</h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                {overview.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-3xl blur-2xl opacity-30" />
                <ImageWithFallback
                  src={overview.image}
                  alt={title}
                  className="relative rounded-3xl w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy / Process */}
      <section className="py-24 bg-[#111827]/30">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">{strategy.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {strategy.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Key Benefits</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              What you'll achieve with our {title.toLowerCase()} services
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-[#111827]/30">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Pricing Plans</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Choose the perfect plan for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-3xl border ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 border-[#3B82F6] scale-105'
                    : 'bg-white/5 backdrop-blur-sm border-white/10'
                } transition-all duration-300 hover:scale-105`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-white/60">/month</span>}
                </div>
                <p className="text-white/60 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full py-4 text-center rounded-xl transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white hover:shadow-2xl hover:shadow-[#3B82F6]/50'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#3B82F6] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white/60 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {title.toLowerCase()} services can help grow your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-lg rounded-full hover:shadow-2xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
