import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { IMAGES, SOCIAL, LOCATIONS } from '../data/services';

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const footerLinks = {
  Services: ['Eyebrow Threading', 'Eyelash Extensions', 'Luxury Facials', 'Body Waxing', 'Nail Treatments', 'Tinting'],
  'Quick Links': ['Home', 'Services', 'Pricing', 'Gallery', 'About', 'Contact'],
};

export default function Footer() {
  const handleLink = (text) => {
    const id = text.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#6cb5d4] border-t border-[#000000]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-x-16 xl:gap-x-20 pb-16 text-center md:text-left">

          {/* Brand Column */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#000000]/40 shadow-lg shadow-[#000000]/15">
                <img src={IMAGES.logo} alt="Kavita's Beauty Bay Logo" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="font-display text-[#000000] text-3xl leading-none">Kavita's</p>
                <p className="text-[#000000] text-[11px] tracking-[0.28em] uppercase mt-1 font-medium">Beauty Bay</p>
              </div>
            </div>
            <p className="text-[#000000] text-sm leading-relaxed mb-5">
              Premium beauty treatments in the heart of Swansea. Where every visit is a luxurious escape.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-2 mb-5">
              {[
                { icon: <InstagramIcon size={15} />, href: SOCIAL.instagram, label: 'Instagram' },
                { icon: <FacebookIcon size={15} />, href: SOCIAL.facebook, label: 'Facebook' },
                { icon: <WhatsAppIcon size={15} />, href: SOCIAL.whatsapp, label: 'WhatsApp' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 glass-dark rounded-lg flex items-center justify-center text-[#000000] hover:text-[#000000] !border !border-[#000000] hover:!border-[#000000]/50 transition-all duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title} className={`lg:col-span-2 ${index === 1 ? 'lg:pl-12 xl:pl-16' : ''}`}>
              <h4 className="text-[#000000] font-bold text-sm mb-5 tracking-widest uppercase whitespace-nowrap">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleLink(link)}
                      className="text-[#000000] hover:text-[#000000] text-sm transition-colors duration-300 cursor-pointer group flex items-center justify-center md:justify-start gap-1.5 w-full md:w-auto whitespace-nowrap"
                    >
                      <span className="w-0 h-px bg-[#000000] group-hover:w-3 transition-all duration-300 hidden md:inline-block" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Locations Column */}
          <div className="lg:col-span-5 lg:pl-12 xl:pl-16">
            <h4 className="text-[#000000] font-bold text-sm mb-5 tracking-widest uppercase whitespace-nowrap">Our Locations</h4>
            <div className="space-y-4">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="flex flex-col md:flex-row items-center md:items-start gap-1.5 md:gap-3">
                  <MapPin size={13} className="text-[#000000] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[#000000] text-[10px] font-bold tracking-widest uppercase mb-0.5">{loc.branch}</p>
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[#000000] text-xs hover:text-[#000000] transition-colors leading-relaxed whitespace-nowrap">
                      {loc.address}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1.5 md:gap-3 pt-1">
                <Phone size={13} className="text-[#000000] mt-0.5 shrink-0" />
                <a href={SOCIAL.phone} className="text-[#000000] text-sm hover:text-[#000000] transition-colors">07501 475558</a>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1.5 md:gap-3">
                <Mail size={13} className="text-[#000000] mt-0.5 shrink-0" />
                <a href={SOCIAL.email} className="text-[#000000] text-sm hover:text-[#000000] transition-colors">kavitabeautybay@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mt-10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center gap-4 mt-6 text-center px-4">
          <p className="text-[#000000] text-sm tracking-wide">
            © {new Date().getFullYear()} Kavita's Beauty Bay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
