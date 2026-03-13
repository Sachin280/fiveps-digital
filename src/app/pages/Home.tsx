import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight,
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
  Star,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function Home() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to boost your online presence and drive measurable results.',
      path: '/services/digital-marketing',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build a powerful brand presence across all social platforms.',
      path: '/services/social-media-marketing',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      path: '/services/web-development',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create exceptional user experiences.',
      path: '/services/ui-ux-design',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Strategic campaigns that attract and convert high-quality leads.',
      path: '/services/lead-generation',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
    },
    {
      icon: Instagram,
      title: 'Instagram & Facebook Ads',
      description: 'Targeted ad campaigns that maximize ROI and reach your ideal customers.',
      path: '/services/instagram-facebook-ads',
      gradient: 'from-[#8B5CF6] to-[#3B82F6]',
    },
  ];

  const stats = [
    { number: '250+', label: 'Projects Completed' },
    { number: '120+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Growth Strategy',
      category: 'Digital Marketing',
      result: '300% Revenue Increase',
      image: 'https://images.unsplash.com/photo-1629124096116-48743a0cea58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyNTEwMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Brand Identity Redesign',
      category: 'UI/UX Design',
      result: '200% User Engagement',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjQyNjE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Social Media Campaign',
      category: 'Social Media Marketing',
      result: '500K+ Reach',
      image: 'https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MjUyNzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'GrowthGride transformed our digital presence. Their strategic approach and dedication resulted in a 250% increase in qualified leads.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StyleHub',
      content: 'The team\'s creativity and professionalism exceeded our expectations. Our brand visibility has never been better!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, FitLife',
      content: 'Outstanding results! Their data-driven strategies and transparent communication made all the difference.',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111827] to-[#0D0D0D]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                <span className="text-[#3B82F6] text-sm font-semibold">🚀 #1 Digital Marketing Agency</span>
              </div>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                We Scale Brands with{' '}
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                  Smart Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Performance-driven marketing strategies that generate leads and increase revenue.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-full hover:shadow-2xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#"
                  className="px-8 py-4 border-2 border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-3xl blur-3xl opacity-30" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739798790686-e725924d5f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNEJTIwdGVjaG5vbG9neSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzI1Mjg4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital Marketing Illustration"
                  className="relative rounded-3xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-[#111827]/30 relative">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Comprehensive digital solutions to grow your business
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={service.path}
                    className="group block h-full p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-white/60 mb-4">{service.description}</p>
                    <span className="text-[#3B82F6] flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#3B82F6] text-[#3B82F6] rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/10 rounded-full blur-[150px]" />
        
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] rounded-3xl blur-2xl opacity-30" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1726594701749-04cfbc6e2007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NzI0NDQ2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Creative Team"
                  className="relative rounded-3xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Results-Driven{' '}
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                  Digital Agency
                </span>
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                We are a passionate team of digital marketing experts dedicated to helping businesses thrive in the digital landscape. Our data-driven approach and creative solutions deliver measurable results.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-full hover:shadow-2xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-[#111827]/30">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Case Studies</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Real results from real clients
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent z-10" />
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-[#3B82F6]/20 backdrop-blur-sm rounded-full text-[#3B82F6] text-sm mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-[#8B5CF6] font-semibold">{study.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[150px]" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#3B82F6] text-[#3B82F6]" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20" />
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-6xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital marketing goals
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
