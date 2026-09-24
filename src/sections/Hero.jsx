import { motion } from 'framer-motion';
import { ChevronDown, Star, Sparkles, Clock } from 'lucide-react';
import { IMAGES } from '../data/services';

const Particle = ({ style }) => (
  <div className="particle" style={style} />
);

const particles = Array.from({ length: 18 }, (_, i) => ({
  width: `${Math.random() * 5 + 2}px`,
  height: `${Math.random() * 5 + 2}px`,
  left: `${Math.random() * 100}%`,
  background: i % 3 === 0 ? 'rgba(45,108,223,0.7)' : i % 3 === 1 ? 'rgba(143,211,255,0.5)' : 'rgba(191,239,255,0.35)',
  borderRadius: '50%',
  animationDuration: `${Math.random() * 8 + 6}s`,
  animationDelay: `${Math.random() * 6}s`,
}));

const badges = [
  { icon: <Star size={13} />, label: 'Premium Quality' },
  { icon: <Sparkles size={13} />, label: 'Expert Stylists' },
  { icon: <Clock size={13} />, label: 'Flexible Hours' },
  { icon: <Sparkles size={13} />, label: 'Walk-ins Welcome' },
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="Kavita's Beauty Bay salon"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6cb5d4]/30 via-[#000000]/15 to-[#6cb5d4]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6cb5d4]/20 via-transparent to-[#6cb5d4]/20" />
        {/* Blue luxury gradient overlay */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(11,30,61,0.30) 0%, rgba(30,77,143,0.18) 50%, rgba(45,108,223,0.12) 100%)'
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {particles.map((p, i) => <Particle key={i} style={p} />)}
      </div>

      {/* Ambient blue glows */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,108,223,0.18) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(143,211,255,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(30,77,143,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 glass rounded-full px-3 sm:px-4 py-1.5 mb-6"
        >
          <span className="w-1 h-1 rounded-full bg-[#6cb5d4] animate-pulse shrink-0" />
          <span className="text-[#ffffff] text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center leading-[1.6] sm:whitespace-nowrap">
            Kavita's Beauty Bay <span className="hidden sm:inline">·</span><br className="sm:hidden" /> <span className="sm:hidden">Swansea</span><span className="hidden sm:inline">Swansea</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-[#6cb5d4] animate-pulse shrink-0" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-[#ffffff] leading-[1.1] mb-4"
        >
          Enhance Your
          <span className="block text-[#6cb5d4] italic font-semibold drop-shadow-md">Natural Beauty</span>
          With Confidence
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[#ffffff] text-sm sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed font-light"
        >
          Professional beauty treatments, brows, lashes, facials & luxury care
          tailored just for you. Appointments & walk-ins welcome!
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contact')}
            className="bg-[#6cb5d4] text-[#ffffff] hover:bg-[#5aa4c3] shadow-lg shadow-[#6cb5d4]/30 px-7 py-3 rounded-full text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300"
          >
            Book Appointment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('services')}
            className="px-7 py-3 rounded-full text-sm font-semibold tracking-wide cursor-pointer border-2 border-[#6cb5d4] text-[#6cb5d4] hover:bg-[#6cb5d4] hover:text-[#ffffff] transition-all duration-300"
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-blue flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            >
              <span className="text-[#ffffff]">{b.icon}</span>
              <span className="text-[#ffffff] text-sm">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollTo('services')}
          className="flex flex-col items-center gap-1.5 mx-auto text-[#ffffff] hover:text-[#6cb5d4] transition-colors cursor-pointer"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
