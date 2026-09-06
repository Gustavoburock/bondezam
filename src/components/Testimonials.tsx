import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-brand-rose font-bold block mb-3">
            Histórias de Transformação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white">
            O que dizem as <br />
            <span className="italic font-normal text-brand-rose font-serif">Nossas Clientes</span>
          </h2>
          <div className="h-[1px] bg-brand-rose w-12 mx-auto mt-6" />
        </div>

        {/* Testimonials Grid (Strictly no nested cards or cheesy layout templates) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="p-8 md:p-10 bg-brand-black-light border border-brand-rose/10 hover:border-brand-rose/25 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Star Rating & Quote Accent */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-rose text-brand-rose" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-rose/15 shrink-0" />
              </div>

              {/* Text */}
              <p className="text-brand-nude/80 text-sm md:text-base leading-relaxed italic font-light mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-brand-rose/5 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-light text-white tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] tracking-wider text-brand-rose uppercase mt-0.5 font-medium">
                    {testimonial.role}
                  </p>
                </div>
                
                {/* Micro Verified Badge */}
                <div className="px-2 py-1 bg-brand-rose/5 border border-brand-rose/15 rounded-full text-[9px] uppercase font-bold text-brand-rose">
                  Avaliação Confirmada
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagran Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-brand-nude/60">
            Acompanhe resultados diários reais em nosso Instagram oficial:{' '}
            <a
              href="https://instagram.com/bondezan.lashdesigner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-rose font-semibold hover:underline transition-all underline-offset-4"
            >
              @bondezan.lashdesigner
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
