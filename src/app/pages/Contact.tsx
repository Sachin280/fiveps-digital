import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <span className="text-[#3B82F6] text-sm font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to take your digital marketing to the next level? Contact us today for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-[#0D0D0D] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-[#0D0D0D] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#0D0D0D] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-[#0D0D0D] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-xl hover:shadow-2xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Have a question or need assistance? Our team is here to help. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                    <a href="mailto:info@fiveps.in" className="text-white/70 hover:text-[#3B82F6] transition-colors">
                      info@fiveps.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                    <a href="tel:+919350612825" className="text-white/70 hover:text-[#8B5CF6] transition-colors">
                      +91 93506 12825
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Office</h3>
                    <p className="text-white/70">
                      Suncity Block A<br />
                      Rewari, Haryana<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 bg-[#111827]/50">
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  <MapPin className="w-12 h-12 mr-3" />
                  <span>Map View - Suncity Block A, Rewari, Haryana</span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-2xl border border-white/10">
                <h3 className="text-white font-semibold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-white/40">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Prefer a Quick Call?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation with our team
            </p>
            <button className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-lg rounded-full hover:shadow-2xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105">
              <Phone className="w-6 h-6" />
              Book a Call
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
