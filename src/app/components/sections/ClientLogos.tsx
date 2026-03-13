import { motion } from 'motion/react';

export function ClientLogos() {
  const logos = [
    'Google',
    'Microsoft',
    'Amazon',
    'Meta',
    'Apple',
    'Netflix',
    'Spotify',
    'Adobe',
  ];

  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-center text-white/40 mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-white/40 hover:text-white/80 transition-colors text-2xl font-bold"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
