import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gift, Star, Sparkles, CheckCircle } from 'lucide-react';
import { IMAGES, SOCIAL } from '../data/services';

// The actual loyalty card from the salon — displayed in premium styled showcase
function LoyaltyCardDisplay() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotateY: [0, 2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative mx-auto w-full max-w-[320px] lg:max-w-[340px]"
      style={{ perspective: '1000px' }}
    >
      {/* Card glow — blue */}
      <div className="absolute inset-0 rounded-3xl blur-2xl opacity-50"
        style={{ background: 'linear-gradient(135deg, #000000, #000000, #000000)', transform: 'scale(1.12)' }} />

      {/* Card container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#000000]/40 gradient-border">
        <img
          src={IMAGES.loyaltyCard}
          alt="Kavita's Beauty Bay Loyalty Card"
          className="w-full object-contain rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #6cb5d4, #000000)',
          }}
        />

        {/* Premium overlay shimmer */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(143,211,255,0.08) 60%, transparent 80%)',
          }} />
      </div>
    </motion.div>
  );
}

const benefits = [
  { icon: <Star size={15} />, title: 'Earn Points', desc: 'Collect stamps on every visit and treatment booked.' },
  { icon: <Gift size={15} />, title: 'Free Treatments', desc: 'Redeem your stamps for complimentary beauty treatments.' },
  { icon: <Sparkles size={15} />, title: 'Exclusive Perks', desc: 'Enjoy birthday discounts and member-only special offers.' },
  { icon: <CheckCircle size={15} />, title: 'Priority Booking', desc: 'Loyalty members get first access to new slots and services.' },
];

export default function LoyaltyCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="loyalty" className="py-6 sm:py-10 relative overflow-hidden">
      {/* Background — sky blue luxury gradient */}
      <div className="absolute inset-0 bg-[#6cb5d4]" />

      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px]"
          style={{ background: 'radial-gradient(ellipse, rgba(45,108,223,0.15) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div className="absolute top-0 right-0 w-80 h-80"
          style={{ background: 'radial-gradient(circle, rgba(143,211,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80"
          style={{ background: 'radial-gradient(circle, rgba(30,77,143,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#000000] text-[10px] sm:text-xs tracking-widest sm:tracking-[0.3em] uppercase mb-4 font-medium">Rewards Programme</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#000000] mb-4">
            Our <span className="gradient-text italic">Loyalty</span> Card
          </h2>
          <div className="section-divider" />
          <p className="text-[#000000] text-sm max-w-md mx-auto mt-4">
            Every visit brings you closer to a free treatment. Join our loyalty programme and be rewarded for your beauty journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-stretch">

          {/* Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-between h-full"
          >
            <LoyaltyCardDisplay />

            {/* How to get card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 glass-dark rounded-3xl p-6 border border-[#000000]/20 text-center w-full max-w-[320px] lg:max-w-[340px] mx-auto shadow-xl"
            >
              <p className="text-[#000000] text-sm font-bold mb-1">Get your card today</p>
              <p className="text-[#000000] text-sm mb-3">Ask for your loyalty card at reception on your next visit — it's free!</p>
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-[#25D366] text-[#000000] border border-[#000000] hover:bg-[#1DA851] transition-colors shadow-md shadow-[#25D366]/30"
              >
                <Gift size={13} />
                Enquire on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Benefits grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 flex flex-col justify-center h-full"
          >
            <h3 className="font-display text-2xl text-[#000000] mb-6">
              Why Join Our <span className="gradient-text italic">Rewards Club?</span>
            </h3>

            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 glass-dark rounded-2xl p-5 border border-black/10 group hover:border-[#000000]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#000000] flex items-center justify-center shrink-0 text-[#ffffff] group-hover:shadow-lg group-hover:shadow-[#000000]/40 transition-all">
                  {b.icon}
                </div>
                <div>
                  <p className="text-[#000000] font-bold text-sm mb-1">{b.title}</p>
                  <p className="text-[#000000] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Stamp card visual — blue theme */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-blue rounded-2xl p-5 border border-[#000000]/25 mt-2"
            >
              <p className="text-[#000000] text-sm tracking-wide uppercase mb-3 font-bold">Collect Stamps</p>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className={`h-8 rounded-lg border transition-all ${
                    i < 6
                      ? 'bg-gradient-to-br from-[#000000] to-[#000000] border-[#000000]/60 shadow-sm shadow-[#000000]/40'
                      : 'border-white/15 border-dashed'
                  } flex items-center justify-center`}>
                    {i < 6 && <Star size={10} className="text-[#6cb5d4] fill-[#6cb5d4]" />}
                  </div>
                ))}
              </div>
              <p className="text-[#000000] text-sm mt-2.5">6/10 stamps — 4 more for a free treatment!</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
