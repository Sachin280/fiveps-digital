import { ServiceTemplate } from '../components/ServiceTemplate';
import { Mail, Users, Target, TrendingUp, BarChart, Zap } from 'lucide-react';

export default function EmailMarketing() {
  return (
    <ServiceTemplate
      breadcrumb="Email Marketing"
      title="Email Marketing"
      tagline="Personalized email campaigns that nurture leads and drive repeat business"
      icon={<Mail className="w-10 h-10 text-white" />}
      overview={{
        title: 'High-Converting Email Campaigns',
        description: [
          'Email marketing remains one of the highest ROI channels. Our email marketing services help you build relationships, nurture leads, and drive sales through strategic, personalized campaigns.',
          'From welcome sequences to promotional campaigns, we create emails that get opened, read, and clicked.',
        ],
        image: 'https://images.unsplash.com/photo-1705484228982-fd9655904a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI1Mjg4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      }}
      strategy={{
        title: 'Our Email Strategy',
        steps: [
          { number: '01', title: 'List Building', description: 'Grow your email list with opt-in forms and lead magnets.' },
          { number: '02', title: 'Segmentation', description: 'Divide your audience into targeted segments for personalization.' },
          { number: '03', title: 'Campaign Creation', description: 'Design beautiful, mobile-responsive emails with compelling copy.' },
          { number: '04', title: 'Automation', description: 'Set up automated sequences that nurture leads on autopilot.' },
          { number: '05', title: 'Testing & Optimization', description: 'A/B test and optimize for higher open and click rates.' },
        ],
      }}
      benefits={[
        { icon: <Target className="w-7 h-7 text-white" />, title: 'High ROI', description: 'Email delivers $42 for every $1 spent on average.' },
        { icon: <Users className="w-7 h-7 text-white" />, title: 'Direct Access', description: 'Reach customers directly in their inbox.' },
        { icon: <TrendingUp className="w-7 h-7 text-white" />, title: 'Nurture Leads', description: 'Build relationships over time with automated sequences.' },
        { icon: <BarChart className="w-7 h-7 text-white" />, title: 'Measurable Results', description: 'Track opens, clicks, and conversions precisely.' },
        { icon: <Zap className="w-7 h-7 text-white" />, title: 'Automation', description: 'Save time with automated email workflows.' },
        { icon: <Mail className="w-7 h-7 text-white" />, title: 'Personalization', description: 'Deliver tailored messages to each subscriber.' },
      ]}
      pricing={[
        { name: 'Basic', price: '$599', description: 'Essential email marketing', features: ['List management', '2 campaigns/month', 'Basic templates', 'Performance reports'] },
        { name: 'Growth', price: '$1,199', description: 'Advanced automation', features: ['4 campaigns/month', 'Custom templates', 'Automation sequences', 'A/B testing', 'Advanced segmentation'], highlighted: true },
        { name: 'Premium', price: 'Custom', description: 'Enterprise email marketing', features: ['Unlimited campaigns', 'Custom integrations', 'Dedicated specialist', 'Advanced analytics'] },
      ]}
      faqs={[
        { question: 'What email platform do you use?', answer: 'We work with all major platforms including Mailchimp, Klaviyo, HubSpot, and ActiveCampaign, or can recommend the best fit for your needs.' },
        { question: 'How do you grow email lists?', answer: 'We implement opt-in forms, lead magnets, landing pages, and other strategies to attract and convert subscribers ethically.' },
        { question: 'What is a good email open rate?', answer: 'Industry averages range from 15-25%. We typically achieve above-average rates through optimization and segmentation.' },
      ]}
    />
  );
}
