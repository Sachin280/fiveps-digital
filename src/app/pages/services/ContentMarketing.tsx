import { ServiceTemplate } from '../components/ServiceTemplate';
import { FileText, Target, Users, TrendingUp, Award, BarChart } from 'lucide-react';

export default function ContentMarketing() {
  return (
    <ServiceTemplate
      breadcrumb="Content Marketing"
      title="Content Marketing"
      tagline="Create compelling content that educates, engages, and converts your audience"
      icon={<FileText className="w-10 h-10 text-white" />}
      overview={{
        title: 'Strategic Content Creation',
        description: [
          'Content is the foundation of successful digital marketing. We create valuable, engaging content that attracts your target audience, builds trust, and drives conversions.',
          'From blog posts and ebooks to videos and infographics, our content marketing services help establish your brand as an industry authority while generating qualified leads.',
        ],
        image: 'https://images.unsplash.com/photo-1758468772760-837fb2cde7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNDg1NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      }}
      strategy={{
        title: 'Our Content Strategy',
        steps: [
          { number: '01', title: 'Content Audit', description: 'Analyze existing content and identify opportunities for improvement.' },
          { number: '02', title: 'Strategy Development', description: 'Create a comprehensive content plan aligned with your business goals.' },
          { number: '03', title: 'Content Creation', description: 'Produce high-quality, SEO-optimized content across multiple formats.' },
          { number: '04', title: 'Distribution', description: 'Publish and promote content across relevant channels for maximum reach.' },
          { number: '05', title: 'Performance Analysis', description: 'Track metrics and optimize content strategy for better results.' },
        ],
      }}
      benefits={[
        { icon: <Target className="w-7 h-7 text-white" />, title: 'Attract Quality Leads', description: 'Draw in prospects actively searching for solutions.' },
        { icon: <Award className="w-7 h-7 text-white" />, title: 'Build Authority', description: 'Establish your brand as an industry thought leader.' },
        { icon: <TrendingUp className="w-7 h-7 text-white" />, title: 'Improve SEO', description: 'Rank higher in search results with optimized content.' },
        { icon: <Users className="w-7 h-7 text-white" />, title: 'Engage Audience', description: 'Create meaningful connections with your target market.' },
        { icon: <BarChart className="w-7 h-7 text-white" />, title: 'Drive Conversions', description: 'Turn readers into customers with compelling CTAs.' },
        { icon: <FileText className="w-7 h-7 text-white" />, title: 'Long-term Value', description: 'Content continues to generate leads over time.' },
      ]}
      pricing={[
        { name: 'Starter', price: '$899', description: 'Basic content marketing', features: ['4 blog posts/month', 'SEO optimization', 'Content calendar', 'Performance reports'] },
        { name: 'Professional', price: '$1,999', description: 'Comprehensive content strategy', features: ['8 blog posts/month', '2 ebooks/quarter', 'Infographics', 'Social content', 'Email newsletters', 'Advanced analytics'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', description: 'Full-scale content production', features: ['Unlimited content', 'Video production', 'Podcast production', 'Dedicated team', 'Custom strategy'] },
      ]}
      faqs={[
        { question: 'What types of content do you create?', answer: 'We create blog posts, articles, ebooks, whitepapers, case studies, infographics, videos, and more, tailored to your audience and goals.' },
        { question: 'How do you ensure content quality?', answer: 'All content goes through our rigorous process including research, writing, editing, and approval before publication.' },
        { question: 'Will the content be SEO optimized?', answer: 'Yes, all content is optimized for search engines with proper keywords, meta descriptions, and structure.' },
      ]}
    />
  );
}
