import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';

export function Footer() {
  const services = [
    'Digital Marketing',
    'Social Media Marketing',
    'Web Development',
    'UI/UX Design',
    'Video Editing',
    'Lead Generation',
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0B0B0F] to-black border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-xl">D</span> */}
                 <img src="src/assests/LOGO WITHOUT TEXT-01.png" alt="FIVEPS Digital LOGO" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FivePS Digital
              </span>
            </Link>
            <p className="text-white/60 mb-6">
              Transform your digital presence with our cutting-edge marketing solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Fivepsdigital.in"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Fiveps_digital"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fiveps.digital?igsh=ZW4xNzZnYnZoeTIx"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/fiveps-digital/"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@fivepsdigital?si=ygik8x5ejnTNOSTf"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:underline hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className=" hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 ">Contact Us</h3>
         <ul className="space-y-3">
  <li className="flex items-start gap-3 ">
    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
    <span>
      SCO A-03, 1st Floor, Above Suncity Projects Office, Sector 6, Suncity, Rewari - 123401
    </span>
  </li>

  <li className="flex items-center gap-3 text-white">
    <Phone className="w-5 h-5 flex-shrink-0" />
    <a
      href="tel:+919350612825"
      className="hover:text-white hover:underline transition"
    >
      +91 9350612825
    </a>
  </li>

  <li className="flex items-center gap-3 text-white">
    <Mail className="w-5 h-5 flex-shrink-0" />
    <a
      href="mailto:info@fiveps.in"
      className="hover:text-white hover:underline transition"
    >
      info@fiveps.in
    </a>
  </li>
</ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white">
          <p>&copy; 2026 FivePS Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
