import { motion } from 'motion/react';
import { Award, Shield, Sparkles, Heart } from 'lucide-react';
import bondezanPhoto from '../assets/images/bianca_lash.jpeg';

export default function About() {
  const whatsappLink = "https://wa.me/5511987797862?text=Olá%20Bondezan!%20Gostaria%20de%20tirar%20algumas%20dúvidas%20sobre%20as%20extensões%20de%20cílios.";

  return (
    <section id="sobre" className="py-24 bg-brand-black-light relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with sophisticated overlay borders */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5]">
              {/* Outer border offset */}
              <div className="absolute -inset-4 border border-brand-rose/25 pointer-events-none" />
              
              <img
                src={bondezanPhoto}
                alt="Bondezan Lash Designer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top shadow-2xl relative z-10 filter brightness-95 hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Luxury gold/rose ribbon corner badge */}
              <div className="absolute top-4 left-4 bg-brand-black/90 border border-brand-rose/30 px-3 py-1.5 z-20 backdrop-blur-sm">
                <span className="text-[9px] tracking-[0.2em] text-brand-rose uppercase font-bold">
                  Lash Artist VIP
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and stats */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-brand-rose font-bold mb-3 block">
              A Mente por Trás do Olhar
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mb-6">
              Bondezan <br />
              <span className="italic font-normal text-brand-rose font-serif">Lash Designer</span>
            </h2>
            
            <p className="text-brand-nude/80 text-sm md:text-base leading-relaxed font-light mb-6 tracking-wide">
              Com anos de dedicação à estética e simetria do olhar, a marca Bondezan nasceu do propósito de proporcionar não apenas extensões de cílios comuns, mas sim uma verdadeira experiência de sofisticação, rejuvenescimento e autocuidado exclusivo.
            </p>
            
            <p className="text-brand-nude/80 text-sm md:text-base leading-relaxed font-light mb-10 tracking-wide">
              Cada atendimento é tratado como uma obra de arte única. Desenvolvemos um mapeamento milimétrico que respeita o formato e caimento dos seus olhos, valorizando sua expressão e, acima de tudo, preservando a saúde e integridade dos seus fios naturais.
            </p>

            {/* Core commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-rose/5 border border-brand-rose/20 text-brand-rose shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-light tracking-wide mb-1">Técnicas Exclusivas</h4>
                  <p className="text-xs text-brand-nude/60 font-light leading-relaxed">
                    Domínio dos volumes mais sofisticados do mundo (Brasileiro, Fox, Luxo, Aura e 3D) com acabamento impecável.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-rose/5 border border-brand-rose/20 text-brand-rose shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-light tracking-wide mb-1">Saúde Ocular Rigorosa</h4>
                  <p className="text-xs text-brand-nude/60 font-light leading-relaxed">
                    Isolamento fio a fio sem sobrepeso, cola hipoalergênica aprovada e protocolos estritos de higienização.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct personal WhatsApp trigger */}
            <div className="flex items-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 border border-brand-rose/40 hover:border-brand-rose text-brand-rose hover:text-brand-black hover:bg-brand-rose text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300"
              >
                <span>Conversar com a Lash Designer</span>
              </motion.a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
