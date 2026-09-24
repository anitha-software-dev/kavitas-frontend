import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, CalendarCheck } from 'lucide-react';

const WhatsAppIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export default function BookingCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-8 sm:py-12 relative overflow-hidden">
      {/* Background — deep blue luxury gradient */}
      <div className="absolute inset-0 bg-[#6cb5d4]" />

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(45,108,223,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[350px] h-[180px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(143,211,255,0.06) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#000000] text-[10px] sm:text-xs tracking-widest sm:tracking-[0.3em] uppercase mb-5 font-medium">Ready To Glow?</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#000000] mb-6 leading-tight">
            Book Your Luxury
            <span className="block gradient-text italic">Beauty Experience</span>
            Today
          </h2>
          <p className="text-[#000000] text-sm max-w-xl mx-auto mb-6">
            Treat yourself or someone special. Our expert team is ready to welcome you with warmth
            and deliver results you'll love.
          </p>
          <div className="inline-flex items-center gap-2.5 bg-white/30 backdrop-blur-md border border-[#000000]/15 rounded-full px-5 py-2 mb-10 text-xs font-semibold text-[#000000] tracking-wide shadow-sm">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
            <span>Walk-ins & Appointments Welcome — Drop by our Aberafan Kiosk!</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="tel:07501475558"
              className="flex items-center gap-3 bg-[#000000] text-[#ffffff] hover:bg-[#000000]/80 transition-colors shadow-lg shadow-[#000000]/30 px-8 py-4 rounded-full text-sm font-semibold"
            >
              <Phone size={18} />
              Call Now
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/447501475558"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-[#000000] border border-[#000000] bg-[#25D366] hover:bg-[#1DA851] transition-all duration-300 shadow-lg shadow-[#25D366]/30"
            >
              <span className="text-[#000000]"><WhatsAppIcon size={18} /></span>
              WhatsApp Booking
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 bg-[#000000] text-[#ffffff] hover:bg-[#000000]/80 transition-colors shadow-lg shadow-[#000000]/30 px-8 py-4 rounded-full text-sm font-semibold cursor-pointer"
            >
              <CalendarCheck size={18} />
              <span>Schedule Appointment</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
