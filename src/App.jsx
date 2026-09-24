import { BrowserRouter } from 'react-router-dom';

import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import LoyaltyCard from './sections/LoyaltyCard';
import About from './sections/About';
import BookingCTA from './sections/BookingCTA';
import Contact from './sections/Contact';
import Popup from './components/Popup';

export default function App() {
  return (
    <BrowserRouter>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LoyaltyCard />
        <Pricing />
        <Gallery />
        <Testimonials />
        <About />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Popup />
    </BrowserRouter>
  );
}
