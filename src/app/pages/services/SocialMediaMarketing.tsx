import { ServiceTemplate } from '../components/ServiceTemplate';
import { Share2, Heart, TrendingUp, Users, MessageCircle, BarChart } from 'lucide-react';

export default function SocialMediaMarketing() {
  return (
    <ServiceTemplate
      breadcrumb="Social Media Marketing"
      title="Social Media Marketing"
      tagline="Build a powerful social presence and engage your audience across all major platforms"
      icon={<Share2 className="w-10 h-10 text-white" />}
      overview={{
        title: 'Strategic Social Media Management',
        description: [
          'Social media is where your customers spend their time, and we help you meet them there. Our social media marketing services combine creative content, strategic planning, and community engagement to build a loyal following and drive business results.',
          'We manage your presence across Facebook, Instagram, Twitter, LinkedIn, TikTok, and more. From content creation to community management and paid advertising, we handle everything to keep your social presence thriving.',
          'Our data-driven approach ensures every post, story, and campaign is optimized for maximum engagement and conversions.',
        ],
        image: 'https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MjUyNzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      }}
      strategy={{
        title: 'Our Social Media Strategy',
        steps: [
          {
            number: '01',
            title: 'Audience Research',
            description: 'Understand your target audience, their behaviors, preferences, and the platforms where they\'re most active.',
          },
          {
            number: '02',
            title: 'Content Planning',
            description: 'Develop a comprehensive content calendar with engaging posts, stories, and campaigns tailored to each platform.',
          },
          {
            number: '03',
            title: 'Content Creation',
            description: 'Create eye-catching visuals, compelling copy, and engaging videos that resonate with your audience.',
          },
          {
            number: '04',
            title: 'Community Engagement',
            description: 'Build relationships through active community management, responding to comments, and fostering conversations.',
          },
          {
            number: '05',
            title: 'Analytics & Optimization',
            description: 'Track performance metrics and continuously optimize strategy for better engagement and conversions.',
          },
        ],
      }}
      benefits={[
        {
          icon: <Users className="w-7 h-7 text-white" />,
          title: 'Grow Your Audience',
          description: 'Build a loyal following of engaged customers and brand advocates.',
        },
        {
          icon: <Heart className="w-7 h-7 text-white" />,
          title: 'Increase Engagement',
          description: 'Drive likes, comments, shares, and meaningful interactions with your brand.',
        },
        {
          icon: <TrendingUp className="w-7 h-7 text-white" />,
          title: 'Drive Traffic',
          description: 'Turn social media followers into website visitors and customers.',
        },
        {
          icon: <MessageCircle className="w-7 h-7 text-white" />,
          title: 'Build Community',
          description: 'Foster a strong community around your brand and values.',
        },
        {
          icon: <BarChart className="w-7 h-7 text-white" />,
          title: 'Measurable Results',
          description: 'Track clear metrics that show the impact on your business.',
        },
        {
          icon: <Share2 className="w-7 h-7 text-white" />,
          title: 'Brand Awareness',
          description: 'Increase brand visibility and reach new potential customers.',
        },
      ]}
      pricing={[
        {
          name: 'Basic',
          price: '$799',
          description: 'For businesses starting with social media',
          features: [
            '2 social media platforms',
            '12 posts per month',
            'Content creation',
            'Community management',
            'Monthly analytics report',
          ],
        },
        {
          name: 'Growth',
          price: '$1,499',
          description: 'For businesses ready to scale',
          features: [
            '4 social media platforms',
            '20 posts per month',
            'Stories & reels',
            'Advanced content creation',
            'Community management',
            'Influencer outreach',
            'Paid ads management',
          ],
          highlighted: true,
        },
        {
          name: 'Premium',
          price: 'Custom',
          description: 'For enterprise-level needs',
          features: [
            'All platforms',
            'Unlimited content',
            'Video production',
            'Crisis management',
            'Dedicated social media manager',
            'Advanced analytics & reporting',
            'Priority support',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Which social media platforms should my business be on?',
          answer: 'It depends on your target audience and business type. We help identify the right platforms based on where your customers are most active and engaged.',
        },
        {
          question: 'How often should we post on social media?',
          answer: 'Posting frequency varies by platform and strategy. Generally, we recommend 3-5 posts per week on Facebook and Instagram, daily on Twitter, and 2-3 times per week on LinkedIn.',
        },
        {
          question: 'Do you create all the content?',
          answer: 'Yes! Our team creates all content including graphics, videos, copy, and captions. We can also incorporate your existing brand assets and content.',
        },
        {
          question: 'Can you help with social media advertising?',
          answer: 'Absolutely! We manage paid social campaigns including ad creative, targeting, optimization, and reporting to maximize your ad spend.',
        },
        {
          question: 'How do you measure social media success?',
          answer: 'We track key metrics like reach, engagement, follower growth, website traffic, and conversions. We provide detailed monthly reports showing progress toward your goals.',
        },
      ]}
    />
  );
}
