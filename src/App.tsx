import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ServicesList from './components/ServicesList';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
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
