import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] font-['Poppins']">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
