import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, X, ZoomIn } from 'lucide-react';
import { IMAGES } from '../data/services';

function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="gradient-text font-display text-3xl font-bold">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 2500, suffix: '+', label: 'Happy Clients' },
  { value: 8000, suffix: '+', label: 'Treatments Done' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [certOpen, setCertOpen] = useState(false);

  return (
    <section id="about" className="py-6 sm:py-10 bg-[#6cb5d4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#000000] text-[10px] sm:text-xs tracking-widest sm:tracking-[0.3em] uppercase mb-3 font-medium">Our Story</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#000000] mb-4">
            Beauty Is An Art. <span className="gradient-text italic">We Perfect It.</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Main split layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-16">

          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#000000]/15 lg:max-h-[550px]">
              <img
                src={IMAGES.founderImg}
                alt="Kavita - Founder of Kavita's Beauty Bay"
                className="w-full h-full object-cover object-center rounded-3xl lg:max-h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6cb5d4]/70 via-transparent to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display font-bold text-[#000000] text-xl">Kavita Rani</p>
                <p className="text-[#000000] text-sm tracking-widest uppercase mt-0.5">Founder & Lead Beautician</p>
              </div>
            </div>

            {/* Floating location card — top right on mobile, bottom right on desktop */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 sm:-bottom-5 sm:top-auto sm:-right-4 glass-dark rounded-2xl p-4 border border-[#000000]/25 shadow-xl z-20"
            >
              <p className="text-[#000000] font-bold text-sm tracking-widest uppercase mb-2">3 Locations</p>
              <p className="text-[#000000] font-medium text-sm leading-snug">Swansea · Port Talbot</p>
              <p className="text-[#000000] text-sm mt-0.5">High St · Quadrant · Aberafan</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="space-y-4 text-[#000000] text-sm leading-relaxed">
              <p>Kavita's Beauty Bay is Swansea's premier beauty destination, nestled in the heart of the Quadrant Centre. Founded by Kavita — a passionate and skilled beauty professional with over a decade of experience — we believe every client deserves to feel extraordinary.</p>
              <p>Our salon combines the warmth of personalised care with precision professional techniques. From eyebrow threading to luxurious facials, every treatment is delivered with meticulous attention to detail and a genuine love for beauty.</p>
              <p>We are committed to using only premium products, maintaining the highest hygiene standards, and creating an atmosphere where you can truly relax and be pampered.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 py-5 border-y border-black/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <p className="text-[#000000] text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="glass-dark rounded-2xl p-5 border border-[#000000]/18">
              <h4 className="text-[#000000] font-bold text-sm tracking-widest uppercase mb-3">Opening Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#000000] text-sm">Monday – Saturday</span>
                  <span className="text-[#000000] text-sm">9:30am – 5:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#000000] text-sm">Sunday</span>
                  <span className="text-[#000000] text-sm">11:00am – 3:00pm</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== CERTIFICATION SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 items-center glass-dark rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-12 border border-[#000000]/20 shadow-2xl shadow-[#000000]/10 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#000000]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Left: Certificate image */}
          <div className="lg:col-span-5 relative cursor-pointer group" onClick={() => setCertOpen(true)}>
            <div className="relative rounded-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(45,108,223,0.3)] bg-[#6cb5d4]/5 p-2 border border-[#000000]">
              <img
                src={IMAGES.certificate}
                alt="City & Guilds Level 2 Beauty Therapy Certificate"
                className="w-full object-contain rounded-xl opacity-95 transition-transform duration-500"
                style={{ maxHeight: '400px' }}
              />
              <div className="absolute inset-0 bg-[#6cb5d4]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl backdrop-blur-sm">
                <div className="bg-[#000000] text-[#ffffff] p-3.5 rounded-full shadow-lg shadow-[#000000]/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Certification details */}
          <div className="lg:col-span-7 space-y-8 z-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#000000] to-[#000000] flex items-center justify-center shadow-lg shadow-[#000000]/30 shrink-0">
                <Award size={24} className="text-[#ffffff] sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[#000000] text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-1 truncate">Qualified Professional</p>
                <h3 className="text-[#000000] font-display text-[17px] min-[375px]:text-[19px] sm:text-3xl md:text-4xl leading-none whitespace-nowrap">City & Guilds Certified</h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
              {[
                'Level 2 Technical Certificate (450)',
                'Awarded by City & Guilds Institute',
                'Grade Pass — City of Oxford College',
                'Regulated by Ofqual (UK Recognised)',
                'Awarded August 2018',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#000000] shrink-0 mt-0.5 drop-shadow-md" />
                  <p className="text-[#000000] text-sm font-medium leading-relaxed opacity-90">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#000000]/20 to-transparent border-l-2 border-[#000000] py-4 pl-5 rounded-r-xl">
              <p className="text-[#000000] text-sm leading-relaxed italic pr-4">
                Kavita holds a nationally recognised beauty therapy qualification, ensuring every treatment meets the highest professional standards and hygiene protocols.
              </p>
            </div>
          </div>
        </motion.div>



      </div>

      {/* Lightbox for Certificate */}
      <AnimatePresence>
        {certOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#3B5E74]/80 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setCertOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={IMAGES.certificate} alt="Certificate" className="w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#6cb5d4] border border-[#000000]" />
              <button onClick={() => setCertOpen(false)}
                className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-[10000] bg-[#6cb5d4]/90 hover:bg-[#000000] p-2.5 md:p-2 rounded-full transition-colors cursor-pointer text-[#000000] hover:text-[#6cb5d4] shadow-xl border border-[#000000]/30">
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
