import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Heart, Crown } from 'lucide-react';
import { BENEFITS } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Heart: Heart,
  Crown: Crown
};

export default function Benefits() {
  return (
    <section id="diferenciais" className="py-24 bg-brand-black-light relative overflow-hidden">
      {/* Subtle lines or decorations */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-rose/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-rose/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-brand-rose font-bold mb-3"
          >
            A Excelência em Cada Detalhe
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white"
          >
            Por que escolher a <br className="hidden sm:inline" />
            <span className="italic font-normal text-brand-rose font-serif">Bondezan Lash Designer</span>?
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-brand-rose mx-auto mt-6"
          />
        </div>

        {/* Benefits Grid - Elegant Minimalist layout (no nested cards or glow shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName] || Sparkles;
            
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="p-8 border border-brand-rose/10 hover:border-brand-rose/30 bg-brand-black/40 hover:bg-brand-black transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-rose/5 border border-brand-rose/20 text-brand-rose mb-6 group-hover:bg-brand-rose group-hover:text-brand-black transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-light text-white mb-4 tracking-wide group-hover:text-brand-rose transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-brand-nude/70 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Visual Accent - thin bottom line appearing on hover */}
                <div className="h-[2px] w-0 bg-brand-rose mt-8 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
