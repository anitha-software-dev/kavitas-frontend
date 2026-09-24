import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { IMAGES, SOCIAL } from '../data/services';


const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Testimonials', href: 'testimonials' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          mobileOpen
            ? 'bg-[#6cb5d4]'
            : scrolled
            ? 'bg-[#6cb5d4]/95 backdrop-blur-xl shadow-2xl border-b border-[#000000]/25'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#000000]/50 group-hover:ring-[#000000] transition-all duration-300 shadow-lg shadow-[#000000]/20">
                <img src={IMAGES.logo} alt="Kavita's Beauty Bay" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block text-left">
                <p className={`font-display ${scrolled ? 'text-[#000000]' : 'text-[#ffffff]'} text-2xl leading-none transition-colors`}>Kavita's</p>
                <p className={`${scrolled ? 'text-[#000000]' : 'text-[#ffffff]'} text-[10px] tracking-[0.28em] uppercase mt-0.5 font-medium transition-colors`}>Beauty Bay</p>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className={`${scrolled ? 'text-[#000000] hover:text-[#000000]/80' : 'text-[#ffffff] hover:text-[#ffffff]/80'} text-sm font-medium tracking-wide transition-all duration-300 relative group cursor-pointer`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${scrolled ? 'from-[#000000] to-[#000000]' : 'from-[#ffffff] to-[#ffffff]'} group-hover:w-full transition-all duration-300`} />
                </button>
              ))}
            </div>

            {/* Right side: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={SOCIAL.phone} className={`flex items-center gap-1.5 ${scrolled ? 'text-[#000000] hover:text-[#000000]/80' : 'text-[#ffffff] hover:text-[#ffffff]/80'} text-sm transition-colors`}>
                <Phone size={12} />
                <span>07501 475558</span>
              </a>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNav('contact')}
                className={`${scrolled ? 'bg-[#000000] text-[#6cb5d4] hover:bg-[#000000]/80' : 'bg-[#6cb5d4] text-[#ffffff] hover:bg-[#5aa4c3] shadow-lg shadow-[#6cb5d4]/30'} transition-all px-5 py-2 rounded-full text-sm cursor-pointer font-semibold tracking-wide`}
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <button onClick={() => setMobileOpen(!mobileOpen)} className={`${scrolled || mobileOpen ? 'text-[#000000]' : 'text-[#ffffff]'} p-2 cursor-pointer transition-colors`}>
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-[998] bg-[#6cb5d4] shadow-2xl border-b border-[#000000]/20 py-5"
          >
            <div className="flex flex-col items-center gap-4 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="text-[#000000] hover:text-[#000000]/80 text-sm font-medium tracking-wide transition-colors cursor-pointer"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
