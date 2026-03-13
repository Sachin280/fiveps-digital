import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import DigitalMarketing from './pages/services/DigitalMarketing';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import ContentMarketing from './pages/services/ContentMarketing';
import EmailMarketing from './pages/services/EmailMarketing';
import MemeMarketing from './pages/services/MemeMarketing';
import LogoDesign from './pages/services/LogoDesign';
import WebDevelopment from './pages/services/WebDevelopment';
import UIUXDesign from './pages/services/UIUXDesign';
import VideoEditing from './pages/services/VideoEditing';
import PersonalBranding from './pages/services/PersonalBranding';
import LeadGeneration from './pages/services/LeadGeneration';
import InstagramFacebookAds from './pages/services/InstagramFacebookAds';
import GoogleAds from './pages/services/GoogleAds';
import PPC from './pages/services/PPC';
import SMMOptimization from './pages/services/SMMOptimization';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/60">Page not found</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'blog', Component: Blog },
      { path: 'blog/:id', Component: BlogPost },
      { path: 'services', Component: Services },
      { path: 'services/digital-marketing', Component: DigitalMarketing },
      { path: 'services/social-media-marketing', Component: SocialMediaMarketing },
      { path: 'services/content-marketing', Component: ContentMarketing },
      { path: 'services/email-marketing', Component: EmailMarketing },
      { path: 'services/meme-marketing', Component: MemeMarketing },
      { path: 'services/logo-design', Component: LogoDesign },
      { path: 'services/web-development', Component: WebDevelopment },
      { path: 'services/ui-ux-design', Component: UIUXDesign },
      { path: 'services/video-editing', Component: VideoEditing },
      { path: 'services/personal-branding', Component: PersonalBranding },
      { path: 'services/lead-generation', Component: LeadGeneration },
      { path: 'services/instagram-facebook-ads', Component: InstagramFacebookAds },
      { path: 'services/google-ads', Component: GoogleAds },
      { path: 'services/ppc', Component: PPC },
      { path: 'services/smm-optimization', Component: SMMOptimization },
      { path: '*', Component: NotFound },
    ],
  },
]);
