import { Sparkles, Instagram, MessageSquare, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5511987797862?text=Olá%20Bondezan!%20Gostaria%20de%20agendar%20um%20horário.";

  return (
    <footer className="bg-brand-black border-t border-brand-rose/10 py-16 relative overflow-hidden">
      {/* Delicate layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex flex-col tracking-wider mb-4">
              <span className="font-serif text-2xl font-semibold text-white tracking-[0.15em] uppercase">
                Bondezan
              </span>
              <span className="text-xs tracking-[0.3em] text-brand-rose uppercase font-medium -mt-1 pl-0.5">
                Lash Designer
              </span>
            </div>
            
            <p className="text-brand-nude/60 text-sm max-w-sm leading-relaxed font-light mb-6">
              Transmitindo sofisticação, delicadeza e bem-estar através de cílios de alto padrão personalizados para mulheres exigentes.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://instagram.com/bondezan.lashdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-brand-rose/5 border border-brand-rose/20 text-brand-rose hover:bg-brand-rose hover:text-brand-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-brand-rose/5 border border-brand-rose/20 text-brand-rose hover:bg-brand-rose hover:text-brand-black transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-base text-white tracking-widest uppercase mb-6 font-semibold">
              Navegação
            </h4>
            <ul className="space-y-3.5 text-xs tracking-[0.15em] uppercase font-light">
              <li>
                <a href="#home" className="text-brand-nude/70 hover:text-brand-rose transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-brand-nude/70 hover:text-brand-rose transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-brand-nude/70 hover:text-brand-rose transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-brand-nude/70 hover:text-brand-rose transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-brand-nude/70 hover:text-brand-rose transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-base text-white tracking-widest uppercase mb-6 font-semibold">
              Contato & Local
            </h4>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start text-sm font-light text-brand-nude/80">
                <MapPin className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                <span>
                  Atendimento em Embu das Artes - SP <br />
                  <span className="text-xs text-brand-nude/50">Rua Flamengo, 03 - Jardim Ângela</span>
                </span>
              </div>
              
              <div className="flex gap-3 items-start text-sm font-light text-brand-nude/80">
                <MessageSquare className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                <span>
                  WhatsApp: <br />
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-rose hover:underline"
                  >
                    +55 (11) 98779-7862
                  </a>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Separator line */}
        <div className="border-t border-brand-rose/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-nude/40 font-light">
            &copy; {currentYear} Bondezan Lash Designer. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-nude/40 font-light flex items-center gap-1.5">
            <span>Desenvolvido com sofisticação</span>
            <Sparkles className="w-3 h-3 text-brand-rose" />
          </p>
        </div>

      </div>
    </footer>
  );
}
