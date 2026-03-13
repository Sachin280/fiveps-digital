import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function BlogPost() {
  const { id } = useParams();

  // Mock blog post data
  const post = {
    title: 'The Future of Digital Marketing: AI and Automation Trends for 2026',
    excerpt: 'Discover how artificial intelligence and automation are reshaping the digital marketing landscape.',
    category: 'Digital Marketing',
    date: 'March 1, 2026',
    author: 'Sarah Mitchell',
    authorRole: 'Head of Strategy',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1705484228982-fd9655904a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI1Mjg4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  };

  const relatedPosts = [
    {
      id: 2,
      title: '10 Social Media Marketing Strategies That Actually Work',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MjUyNzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'How to Create a High-Converting Landing Page',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzI0MjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: 'Email Marketing: Building Campaigns That Drive Results',
      category: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1629124096116-48743a0cea58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyNTEwMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#3B82F6] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#3B82F6]/20 rounded-full text-[#3B82F6] text-sm font-semibold mb-6">
              {post.category}
            </span>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-6 text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4">
              <span className="text-white/60">Share:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3B82F6] border border-white/10 flex items-center justify-center transition-all duration-300 group">
                  <Facebook className="w-5 h-5 text-white/60 group-hover:text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3B82F6] border border-white/10 flex items-center justify-center transition-all duration-300 group">
                  <Twitter className="w-5 h-5 text-white/60 group-hover:text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3B82F6] border border-white/10 flex items-center justify-center transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3B82F6] border border-white/10 flex items-center justify-center transition-all duration-300 group">
                  <Share2 className="w-5 h-5 text-white/60 group-hover:text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p className="text-xl text-white/90">
                Artificial Intelligence and automation are no longer futuristic concepts—they're here, transforming the way businesses approach digital marketing. As we navigate through 2026, these technologies are becoming essential tools for marketers who want to stay competitive.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Rise of AI in Marketing</h2>
              <p>
                AI has evolved from a buzzword to a practical necessity. Machine learning algorithms now analyze consumer behavior patterns with unprecedented accuracy, enabling marketers to create highly personalized campaigns that resonate with their target audience.
              </p>
              <p>
                From predictive analytics to chatbots that provide 24/7 customer support, AI is helping businesses work smarter, not harder. The technology can process vast amounts of data in seconds, uncovering insights that would take humans weeks or months to discover.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Automation: Your New Marketing Assistant</h2>
              <p>
                Marketing automation platforms have become increasingly sophisticated. They can now handle complex, multi-channel campaigns with minimal human intervention. This doesn't mean marketers are being replaced—instead, they're being freed up to focus on strategy and creativity.
              </p>
              <p>
                Email marketing automation has advanced to the point where campaigns can adapt in real-time based on user behavior. Social media posts can be scheduled, optimized, and even generated with AI assistance. Ad campaigns can automatically adjust bids and targeting to maximize ROI.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Trends to Watch</h2>
              <ul className="space-y-3 text-white/80">
                <li><strong>Conversational AI:</strong> Chatbots and voice assistants are becoming more natural and helpful</li>
                <li><strong>Predictive Analytics:</strong> Better forecasting of customer behavior and market trends</li>
                <li><strong>Hyper-Personalization:</strong> AI-driven content customization at scale</li>
                <li><strong>Automated Content Creation:</strong> AI assistance in generating marketing copy and visuals</li>
                <li><strong>Smart Bidding:</strong> AI-optimized ad spend across platforms</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Implementing AI in Your Strategy</h2>
              <p>
                The key to successfully implementing AI and automation is starting small and scaling gradually. Begin with one or two use cases that address your biggest pain points, measure the results, and expand from there.
              </p>
              <p>
                Remember that AI is a tool to enhance human creativity and strategy, not replace it. The most successful marketing teams will be those that find the right balance between technology and human insight.
              </p>

              <div className="p-8 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-2xl border border-white/10 my-12">
                <p className="text-lg italic text-white">
                  "The future of marketing isn't about choosing between human creativity and AI—it's about leveraging both to create campaigns that are more effective, efficient, and engaging than ever before."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
              <p>
                As we move further into 2026, AI and automation will continue to reshape the digital marketing landscape. Businesses that embrace these technologies while maintaining a human touch will be best positioned to succeed. The question isn't whether to adopt AI and automation—it's how quickly you can integrate them into your marketing strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-[900px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              SM
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{post.author}</h3>
              <p className="text-[#3B82F6] mb-3">{post.authorRole}</p>
              <p className="text-white/70">
                Sarah is a digital marketing strategist with over 10 years of experience helping brands grow their online presence. She specializes in AI-driven marketing strategies and data analytics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-[#111827]/30">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Related Articles</h2>
            <p className="text-white/60 text-lg">Continue reading</p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#3B82F6]/50 overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#3B82F6]/80 backdrop-blur-sm rounded-full text-white text-sm">
                      {relatedPost.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-3xl border border-white/10"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Marketing?</h2>
            <p className="text-white/70 text-lg mb-8">
              Let's discuss how we can help you implement AI and automation in your marketing strategy
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-full hover:shadow-2xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
