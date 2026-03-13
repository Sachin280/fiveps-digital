import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  'Digital Marketing',
  'Social Media Marketing',
  'Content Marketing',
  'Email Marketing',
  'Meme Marketing',
  'Logo Design',
  'Web Development',
  'Personal Branding',
  'UI/UX Design',
  'Video Editing',
  'Lead Generation',
  'Instagram & Facebook Ads',
  'Google Ads',
  'Pay Per Click (PPC)',
  'SMM & Optimization',
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DigitalPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Services Mega Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-[#0B0B0F]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service) => (
                            <Link
                              key={service}
                              to={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                              className="px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-white/70 hover:text-white text-sm"
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-1 mt-2">
                      {services.slice(0, 5).map((service) => (
                        <Link
                          key={service}
                          to={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg"
                        >
                          {service}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-blue-400 hover:text-blue-300"
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full mt-4 px-6 py-3 text-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
