import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageSquare, Maximize2, X } from 'lucide-react';
import { SERVICES } from '../data';

export default function ServicesList() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; price: number } | null>(null);

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
              Mapeamento milimétrico, fios ultraleves tecnológicos e cuidado absoluto com a saúde dos seus fios naturais. Encontre o efeito perfeito para o seu olhar, com manutenção de 15–20 dias ou a possibilidade de prolongar a durabilidade por mais de 30 dias através do método Capping.
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
                <div 
                  onClick={() => setSelectedPhoto({ src: service.imageSrc, title: service.name, price: service.price })}
                  className="relative w-full aspect-[3/4] overflow-hidden bg-brand-black cursor-pointer group/img"
                  title="Clique para ver a foto completa"
                >
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black-light via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Badge if available */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-brand-black/90 backdrop-blur-md border border-brand-rose/40 text-brand-rose text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1 shadow-lg">
                      {service.badge}
                    </div>
                  )}

                  {/* Expand button hint */}
                  <div className="absolute top-3 left-3 bg-brand-black/80 backdrop-blur-md p-1.5 rounded-full border border-brand-rose/30 text-brand-rose opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

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
      </div>

      {/* Fullscreen Photo Modal with 100% Uncropped Image */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-brand-black-light border border-brand-rose/40 rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-brand-rose/20 bg-brand-black">
                <div>
                  <h4 className="font-serif text-lg text-white font-medium">{selectedPhoto.title}</h4>
                  <p className="text-xs text-brand-rose font-semibold">
                    {selectedPhoto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-full hover:bg-brand-rose/20 text-brand-nude/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Real Full Image without any cropping */}
              <div className="relative flex-1 overflow-auto bg-black flex items-center justify-center p-2">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-auto object-contain rounded-sm shadow-md"
                />
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 border-t border-brand-rose/20 bg-brand-black flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-brand-nude/60 font-light">
                  Foto real do procedimento sem cortes
                </span>
                <a
                  href={getWhatsAppLink(selectedPhoto.title, selectedPhoto.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-rose text-brand-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Agendar este modelo</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
