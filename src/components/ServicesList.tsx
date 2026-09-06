import { motion } from 'motion/react';
import { Sparkles, Check, MessageSquare } from 'lucide-react';
import { SERVICES } from '../data';

export default function ServicesList() {
  const getWhatsAppLink = (serviceName: string, price: number) => {
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const text = `Olá Bondezan! Gostaria de agendar o procedimento de ${serviceName} no valor de ${formattedPrice}. Quais são os próximos horários disponíveis?`;
    return `https://wa.me/5511987797862?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicos" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-rose/10 border border-brand-rose/20 text-brand-rose rounded-full mb-4">
              <Sparkles className="w-3 h-3 text-brand-rose" />
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase">
                Menu de Procedimentos Exclusivos
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mb-4">
              Extensão de Cílios <br />
              <span className="italic font-normal text-brand-rose font-serif">de Alto Padrão</span>
            </h2>
            <p className="text-sm md:text-base text-brand-nude/70 font-light leading-relaxed">
              Mapeamento milimétrico, fios ultraleves tecnológicos e respeito absoluto à saúde dos seus fios naturais. Escolha o efeito ideal para o seu estilo:
            </p>
          </div>
          
          <div className="hidden lg:block">
            <p className="text-xs text-brand-nude/50 font-light text-right max-w-xs">
              Todos os procedimentos incluem higienização profunda, isolamento preciso e aplicação de fios hipoalergênicos.
            </p>
          </div>
        </div>

        {/* Services Grid with Image Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group flex flex-col justify-between bg-brand-black-light border border-brand-rose/15 hover:border-brand-rose/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Photo preview header */}
              {service.imageSrc && (
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-black">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black-light via-transparent to-transparent opacity-90" />
                  
                  {/* Badge if available */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-brand-black/90 backdrop-blur-md border border-brand-rose/40 text-brand-rose text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1 shadow-lg">
                      {service.badge}
                    </div>
                  )}

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-4 inline-flex items-center px-3 py-1 bg-brand-black/90 backdrop-blur-md border border-brand-rose/30 text-brand-rose font-semibold tracking-wider text-sm">
                    {service.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </div>
                </div>
              )}

              <div className="p-7 flex flex-col flex-grow">
                {/* Category Indicator */}
                <span className="text-[10px] tracking-[0.2em] text-brand-rose uppercase font-semibold block mb-2">
                  Procedimento de Cílios
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl font-light text-white tracking-wide mb-3 group-hover:text-brand-rose transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-nude/75 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Features List */}
                {service.features && service.features.length > 0 && (
                  <div className="border-t border-brand-rose/10 pt-5 mb-8 flex-grow">
                    <p className="text-[10px] tracking-[0.15em] text-brand-nude/50 uppercase font-bold mb-3">
                      Diferenciais do Procedimento:
                    </p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-nude/80 font-light">
                          <Check className="w-3.5 h-3.5 text-brand-rose shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Direct Action Link with custom message */}
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={getWhatsAppLink(service.name, service.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2.5 py-3.5 bg-gradient-to-r from-brand-rose/10 to-brand-rose/5 border border-brand-rose/40 hover:border-brand-rose hover:bg-brand-rose hover:text-brand-black text-brand-rose text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Agendar no WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note / Callout below services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center border-t border-brand-rose/10 pt-8"
        >
          <p className="text-xs text-brand-nude/50 font-light tracking-wide italic">
            * Valores e disponibilidades sujeitos a confirmação via WhatsApp. Manutenções recomendadas entre 15 a 21 dias para preservar o preenchimento e a saúde dos fios.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
