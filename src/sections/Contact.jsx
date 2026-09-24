import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { SOCIAL, LOCATIONS } from '../data/services';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

function FloatingInput({ label, type = 'text', id, required, textarea }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} required={required} value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          rows={4}
          className="w-full bg-transparent border border-[#000000] rounded-xl px-4 pt-6 pb-3 text-[#000000] text-sm outline-none focus:border-[#000000] transition-colors duration-300 resize-none"
        />
      ) : (
        <input id={id} type={type} required={required} value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className="w-full bg-transparent border border-[#000000] rounded-xl px-4 pt-6 pb-3 text-[#000000] text-sm outline-none focus:border-[#000000] transition-colors duration-300"
        />
      )}
      <label htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-300 ${
          focused || value ? 'top-2 text-[10px] text-[#000000] tracking-wider font-semibold' : 'top-4 text-sm text-[#000000]/80'
        }`}
      >{label}</label>
    </div>
  );
}


export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-6 sm:py-10 bg-[#6cb5d4]" style={{ isolation: 'isolate', position: 'relative', zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#000000] text-[10px] sm:text-xs tracking-widest sm:tracking-[0.3em] uppercase mb-4 font-medium">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#000000] mb-4">
            Find <span className="gradient-text italic">Us</span>
          </h2>
          <div className="section-divider" />
          <p className="text-[#000000] text-sm max-w-md mx-auto mt-4">
            We have 3 convenient locations across South Wales — visit the one nearest to you!
          </p>
        </motion.div>

        {/* ===== ROW 1: LOCATIONS & MAP ===== */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-16 max-w-7xl mx-auto">
          {/* Left: Location List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {LOCATIONS.map((loc, i) => {
              const isActive = activeLocation === i;
              return (
                <div 
                  key={loc.id} 
                  onClick={() => setActiveLocation(i)}
                  className={`cursor-pointer rounded-3xl p-6 border transition-all duration-300 flex items-center justify-between group ${isActive ? 'bg-[#2d6cdf]/20 border-[#000000] shadow-[0_0_30px_rgba(45,108,223,0.3)]' : 'glass-dark border-white/5 hover:border-black/10 hover:bg-[#6cb5d4]/5'}`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full transition-colors ${isActive ? 'bg-[#000000] text-[#6cb5d4]' : 'bg-[#000000] text-white group-hover:text-[#6cb5d4]'}`}>
                        {loc.city}
                      </span>
                      {loc.walkIn && (
                        <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border transition-colors ${
                          isActive 
                            ? 'bg-[#000000] text-[#6cb5d4] border-[#000000]' 
                            : 'bg-emerald-500/10 text-emerald-950 border-emerald-500/25'
                        }`}>
                          Walk-ins Welcome
                        </span>
                      )}
                    </div>
                    <h3 className={`font-display font-semibold text-xl sm:text-2xl mb-1.5 transition-colors ${isActive ? 'text-[#000000]' : 'text-[#000000] group-hover:text-[#000000]'}`}>
                      {loc.branch}
                    </h3>
                    <p className={`text-xs leading-relaxed transition-colors ${isActive ? 'text-[#000000]' : 'text-[#000000] group-hover:text-[#000000]'}`}>
                      {loc.address}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'bg-[#000000] text-[#6cb5d4] shadow-lg shadow-[#000000]/30' : 'bg-[#000000] text-white group-hover:text-[#6cb5d4]'}`}>
                    <MapPin size={20} />
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Dynamic Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-dark rounded-[2rem] p-3 sm:p-4 border border-[#000000]/20 h-[400px] lg:h-full min-h-[400px] shadow-2xl shadow-[#000000]/10">
              <div className="rounded-[1.5rem] overflow-hidden w-full h-full relative bg-[#6cb5d4]">
                {LOCATIONS.map((loc, i) => (
                  <iframe
                    key={loc.id}
                    title={`Map for ${loc.branch}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%" height="100%"
                    className={`absolute inset-0 transition-opacity duration-500 ${activeLocation === i ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}`}
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.9) grayscale(0.2)' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== ROW 2: FORM & CONTACT DETAILS ===== */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="glass-dark rounded-[2rem] p-8 sm:p-10 border border-[#000000]/18 flex flex-col h-full">
              <h3 className="font-display font-bold text-2xl text-[#000000] mb-2">Send a Message</h3>
              <p className="text-[#000000] text-sm mb-8">We'll get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                  className="flex flex-col items-center justify-center flex-grow text-center w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#000000] to-[#000000] flex items-center justify-center mb-5">
                    <Send size={26} className="text-[#000000]" />
                  </div>
                  <p className="gradient-text font-display text-2xl">Message Sent!</p>
                  <p className="text-[#000000] text-sm mt-3">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col flex-grow">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FloatingInput id="contact-name" label="Your Name" required />
                    <FloatingInput id="contact-phone" label="Phone Number" type="tel" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FloatingInput id="contact-email" label="Email Address" type="email" required />
                    <div className="relative">
                      <select
                        id="contact-branch"
                        className="w-full bg-transparent border border-[#000000] rounded-xl px-4 py-[18px] text-[#000000] text-sm outline-none focus:border-[#000000] transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" style={{ background: '#6cb5d4' }}>Preferred Branch</option>
                        {LOCATIONS.map((loc) => (
                          <option key={loc.id} value={loc.branch} style={{ background: '#6cb5d4' }}>
                            {loc.branch} — {loc.city}
                          </option>
                        ))}
                      </select>
                      <MapPin size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#000000] pointer-events-none" />
                    </div>
                  </div>

                  <FloatingInput id="contact-service" label="Service Interested In" />
                  <FloatingInput id="contact-message" label="Message" textarea required />
                  <div className="pt-2 mt-auto">
                    <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#000000] text-[#6cb5d4] hover:bg-[#000000]/80 transition-colors py-4 rounded-xl flex items-center justify-center gap-2.5 font-semibold text-[15px] tracking-wide cursor-pointer shadow-lg shadow-[#000000]/20"
                    >
                      <Send size={16} /> Send Message
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="glass-dark rounded-[2rem] p-8 sm:p-10 border border-black/10 flex flex-col gap-8 flex-grow justify-center">
              <div>
                <h3 className="font-display font-bold text-2xl text-[#000000] mb-2">Direct Contact</h3>
                <p className="text-[#000000] text-sm">Reach out to us directly via phone or email.</p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#000000] flex items-center justify-center shrink-0 text-[#ffffff] shadow-lg shadow-[#000000]/20">
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#000000] text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase mb-1 sm:mb-1.5 font-bold whitespace-nowrap">Phone (All Branches)</p>
                  <a href={SOCIAL.phone} className="text-[#000000] text-sm sm:text-[15px] hover:text-[#000000] transition-colors font-medium">07501 475558</a>
                </div>
              </div>
              
              <div className="w-full h-px bg-[#6cb5d4]/5" />

              {/* Email */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#000000] flex items-center justify-center shrink-0 text-[#ffffff] shadow-lg shadow-[#000000]/20">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-[#000000] text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase mb-1 sm:mb-1.5 font-bold whitespace-nowrap">Email</p>
                  <a href={SOCIAL.email} className="text-[#000000] text-[11px] min-[360px]:text-xs sm:text-[15px] hover:text-[#000000] transition-colors font-medium block truncate">kavitabeautybay@gmail.com</a>
                </div>
              </div>

              <div className="w-full h-px bg-[#6cb5d4]/5" />

              {/* Hours */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#000000] flex items-center justify-center shrink-0 text-[#ffffff] shadow-lg shadow-[#000000]/20">
                  <Clock size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#000000] text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase mb-1 sm:mb-1.5 font-bold whitespace-nowrap">Opening Hours</p>
                  <p className="text-[#000000] text-[11px] sm:text-sm leading-relaxed whitespace-nowrap">Mon–Sat: 9:30am–5:00pm<br/>Sun: 11:00am–3:00pm</p>
                  <p className="text-[#000000]/80 text-[10px] italic mt-1">* Bank holiday hours may vary</p>
                </div>
              </div>

              <div className="w-full h-px bg-[#6cb5d4]/5" />

              {/* Social Links */}
              <div>
                <p className="text-[#000000] text-sm tracking-widest uppercase mb-4 font-bold">Follow Us</p>
                <div className="flex items-center gap-4">
                  {[
                    { icon: <InstagramIcon size={20} />, href: SOCIAL.instagram, color: 'hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/10' },
                    { icon: <FacebookIcon size={20} />, href: SOCIAL.facebook, color: 'hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10' },
                    { icon: <WhatsAppIcon size={20} />, href: SOCIAL.whatsapp, color: 'hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      className={`w-[46px] h-[46px] rounded-full flex items-center justify-center bg-[#6cb5d4]/5 !border !border-[#000000] text-[#000000] transition-all duration-300 ${s.color}`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
