import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ServicesList from './components/ServicesList';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CourseLandingPage from './components/CourseLandingPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);
      if (pathname === '/curso' || pathname.startsWith('/curso') || searchParams.get('page') === 'curso') {
        return '/curso';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);
      if (pathname === '/curso' || pathname.startsWith('/curso') || searchParams.get('page') === 'curso') {
        setCurrentPath('/curso');
      } else {
        setCurrentPath('/');
      }
      // Immediate scroll to top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Guarantee scroll to top whenever path changes
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPath]);

  // If on course route or subdomain
  if (currentPath === '/curso') {
    return <CourseLandingPage />;
  }

  return (
    <div className="min-h-screen bg-brand-black text-brand-nude overflow-x-hidden selection:bg-brand-rose/20 selection:text-white">
      {/* Dynamic Floating Navbar */}
      <Navbar />

      {/* Main Luxury Content */}
      <main>
        {/* Conversion Focused Hero Header */}
        <Hero />

        {/* Brand Differentials */}
        <Benefits />

        {/* Services & Education Lists */}
        <ServicesList />

        {/* About the Lash Designer */}
        <About />

        {/* Verified Client Testimonials */}
        <Testimonials />

        {/* Interactive FAQ */}
        <Faq />
      </main>

      {/* Sticky Floating Quick Booking Action */}
      <FloatingWhatsApp />

      {/* Footnote and contact anchor */}
      <Footer />
    </div>
  );
}

