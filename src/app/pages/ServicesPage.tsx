import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
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
  Search,
  MousePointerClick,
  Settings,
} from 'lucide-react';

const allServices = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive strategies to boost your online presence and maximize ROI across all digital channels.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage audiences and build communities across all major social platforms with data-driven campaigns.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Compelling content strategies that drive engagement, build authority, and convert visitors.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Targeted email campaigns that nurture leads and deliver results directly to inboxes.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Smile,
    title: 'Meme Marketing',
    description: 'Viral content strategies leveraging trending memes for modern brand awareness.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Palette,
    title: 'Logo Design',
    description: 'Memorable brand identities and logos that stand out and resonate with your audience.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites built for performance, user experience, and conversions.',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    icon: User,
    title: 'Personal Branding',
    description: 'Build and amplify your unique personal presence in the digital world.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Figma,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love and that drive business results.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video content creation and editing for all platforms and purposes.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Strategic campaigns designed to convert prospects into qualified, sales-ready leads.',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    icon: Instagram,
    title: 'Instagram & Facebook Ads',
    description: 'High-converting paid social campaigns optimized for maximum ROI on Meta platforms.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Search,
    title: 'Google Ads',
    description: 'Strategic Google Ads campaigns that reach customers at the right moment.',
    gradient: 'from-blue-500 to-green-500',
  },
  {
    icon: MousePointerClick,
    title: 'Pay Per Click (PPC)',
    description: 'Cost-effective PPC campaigns across multiple platforms for instant visibility.',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Settings,
    title: 'SMM & Optimization',
    description: 'Continuous optimization of social media marketing for peak performance.',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export function ServicesPage() {
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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your brand and drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => {
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
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-white/60 mb-4">{service.description}</p>
                      <div className="text-blue-400 font-semibold flex items-center gap-2">
                        Learn More →
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
