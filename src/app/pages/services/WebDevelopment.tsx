import { ServiceTemplate } from '../components/ServiceTemplate';
import { Code, Zap, Shield, Smartphone, Globe, TrendingUp } from 'lucide-react';

export default function WebDevelopment() {
  return (
    <ServiceTemplate
      breadcrumb="Web Development"
      title="Web Development"
      tagline="Build fast, secure, and scalable websites that convert visitors into customers"
      icon={<Code className="w-10 h-10 text-white" />}
      overview={{
        title: 'Modern Web Development Solutions',
        description: [
          'Your website is often the first impression customers have of your business. We build modern, responsive websites that not only look stunning but also perform flawlessly across all devices.',
          'Using the latest technologies and best practices, we create websites that are fast, secure, SEO-friendly, and optimized for conversions. From simple landing pages to complex e-commerce platforms, we deliver solutions that drive results.',
        ],
        image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzI0MjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      }}
      strategy={{
        title: 'Our Development Process',
        steps: [
          {
            number: '01',
            title: 'Discovery & Planning',
            description: 'We analyze your requirements, target audience, and business goals to create a detailed project roadmap.',
          },
          {
            number: '02',
            title: 'Design & Prototyping',
            description: 'Create wireframes and interactive prototypes to visualize the user experience before development.',
          },
          {
            number: '03',
            title: 'Development',
            description: 'Build your website using modern technologies with clean code, best practices, and scalability in mind.',
          },
          {
            number: '04',
            title: 'Testing & QA',
            description: 'Rigorous testing across devices, browsers, and platforms to ensure flawless functionality.',
          },
          {
            number: '05',
            title: 'Launch & Support',
            description: 'Deploy your website and provide ongoing maintenance, updates, and technical support.',
          },
        ],
      }}
      benefits={[
        {
          icon: <Zap className="w-7 h-7 text-white" />,
          title: 'Lightning Fast',
          description: 'Optimized for speed with sub-second load times.',
        },
        {
          icon: <Smartphone className="w-7 h-7 text-white" />,
          title: 'Fully Responsive',
          description: 'Perfect display on all devices and screen sizes.',
        },
        {
          icon: <Shield className="w-7 h-7 text-white" />,
          title: 'Secure & Reliable',
          description: 'Built with security best practices and SSL encryption.',
        },
        {
          icon: <Globe className="w-7 h-7 text-white" />,
          title: 'SEO Optimized',
          description: 'Built for search engines to rank higher organically.',
        },
        {
          icon: <TrendingUp className="w-7 h-7 text-white" />,
          title: 'Conversion Focused',
          description: 'Designed to turn visitors into customers.',
        },
        {
          icon: <Code className="w-7 h-7 text-white" />,
          title: 'Scalable Architecture',
          description: 'Built to grow with your business needs.',
        },
      ]}
      pricing={[
        {
          name: 'Landing Page',
          price: '$2,499',
          description: 'Single page website perfect for campaigns',
          features: [
            'Custom design',
            'Responsive layout',
            'Contact form',
            'Basic SEO',
            '2 rounds of revisions',
            '1 month support',
          ],
        },
        {
          name: 'Business Website',
          price: '$5,999',
          description: 'Multi-page website for businesses',
          features: [
            'Up to 10 pages',
            'Custom design & branding',
            'CMS integration',
            'Advanced SEO',
            'Analytics setup',
            'Contact forms',
            '3 months support',
          ],
          highlighted: true,
        },
        {
          name: 'E-commerce',
          price: 'Custom',
          description: 'Full-featured online store',
          features: [
            'Unlimited products',
            'Payment gateway integration',
            'Inventory management',
            'Customer accounts',
            'Order management',
            'Marketing tools',
            '6 months support',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How long does it take to build a website?',
          answer: 'Timeline varies based on complexity. A landing page typically takes 2-3 weeks, a business website 4-8 weeks, and an e-commerce site 8-12 weeks.',
        },
        {
          question: 'What platform do you use for development?',
          answer: 'We use modern technologies like React, Next.js, WordPress, and Shopify depending on your needs and preferences. We recommend the best solution for your specific requirements.',
        },
        {
          question: 'Will my website be mobile-friendly?',
          answer: 'Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops.',
        },
        {
          question: 'Do you provide ongoing maintenance?',
          answer: 'Yes! We offer maintenance packages that include updates, security monitoring, backups, and technical support.',
        },
        {
          question: 'Can you redesign my existing website?',
          answer: 'Yes, we specialize in website redesigns. We can modernize your existing site while preserving your SEO rankings and valuable content.',
        },
      ]}
    />
  );
}
