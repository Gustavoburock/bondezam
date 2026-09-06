import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappLink = "https://wa.me/5511987797862?text=Olá%20Bondezan!%20Fiquei%20com%20uma%20dúvida%20sobre%20os%20serviços,%20pode%20me%20ajudar?";

  return (
    <section id="faq" className="py-24 bg-brand-black-light relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-brand-rose font-bold block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white">
            Perguntas <span className="italic font-normal text-brand-rose font-serif">Frequentes</span>
          </h2>
          <div className="h-[1px] bg-brand-rose w-12 mx-auto mt-6" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="border border-brand-rose/10 bg-brand-black/40 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left group transition-all"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-4 items-center">
                    <HelpCircle className="w-5 h-5 text-brand-rose shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-serif text-base md:text-lg font-light text-white group-hover:text-brand-rose transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-brand-rose shrink-0 ml-4"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-brand-nude/70 leading-relaxed font-light border-t border-brand-rose/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Objections Breaker Contact Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 border border-brand-rose/20 bg-brand-black/80 text-center max-w-2xl mx-auto"
        >
          <h3 className="font-serif text-xl font-light text-white mb-2">
            Ainda tem alguma dúvida específica?
          </h3>
          <p className="text-xs text-brand-nude/70 mb-6 max-w-md mx-auto font-light">
            Não hesite em nos contatar diretamente. Estamos à inteira disposição para desenhar a sua melhor experiência.
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-brand-rose text-brand-black text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Especialista</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
