import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const blogPosts = [
  {
    title: '10 Digital Marketing Trends to Watch in 2026',
    excerpt: 'Stay ahead of the curve with these emerging trends shaping the digital landscape.',
    date: 'March 1, 2026',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1653592149064-369a7166eb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHBob25lfGVufDF8fHx8MTc3MjY4NDU1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'The Complete Guide to Social Media ROI',
    excerpt: 'Learn how to measure and maximize your social media investment effectively.',
    date: 'February 28, 2026',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNjQ5Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Building a Strong Brand Identity Online',
    excerpt: 'Discover the key elements of creating a memorable brand in the digital age.',
    date: 'February 25, 2026',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1570649243616-238b814943e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MjU5MjEwOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function BlogPreview() {
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
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Expert tips, strategies, and industry insights from our team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to="/blog">
                <GlassCard className="group overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                      <span className="text-blue-400">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/60 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
