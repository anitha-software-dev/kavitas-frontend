import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar } from 'lucide-react';
import { pricingData } from '../data/services';

const categories = Object.keys(pricingData);

function PricingCard({ item, index, activeItem, setActiveItem }) {
  const isTapped = activeItem === item.name;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onClick={() => setActiveItem(isTapped ? null : item.name)}
      className={`group flex items-center justify-between py-3.5 px-2 sm:px-4 rounded-xl transition-all duration-300 border cursor-pointer md:cursor-default ${
        isTapped ? 'bg-[#6cb5d4]/40 border-[#000000]' : 'border-transparent hover:bg-[#6cb5d4]/40 hover:border-[#000000]'
      }`}
    >
      <span className="text-[#000000] text-sm font-medium tracking-wide leading-relaxed">
        {item.name}
      </span>
      <span className="flex-grow mx-4 border-b border-black/10 border-dotted" />
      <div className="flex items-center gap-3 shrink-0">
        <span className="gradient-text font-semibold text-sm whitespace-nowrap">{item.price}</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={(e) => {
            e.stopPropagation();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`flex items-center gap-1 bg-[#000000]/20 hover:bg-[#000000] px-3 py-1 rounded-full text-[#000000] hover:text-[#6cb5d4] text-sm transition-all duration-300 cursor-pointer ${
            isTapped ? 'opacity-100' : 'opacity-0'
          } md:opacity-0 md:group-hover:opacity-100`}
        >
          <Calendar size={10} />
          Book
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="py-8 sm:py-12 bg-[#6cb5d4]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#000000] text-[10px] sm:text-xs tracking-widest sm:tracking-[0.3em] uppercase mb-4 font-medium">Transparent Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#000000] mb-5">
            Service <span className="gradient-text italic">Menu</span>
          </h2>
          <div className="section-divider" />
          <p className="text-[#000000] text-sm max-w-lg mx-auto mt-5">
            Gift vouchers available. All treatments include a warm welcome and a luxury experience.
          </p>
        </motion.div>

        {/* Desktop: Tab Navigation */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#000000] text-[#6cb5d4] shadow-lg shadow-[#000000]/35 border border-[#000000]'
                  : 'glass text-[#000000] hover:bg-[#000000]/10 border border-[#000000]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Desktop Pricing Table */}
        <div className="hidden md:block glass-dark rounded-3xl overflow-hidden border border-[#000000]/18 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/10">
                <div className="w-1 h-6 bg-gradient-to-b from-[#000000] to-[#000000] rounded-full" />
                <h3 className="font-display text-2xl text-[#000000]">{activeTab}</h3>
              </div>
              <div className="space-y-1">
                {pricingData[activeTab].map((item, i) => (
                  <PricingCard key={item.name} item={item} index={i} activeItem={activeItem} setActiveItem={setActiveItem} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {categories.map((cat) => (
            <div key={cat} className="glass-dark rounded-2xl overflow-hidden border border-[#000000]/18">
              <button
                onClick={() => setExpandedMobile(expandedMobile === cat ? null : cat)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <span className="text-[#000000] font-medium text-sm">{cat}</span>
                <motion.div
                  animate={{ rotate: expandedMobile === cat ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="text-[#000000]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedMobile === cat && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="px-1 sm:px-4 pb-4 space-y-1 border-t border-black/10 pt-2">
                      {pricingData[cat].map((item, i) => (
                        <PricingCard key={item.name} item={item} index={i} activeItem={activeItem} setActiveItem={setActiveItem} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Gift Voucher Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 glass-blue rounded-2xl p-6 text-center"
        >
          <p className="text-[#000000] font-display font-bold text-lg mb-1">🎁 Gift Vouchers Available</p>
          <p className="text-[#000000] text-sm">The perfect gift for someone special. Call us to arrange.</p>
          <a
            href="tel:07501475558"
            className="inline-block mt-3 text-[#000000] hover:text-[#000000] text-sm font-medium transition-colors"
          >
            📞 07501 475558
          </a>
        </motion.div>
      </div>
    </section>
  );
}
