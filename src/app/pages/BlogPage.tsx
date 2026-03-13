import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const blogPosts = [
  {
    title: '10 Digital Marketing Trends to Watch in 2026',
    excerpt: 'Stay ahead of the curve with these emerging trends shaping the digital marketing landscape. From AI-powered personalization to voice search optimization.',
    date: 'March 1, 2026',
    author: 'Sarah Johnson',
    category: 'Marketing Trends',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1653592149064-369a7166eb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHBob25lfGVufDF8fHx8MTc3MjY4NDU1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    title: 'The Complete Guide to Social Media ROI',
    excerpt: 'Learn how to measure and maximize your social media investment with proven strategies and tools that deliver results.',
    date: 'February 28, 2026',
    author: 'Mike Chen',
    category: 'Social Media',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNjQ5Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    title: 'Building a Strong Brand Identity Online',
    excerpt: 'Discover the key elements of creating a memorable brand that resonates with your audience in the digital age.',
    date: 'February 25, 2026',
    author: 'Emma Rodriguez',
    category: 'Branding',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1570649243616-238b814943e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MjU5MjEwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    title: 'How to Create Viral Content in 2026',
    excerpt: 'Master the art of creating content that spreads like wildfire across social media platforms.',
    date: 'February 20, 2026',
    author: 'John Smith',
    category: 'Content Marketing',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2MDYxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    title: 'Email Marketing Best Practices',
    excerpt: 'Boost your email open rates and conversions with these proven tactics and strategies.',
    date: 'February 15, 2026',
    author: 'Sarah Johnson',
    category: 'Email Marketing',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2ODExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    title: 'The Future of AI in Marketing',
    excerpt: 'Explore how artificial intelligence is revolutionizing marketing strategies and customer experiences.',
    date: 'February 10, 2026',
    author: 'Mike Chen',
    category: 'Technology',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsb2dvJTIwYnJhbmR8ZW58MXx8fHwxNzcyNjg0NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
];

export function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help you succeed in the digital world.
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <GlassCard className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-sm text-blue-400 mb-2">{featuredPost.category}</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/70 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-white/60 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="group overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-sm text-blue-400 mb-2">{post.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/60 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
