import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play } from 'lucide-react';
import { IMAGES } from '../data/services';

const galleryItems = [
  { id: 1, src: IMAGES.parlour1, label: 'Our Salon Space', span: 'col-span-2 row-span-2', type: 'image' },
  { id: 2, src: IMAGES.serviceTinting, label: 'Tinting', span: '', type: 'image' },
  { id: 3, src: IMAGES.serviceLashes, label: 'Lash Extensions', span: '', type: 'image' },
  { id: 5, src: IMAGES.parlour3, label: 'Nail Station', span: 'col-span-2 row-span-2 md:col-start-2', type: 'image' },
  { id: 4, src: IMAGES.serviceEyebrows, label: 'Perfect Brows', span: '', type: 'image' },
  { id: 6, src: IMAGES.nailArt, label: 'Nail Art', span: '', type: 'image' },
  { id: 7, src: IMAGES.japaneseHeadSpa, label: 'Japanese Head Spa', span: 'col-span-2 row-span-2', type: 'image' },
  { id: 8, src: IMAGES.nailPolish, label: 'Gel Polish', span: '', type: 'image' },
  { id: 9, src: IMAGES.serviceFacial, label: 'Luxury Facial', span: '', type: 'image' },
];

function GalleryItem({ item, index, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`relative group rounded-[1.5rem] overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(11,30,61,0.2)] border border-[#000000]/10 h-full w-full ${item.span}`}
      onClick={() => onOpen(item)}
    >
      {item.type === 'video' ? (
        <>
          <video
            src={item.src}
            poster={item.poster}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6cb5d4]/90 via-[#6cb5d4]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
            <div className="bg-[#000000]/80 backdrop-blur-sm p-4 rounded-full border border-black/10 shadow-lg">
              <Play size={24} className="text-[#000000] fill-white" />
            </div>
          </div>
        </>
      ) : (
        <>
          <img src={item.src} alt={item.label}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          {/* Blue overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#6cb5d4] via-[#000000]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
            <div className="bg-[#000000]/80 backdrop-blur-md p-3.5 rounded-full border border-black/10 shadow-xl">
              <ZoomIn size={22} className="text-[#ffffff]" />
            </div>
          </div>
        </>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-[#000000] font-display text-xl drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">{item.label}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="gallery" className="py-6 sm:py-10 bg-[#6cb5d4]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#000000] text-[10px] sm:text-xs tracking-widest sm:tracking-[0.3em] uppercase mb-4 font-medium">Our Work & Space</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#000000] mb-4">
            Salon <span className="gradient-text italic">Gallery</span>
          </h2>
          <div className="section-divider" />
          <p className="text-[#000000] text-sm max-w-md mx-auto mt-4">
            A glimpse into the premium treatments, transformations, and our beautiful salon space.
          </p>
        </motion.div>

        <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} onOpen={setLightbox} />
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-[#3B5E74]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="relative max-w-5xl w-full cursor-default flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {lightbox.type === 'video' ? (
                  <video src={lightbox.src} controls autoPlay className="w-full rounded-[1.5rem] max-h-[85vh] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#000000] bg-[#6cb5d4]" />
                ) : (
                  <img src={lightbox.src} alt={lightbox.label} className="w-full rounded-[1.5rem] object-contain max-h-[85vh] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#6cb5d4] border border-[#000000]" />
                )}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 bg-[#000000]/70 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 shadow-xl">
                  <p className="text-[#ffffff] font-display text-xl sm:text-2xl drop-shadow-md">{lightbox.label}</p>
                </div>
                <button onClick={() => setLightbox(null)}
                  className="absolute -top-14 right-0 sm:top-6 sm:right-6 bg-[#000000]/80 hover:bg-[#000000] p-3 rounded-full text-[#ffffff] hover:text-[#6cb5d4] shadow-xl border border-black/10 transition-all hover:scale-110 cursor-pointer z-50 backdrop-blur-sm">
                  <X size={20} strokeWidth={2.5} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
