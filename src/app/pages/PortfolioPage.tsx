import { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = ['All', 'Web Development', 'Social Media', 'Branding', 'UI/UX Design'];

const projects = [
  {
    title: 'E-commerce Platform Redesign',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2ODExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete redesign of an e-commerce platform, increasing conversions by 150%',
    results: '+150% Conversions',
  },
  {
    title: 'Social Media Campaign - Fashion Brand',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1653592149064-369a7166eb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHBob25lfGVufDF8fHx8MTc3MjY4NDU1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Viral social media campaign reaching 5M+ users across platforms',
    results: '5M+ Reach',
  },
  {
    title: 'Tech Startup Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsb2dvJTIwYnJhbmR8ZW58MXx8fHwxNzcyNjg0NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete brand identity and visual system for innovative tech startup',
    results: 'Award Winning',
  },
  {
    title: 'SaaS Dashboard Design',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2MDYxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Intuitive dashboard design improving user engagement by 200%',
    results: '+200% Engagement',
  },
  {
    title: 'Mobile App Development',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1570649243616-238b814943e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MjU5MjEwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Native mobile app with 50k+ downloads in first month',
    results: '50k+ Downloads',
  },
  {
    title: 'Instagram Growth Strategy',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNjQ5Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Organic growth strategy adding 100k followers in 3 months',
    results: '+100k Followers',
  },
];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Explore our latest work and success stories from satisfied clients worldwide.
            </p>
          </motion.div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold">
                      {project.results}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-white/60 mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-white/60">{project.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
