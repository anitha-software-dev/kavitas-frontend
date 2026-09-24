import { motion } from 'framer-motion';
import { SOCIAL } from '../data/services';

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

export default function FloatingSocials() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
    >
      {[
        { icon: <InstagramIcon />, href: SOCIAL.instagram, label: 'Instagram' },
        { icon: <FacebookIcon />, href: SOCIAL.facebook, label: 'Facebook' },
      ].map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5, scale: 1.1 }}
          className="w-10 h-10 rounded-full glass-dark border border-black/10 flex items-center justify-center text-[#d4a0a8] hover:text-[#000000] hover:border-[#b76e79] hover:bg-[#b76e79]/10 transition-all duration-300 shadow-lg"
          title={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
