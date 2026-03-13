import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const projects = [
  {
    title: 'E-commerce Redesign',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2ODExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media Marketing',
    image: 'https://images.unsplash.com/photo-1653592149064-369a7166eb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHBob25lfGVufDF8fHx8MTc3MjY4NDU1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Brand Identity',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsb2dvJTIwYnJhbmR8ZW58MXx8fHwxNzcyNjg0NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Creative Workspace',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2MDYxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function PortfolioSection() {
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
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Explore our latest work and success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-white/60 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
