import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative group rounded-3xl overflow-hidden cursor-pointer card-hover"
      style={{ minHeight: '320px' }}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="absolute inset-0">
        <img src={service.image} alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6cb5d4]/90 via-[#000000]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {service.tag && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#6cb5d4] backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-[#000000] font-bold tracking-wider shadow-lg shadow-[#000000]/40 border border-black/10 uppercase">{service.tag}</span>
        </div>
      )}

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
        <div className="text-2xl mb-1.5 text-[#ffffff]">{service.icon}</div>
        <h3 className="font-display text-2xl text-[#ffffff] mb-2">{service.title}</h3>
        <p className={`text-[#ffffff] text-sm font-medium leading-relaxed mb-4 drop-shadow-md transition-all duration-400 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          {service.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#000000] text-xs font-bold tracking-wide drop-shadow-sm bg-[#6cb5d4] backdrop-blur-sm px-2.5 py-1 rounded-lg border border-black/10">
            From <span className="text-[#000000]">{service.startingPrice}</span>
          </span>
          <motion.button
            whileHover={{ x: 4 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-1.5 bg-[#6cb5d4] px-3 py-1.5 rounded-full text-[#000000] hover:text-[#000000] text-[10px] font-bold uppercase tracking-wider hover:bg-[#ffffff] transition-colors cursor-pointer shadow-lg shadow-[#000000]/40 border border-black/10"
          >
            Book <ArrowRight size={12} strokeWidth={3} className="text-[#000000]" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-6 sm:py-10 bg-[#6cb5d4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#000000] text-[10px] sm:text-xs tracking-widest sm:tracking-[0.3em] uppercase mb-4 font-medium">What We Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#000000] mb-4">
            Our <span className="gradient-text italic">Signature</span> Services
          </h2>
          <div className="section-divider" />
          <p className="text-[#000000] max-w-lg mx-auto mt-4 text-sm leading-relaxed">
            From threading to transformative facials — every treatment is crafted with precision, love, and premium professional care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#000000] text-[#6cb5d4] hover:bg-[#000000]/80 transition-colors px-7 py-3 rounded-full text-sm tracking-wide cursor-pointer shadow-lg"
          >
            <span>View Full Price List</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
