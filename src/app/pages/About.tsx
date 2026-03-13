import { motion } from 'motion/react';
import { Target, Users, Zap, Award, TrendingUp, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive real business growth.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We build long-term partnerships based on trust.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of trends and leverage cutting-edge strategies.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project and campaign we deliver.',
    },
  ];
abcdef
  const team = [
    {
      name: 'Pankaj Yadav',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MjQ1OTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Sudarshan Chauhan',
      role: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNDMzNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Nishika Mehndiratta',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1758468772760-837fb2cde7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNDg1NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Vansika Yadav',
      role: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzI0MjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Yogesh Ridhal',
      role: 'AS Manager',
      image: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MjQ1OTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Sachin Yadav',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNDMzNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Jagan Yadav',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1758468772760-837fb2cde7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNDg1NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Anurag Bishnoi',
      role: 'Creative Video Editor',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzI0MjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const milestones = [
    { year: '2022', title: 'Founded', description: 'Started with a vision to transform digital marketing' },
    { year: '2024', title: '30+ Clients', description: 'Expanded our client base across industries' },
    { year: '2025', title: 'Award Winning', description: 'Recognized as Best Digital Agency' },
    { year: '2026', title: '300+ Projects', description: 'Successfully delivered projects worldwide' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
              <span className="text-[#3B82F6] text-sm font-semibold">About Us</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              We Transform Brands Through{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A passionate team of digital experts dedicated to delivering exceptional results and building lasting partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#111827]/30">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>Founded in 2022–23, FivePS Digital was established with a clear vision: to help businesses grow in the digital world through innovative strategies, creative marketing, and powerful online solutions.
</p><p>
What started as a focused and passionate team has quickly grown into a dedicated group of digital professionals committed to delivering high-quality services to businesses across different industries.
</p><p>
Today, we aim to help companies strengthen their online presence, generate quality leads, and build strong digital brands through modern websites, strategic marketing, and result-driven solutions.
                  </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-3xl blur-2xl opacity-30" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1726594701749-04cfbc6e2007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NzI0NDQ2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Our Team"
                  className="relative rounded-3xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-center hover:border-[#3B82F6]/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#111827]/30">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-white/60">{milestone.description}</p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="absolute top-1/2 right-0 translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-[#3B82F6]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-8 text-center">
            {[
              { number: '300+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '30+', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
