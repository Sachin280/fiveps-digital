import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: 'The Future of Digital Marketing: AI and Automation Trends for 2026',
    excerpt: 'Discover how artificial intelligence and automation are reshaping the digital marketing landscape and what it means for your business strategy.',
    category: 'Digital Marketing',
    date: 'March 1, 2026',
    author: 'Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1705484228982-fd9655904a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI1Mjg4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '8 min read',
  };

  const blogPosts = [
    {
      id: 2,
      title: '10 Social Media Marketing Strategies That Actually Work',
      excerpt: 'Learn proven tactics to boost engagement and grow your audience on social media platforms.',
      category: 'Social Media',
      date: 'February 28, 2026',
      author: 'David Chen',
      image: 'https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MjUyNzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'How to Create a High-Converting Landing Page',
      excerpt: 'Essential elements and best practices for designing landing pages that convert visitors into customers.',
      category: 'Web Design',
      date: 'February 25, 2026',
      author: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzI0MjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Email Marketing: Building Campaigns That Drive Results',
      excerpt: 'Master the art of email marketing with these proven strategies for higher open and click-through rates.',
      category: 'Email Marketing',
      date: 'February 22, 2026',
      author: 'Sarah Mitchell',
      image: 'https://images.unsplash.com/photo-1629124096116-48743a0cea58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyNTEwMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'SEO Best Practices for 2026: What You Need to Know',
      excerpt: 'Stay ahead of the curve with the latest SEO strategies and algorithm updates.',
      category: 'SEO',
      date: 'February 20, 2026',
      author: 'Alex Kumar',
      image: 'https://images.unsplash.com/photo-1726594701749-04cfbc6e2007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NzI0NDQ2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Content Marketing 101: Creating Valuable Content',
      excerpt: 'Learn how to create content that resonates with your audience and drives business growth.',
      category: 'Content Marketing',
      date: 'February 18, 2026',
      author: 'David Chen',
      image: 'https://images.unsplash.com/photo-1758468772760-837fb2cde7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNDg1NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 min read',
    },
    {
      id: 7,
      title: 'Mastering Google Ads: A Complete Guide',
      excerpt: 'Everything you need to know about creating and optimizing successful Google Ads campaigns.',
      category: 'PPC',
      date: 'February 15, 2026',
      author: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjQyNjE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '10 min read',
    },
  ];

  const categories = [
    'All Posts',
    'Digital Marketing',
    'Social Media',
    'Web Design',
    'SEO',
    'Content Marketing',
    'PPC',
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111827] to-[#0D0D0D]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <span className="text-[#3B82F6] text-sm font-semibold">Our Blog</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Insights &{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Expert tips, industry trends, and actionable strategies to grow your business
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-14 pr-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white/5 hover:bg-[#3B82F6] border border-white/10 hover:border-[#3B82F6] rounded-full text-white/70 hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to={`/blog/${featuredPost.id}`} className="group block">
              <div className="grid grid-cols-2 gap-12 items-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-[#3B82F6] text-white rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>

                <div>
                  <span className="inline-block px-3 py-1 bg-[#8B5CF6]/20 rounded-full text-[#8B5CF6] text-sm mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-4xl font-bold text-white mb-4 group-hover:text-[#3B82F6] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/70 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-white/60 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[#3B82F6] group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-[#111827]/30">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="group block h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#3B82F6]/50 overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#3B82F6]/80 backdrop-blur-sm rounded-full text-white text-sm">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/60 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#3B82F6] group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full ${
                  page === 1
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                } transition-all duration-300`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
