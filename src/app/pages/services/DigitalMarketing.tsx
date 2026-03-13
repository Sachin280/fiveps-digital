import { ServiceTemplate } from '../components/ServiceTemplate';
import { TrendingUp, Target, BarChart3, Zap, Users, Award } from 'lucide-react';

export default function DigitalMarketing() {
  return (
    <ServiceTemplate
      breadcrumb="Digital Marketing"
      title="Digital Marketing"
      tagline="Drive growth with data-driven digital marketing strategies that deliver real results"
      icon={<TrendingUp className="w-10 h-10 text-white" />}
      overview={{
        title: 'Comprehensive Digital Marketing Solutions',
        description: [
          'In today\'s digital-first world, having a strong online presence is essential for business success. Our comprehensive digital marketing services help you reach your target audience, drive qualified traffic, and convert visitors into loyal customers.',
          'We combine SEO, content marketing, social media, and paid advertising into cohesive strategies that deliver measurable results. Our data-driven approach ensures every marketing dollar is optimized for maximum ROI.',
          'From startups to established enterprises, we\'ve helped hundreds of businesses achieve their digital marketing goals and scale their online presence.',
        ],
        image: 'https://images.unsplash.com/photo-1705484228982-fd9655904a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI1Mjg4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      }}
      strategy={{
        title: 'Our Digital Marketing Process',
        steps: [
          {
            number: '01',
            title: 'Research & Analysis',
            description: 'We dive deep into your business, industry, competitors, and target audience to understand your unique challenges and opportunities.',
          },
          {
            number: '02',
            title: 'Strategy Development',
            description: 'Based on our research, we create a customized digital marketing strategy aligned with your business goals and budget.',
          },
          {
            number: '03',
            title: 'Campaign Execution',
            description: 'Our expert team implements multi-channel campaigns across SEO, content, social media, and paid advertising platforms.',
          },
          {
            number: '04',
            title: 'Optimization & Scaling',
            description: 'We continuously monitor performance, optimize campaigns, and scale what works to maximize your ROI.',
          },
          {
            number: '05',
            title: 'Reporting & Growth',
            description: 'Receive detailed reports with actionable insights and strategic recommendations for continued growth.',
          },
        ],
      }}
      benefits={[
        {
          icon: <Target className="w-7 h-7 text-white" />,
          title: 'Increased Traffic',
          description: 'Drive more qualified visitors to your website through optimized campaigns.',
        },
        {
          icon: <BarChart3 className="w-7 h-7 text-white" />,
          title: 'Higher Conversions',
          description: 'Turn more visitors into customers with conversion-optimized strategies.',
        },
        {
          icon: <Zap className="w-7 h-7 text-white" />,
          title: 'Better ROI',
          description: 'Maximize your marketing budget with data-driven optimization.',
        },
        {
          icon: <Users className="w-7 h-7 text-white" />,
          title: 'Brand Authority',
          description: 'Establish your brand as an industry leader and trusted authority.',
        },
        {
          icon: <Award className="w-7 h-7 text-white" />,
          title: 'Competitive Edge',
          description: 'Stay ahead of competitors with innovative marketing strategies.',
        },
        {
          icon: <TrendingUp className="w-7 h-7 text-white" />,
          title: 'Sustainable Growth',
          description: 'Build long-term growth with strategies that compound over time.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$999',
          description: 'Perfect for small businesses getting started',
          features: [
            'SEO optimization',
            'Content marketing (4 articles/month)',
            'Social media management (2 platforms)',
            'Monthly performance reports',
            'Email support',
          ],
        },
        {
          name: 'Professional',
          price: '$2,499',
          description: 'Ideal for growing businesses',
          features: [
            'Everything in Starter',
            'Advanced SEO & technical optimization',
            'Content marketing (8 articles/month)',
            'Social media management (4 platforms)',
            'PPC campaign management',
            'Conversion rate optimization',
            'Priority support',
          ],
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'For large-scale marketing needs',
          features: [
            'Everything in Professional',
            'Custom strategy & execution',
            'Unlimited content creation',
            'All platform management',
            'Dedicated account manager',
            'Advanced analytics & insights',
            '24/7 priority support',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How long does it take to see results from digital marketing?',
          answer: 'Results vary depending on your industry, competition, and strategy. Typically, you can expect to see initial improvements within 3-6 months, with significant results becoming evident after 6-12 months of consistent effort.',
        },
        {
          question: 'What makes your digital marketing services different?',
          answer: 'We take a holistic, data-driven approach that combines multiple channels into cohesive strategies. Our team has extensive experience across industries, and we focus on delivering measurable ROI rather than vanity metrics.',
        },
        {
          question: 'Do you work with businesses in my industry?',
          answer: 'We have experience working with businesses across various industries including e-commerce, SaaS, healthcare, finance, real estate, and more. Our strategies are customized to your specific industry and target audience.',
        },
        {
          question: 'What\'s included in the monthly reports?',
          answer: 'Our comprehensive reports include traffic analytics, conversion metrics, campaign performance, SEO rankings, social media engagement, and strategic recommendations for the upcoming month.',
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Absolutely! We understand that business needs change. You can upgrade or downgrade your plan at any time with 30 days notice.',
        },
      ]}
    />
  );
}
