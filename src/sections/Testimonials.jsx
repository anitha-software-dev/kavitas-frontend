import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/services';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#000000] text-[#000000]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [auto, current]);

  const prev = () => {
    setAuto(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAuto(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const visibleCount = 3;
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-8 sm:py-12 bg-[#6cb5d4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#000000] text-[10px] sm:text-xs tracking-widest sm:tracking-[0.3em] uppercase mb-4 font-medium">Client Stories</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#000000] mb-5">
            What Our <span className="gradient-text italic">Clients</span> Say
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3 Cards */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {getVisible().map((t, i) => (
              <motion.div
                key={`${t.id}-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass-dark rounded-3xl p-7 border transition-all duration-500 ${
                  i === 1
                    ? 'border-[#000000]/45 shadow-xl shadow-[#000000]/15 scale-105'
                    : 'border-black/10'
                }`}
              >
                <Quote size={28} className="text-[#000000]/50 mb-4" />
                <StarRating />
                <p className="text-[#000000] text-sm leading-relaxed mt-4 mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                  <div className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-[#ffffff] font-semibold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[#000000] font-bold text-sm">{t.name}</p>
                    <p className="text-[#000000] text-sm">{t.service} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Single Card */}
          <motion.div
            key={`mobile-${current}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden glass-dark rounded-3xl p-7 border border-[#000000]/35"
          >
            <Quote size={28} className="text-[#000000]/50 mb-4" />
            <StarRating />
            <p className="text-[#000000] text-sm leading-relaxed mt-4 mb-6 italic">
              "{testimonials[current].text}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-black/10">
              <div className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-[#ffffff] font-semibold text-sm">
                {testimonials[current].avatar}
              </div>
              <div>
                <p className="text-[#000000] font-bold text-sm">{testimonials[current].name}</p>
                <p className="text-[#000000] text-sm">{testimonials[current].service} · {testimonials[current].location}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="glass p-3 rounded-full hover:bg-[#000000]/25 border border-[#000000]/20 transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} className="text-[#000000]" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAuto(false); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === current
                      ? 'w-6 h-2 bg-gradient-to-r from-[#000000] to-[#000000]'
                      : 'w-2 h-2 bg-[#000000]/20 hover:bg-[#000000]/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="glass p-3 rounded-full hover:bg-[#000000]/25 border border-[#000000]/20 transition-colors cursor-pointer"
            >
              <ChevronRight size={18} className="text-[#000000]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
