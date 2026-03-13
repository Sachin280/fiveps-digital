import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Share2,
  FileText,
  Mail,
  Smile,
  Palette,
  Code,
  User,
  Figma,
  Video,
  Target,
  Instagram,
} from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive strategies to boost your online presence and ROI.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage audiences across all major social platforms.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Compelling content that drives engagement and conversions.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Targeted campaigns that deliver results directly to inboxes.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Smile,
    title: 'Meme Marketing',
    description: 'Viral content strategies for modern brand awareness.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Palette,
    title: 'Logo Design',
    description: 'Memorable brand identities that stand out.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites built for performance.',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    icon: User,
    title: 'Personal Branding',
    description: 'Build your unique presence in the digital world.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Figma,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces users love.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video content for all platforms.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Convert prospects into qualified leads.',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    icon: Instagram,
    title: 'Instagram & Facebook Ads',
    description: 'High-converting ad campaigns on social media.',
    gradient: 'from-purple-600 to-pink-600',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                  <GlassCard className="p-6 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-white/60">{service.description}</p>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
