import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Share2,
  FileText,
  Mail,
  Laugh,
  Palette,
  Code,
  Users,
  Layout,
  Video,
  Target,
  Instagram,
  Globe,
  MousePointer,
  Settings,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that drive traffic, generate leads, and increase revenue through data-driven campaigns.',
      path: '/services/digital-marketing',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      features: ['SEO Optimization', 'Analytics & Reporting', 'Campaign Strategy'],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build a strong social presence and engage your audience with creative content and targeted campaigns across all major platforms.',
      path: '/services/social-media-marketing',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
      features: ['Content Creation', 'Community Management', 'Influencer Marketing'],
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Compelling content that tells your brand story, educates your audience, and drives conversions through strategic storytelling.',
      path: '/services/content-marketing',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      features: ['Blog Writing', 'Video Content', 'Infographics'],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Personalized email campaigns that nurture leads, retain customers, and drive repeat business with high ROI.',
      path: '/services/email-marketing',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
      features: ['Campaign Design', 'List Segmentation', 'A/B Testing'],
    },
    {
      icon: Laugh,
      title: 'Meme Marketing',
      description: 'Viral-worthy meme marketing that captures attention, drives engagement, and makes your brand relatable to younger audiences.',
      path: '/services/meme-marketing',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      features: ['Viral Content', 'Trend Leveraging', 'Brand Awareness'],
    },
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Memorable logo designs that capture your brand essence and make a lasting impression on your target audience.',
      path: '/services/logo-design',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
      features: ['Brand Identity', 'Multiple Concepts', 'Unlimited Revisions'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fast, secure, and scalable websites built with modern technologies that deliver exceptional user experiences.',
      path: '/services/web-development',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration'],
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Intuitive and beautiful interfaces that enhance user experience and drive engagement through thoughtful design.',
      path: '/services/ui-ux-design',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
      features: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing that transforms raw footage into compelling stories that captivate and convert your audience.',
      path: '/services/video-editing',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      features: ['Motion Graphics', 'Color Grading', 'Sound Design'],
    },
    {
      icon: Users,
      title: 'Personal Branding',
      description: 'Build a powerful personal brand that establishes authority, attracts opportunities, and opens doors to success.',
      path: '/services/personal-branding',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
      features: ['Brand Strategy', 'Content Planning', 'Reputation Management'],
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Strategic lead generation campaigns that attract qualified prospects and fill your sales pipeline with opportunities.',
      path: '/services/lead-generation',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      features: ['Landing Pages', 'Lead Magnets', 'CRM Integration'],
    },
    {
      icon: Instagram,
      title: 'Instagram & Facebook Ads',
      description: 'High-performing ad campaigns on Meta platforms that reach your ideal customers and drive measurable results.',
      path: '/services/instagram-facebook-ads',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
      features: ['Ad Creative', 'Audience Targeting', 'Campaign Optimization'],
    },
    {
      icon: Globe,
      title: 'Google Ads',
      description: 'Strategic Google Ads campaigns that put your business at the top of search results and drive qualified traffic.',
      path: '/services/google-ads',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      features: ['Search Ads', 'Display Network', 'Shopping Campaigns'],
    },
    {
      icon: MousePointer,
      title: 'Pay Per Click (PPC)',
      description: 'ROI-focused PPC campaigns across multiple platforms that maximize your advertising budget and drive conversions.',
      path: '/services/ppc',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
      features: ['Bid Management', 'Keyword Research', 'Conversion Tracking'],
    },
    {
      icon: Settings,
      title: 'SMM & Optimization',
      description: 'Complete social media management and optimization services that grow your following and increase engagement.',
      path: '/services/smm-optimization',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      features: ['Profile Optimization', 'Content Calendar', 'Performance Analytics'],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111827] to-[#0D0D0D]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <span className="text-[#3B82F6] text-sm font-semibold">Our Services</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Complete{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital marketing services that drive real business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                >
                  <Link
                    to={service.path}
                    className="group block h-full p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/50 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <span className="text-[#3B82F6] flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#111827]/30">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We combine creativity, technology, and data to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Experienced professionals dedicated to your success',
              },
              {
                title: 'Proven Results',
                description: 'Track record of delivering measurable outcomes',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored strategies for your unique business needs',
              },
              {
                title: '24/7 Support',
                description: 'Always here to help when you need us',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-16 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-3xl border border-white/10"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss which services are right for your business
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
