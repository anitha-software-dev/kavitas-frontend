import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 1.5 seconds after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#6cb5d4]/85 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[440px] glass-dark rounded-xl overflow-hidden shadow-2xl shadow-[#000000]/30 border-2 border-[#000000]/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="pt-12 sm:pt-10 pb-4 px-4 sm:px-6 text-center">
              <div className="bg-[#6cb5d4] text-[#000000] font-display text-lg sm:text-2xl tracking-[0.15em] sm:tracking-widest font-bold uppercase inline-block px-5 py-2 sm:px-8 sm:py-2.5 rounded-full shadow-lg border border-[#000000]/35">
                Price Alert
              </div>
            </div>

            {/* Body */}
            <div className="px-8 pb-6 text-center space-y-4">
              <p className="text-[#000000] text-sm font-medium">Dear Customers,</p>

              <p className="text-[#000000] text-sm leading-relaxed">
                We would like to inform you about a slight adjustment to our most prices for all treatments,
              </p>

              <div className="py-3">
                <p className="text-[#000000] font-bold text-sm uppercase tracking-widest mb-1.5">Effective from</p>
                <p className="font-display text-3xl text-[#000000] drop-shadow-md tracking-wider">JULY 1, 2026.</p>
              </div>

              <p className="text-[#000000] text-sm italic leading-relaxed px-2">
                (*This change is due to the rising operational costs of products and services)
              </p>
            </div>

            {/* Bottom Alert Banner */}
            <div className="bg-[#6cb5d4] py-3.5 text-center border-y border-[#000000]/30">
              <p className="text-[#000000] font-bold text-[10px] sm:text-xs tracking-wider sm:tracking-[0.15em] uppercase">
                We are updating our new pricing soon
              </p>
            </div>

            {/* Footer Text */}
            <div className="px-6 py-6 pb-10 text-center text-[#000000] text-sm space-y-1.5">
              <p>Thank you for your understanding.</p>
              <p className="text-[#000000] pt-2">Sincerely,</p>
              <p className="text-[#000000] font-medium">Kavita's Beauty Bay</p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#000000] hover:text-[#6cb5d4] bg-[#6cb5d4]/60 hover:bg-[#000000] border border-black/10 p-1.5 transition-all duration-300 rounded-full z-10"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
