import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  MessageSquare, 
  Star, 
  Zap, 
  Eye, 
  HeartHandshake, 
  Flame, 
  ChevronDown, 
  FileText, 
  HelpCircle,
  TrendingUp,
  UserCheck,
  Check
} from 'lucide-react';
import { COURSE_MODULES, COURSE_FAQ } from '../courseData';
import biancaPhoto from '../assets/images/bianca_lash.jpeg';

export default function CourseLandingPage() {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const whatsappCourseEnrollmentLink = "https://wa.me/5511987797862?text=Olá%20Bianca!%20Tenho%20interesse%20no%20Curso%20de%20Extensão%20de%20Cílios%20(Apostila%20de%20Formação)%20e%20gostaria%20de%20saber%20as%20próximas%20datas%20e%20valores.";

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const navigateToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-nude overflow-x-hidden selection:bg-brand-rose/20 selection:text-white font-sans">
      
      {/* Top Banner Alert / Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-rose/15 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" onClick={navigateToHome} className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
            <span className="font-serif text-lg tracking-[0.2em] font-light">BONDEZAN</span>
            <span className="text-[10px] tracking-[0.25em] text-brand-rose uppercase border-l border-brand-rose/40 pl-3">
              Academy
            </span>
          </a>

          <div className="flex items-center gap-4">
            <a 
              href="/" 
              onClick={navigateToHome}
              className="text-xs text-brand-nude/70 hover:text-white tracking-widest uppercase transition-colors hidden sm:block"
            >
              ← Ver Atendimentos
            </a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#inscricao"
              onClick={(e) => scrollToSection(e, 'inscricao')}
              className="px-5 py-2 bg-gradient-to-r from-brand-rose to-[#d48b96] text-brand-black text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <span>Garantir Vaga</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. SEÇÃO DE ATENÇÃO (ATTENTION) */}
      {/* Hero com alto impacto, promessa clara e autoridade instantânea */}
      {/* ========================================================================= */}
      <section id="atencao" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-brand-rose/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-10 right-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Micro-badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-rose/10 border border-brand-rose/30 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5 text-brand-rose animate-spin-slow" />
                <span className="text-[11px] font-semibold tracking-[0.25em] text-brand-rose uppercase">
                  Formação Profissional Vip • Turmas Limitadas
                </span>
              </div>

              {/* Hook Principal */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12] tracking-wide mb-6">
                Domine a arte da <br />
                <span className="italic font-normal text-brand-rose font-serif">Extensão de Cílios</span> <br />
                e conquiste sua independência.
              </h1>

              {/* Sub-headline / Problema + Promessa */}
              <p className="text-base sm:text-lg text-brand-nude/80 font-light leading-relaxed mb-8 max-w-xl">
                Aprenda a metodologia exata de <strong>Bianca Bondezan</strong> que une 
                acoplagem sem stickies, retenção máxima de até 30 dias e a confiança necessária para lotar sua agenda.
              </p>

              {/* Destaques Rápidos com Ícones */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-10 border-y border-brand-rose/15 py-6">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-light text-brand-rose">14</span>
                  <span className="text-xs text-brand-nude/70 font-light">Módulos Teóricos & Práticos</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-light text-brand-rose">100%</span>
                  <span className="text-xs text-brand-nude/70 font-light">Prática Supervisionada</span>
                </div>
                <div className="flex flex-col col-span-2 sm:col-span-1">
                  <span className="font-serif text-2xl font-light text-brand-rose">Certificado</span>
                  <span className="text-xs text-brand-nude/70 font-light">Reconhecido & Assinado</span>
                </div>
              </div>

              {/* CTA Primário */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappCourseEnrollmentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-rose hover:bg-white text-brand-black font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-xl shadow-brand-rose/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Quero ser aluna da Bianca</span>
                </motion.a>

                <a 
                  href="#grade-curricular" 
                  onClick={(e) => scrollToSection(e, 'grade-curricular')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-brand-rose/30 hover:border-brand-rose text-brand-nude hover:text-white text-xs tracking-[0.15em] uppercase transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-brand-rose" />
                  <span>Ver Conteúdo da Apostila</span>
                </a>
              </div>

              {/* Prova de urgência / vagas */}
              <div className="mt-6 flex items-center gap-2 text-xs text-brand-nude/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Próxima turma com vagas individuais para foco total em você.</span>
              </div>
            </motion.div>

            {/* Right Card: Foto da Instrutora Bianca & Credenciais */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Decorative Framed Borders */}
                <div className="absolute -inset-3 border border-brand-rose/20 rounded-sm pointer-events-none" />
                <div className="absolute -inset-6 border border-brand-rose/10 rounded-sm pointer-events-none hidden sm:block" />

                {/* Main Photo Card */}
                <div className="relative bg-brand-black-light border border-brand-rose/30 overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] w-full overflow-hidden relative">
                    <img 
                      src={biancaPhoto} 
                      alt="Bianca Bondezan - Instrutora Lash Designer" 
                      className="w-full h-full object-cover object-center filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />

                    {/* Floating Badge on Photo */}
                    <div className="absolute top-4 right-4 bg-brand-black/90 backdrop-blur-md border border-brand-rose/40 px-3.5 py-1.5 text-center">
                      <span className="text-[10px] tracking-[0.2em] text-brand-rose uppercase font-bold block">
                        Instrutora Oficial
                      </span>
                      <span className="text-xs text-white font-serif font-light">
                        Bianca Bondezan
                      </span>
                    </div>

                    {/* Bottom Quote on Photo */}
                    <div className="absolute bottom-4 left-4 right-4 bg-brand-black/85 backdrop-blur-md border border-brand-rose/25 p-4">
                      <p className="text-xs text-brand-nude/90 italic font-serif leading-relaxed">
                        "Seu trabalho começa no conhecimento. Não tenha pressa para buscar velocidade: construa primeiro uma base sólida."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEÇÃO DE INTERESSE (INTEREST) */}
      {/* A Dor do Mercado vs O Diferencial do Método Bianca Bondezan */}
      {/* ========================================================================= */}
      <section id="interesse" className="py-24 bg-brand-black-light border-y border-brand-rose/15 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-brand-rose font-bold block mb-3">
              Por que a maioria erra?
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-wide">
              O que separa uma aplicadora amadora de uma <span className="italic font-normal text-brand-rose font-serif">Lash Designer disputada</span>
            </h2>
            <div className="h-[1px] bg-brand-rose w-12 mx-auto mt-6" />
          </div>

          {/* Comparativo de Realidade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* O curso comum / dores */}
            <div className="p-8 bg-brand-black/60 border border-red-900/30 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
                  ✕
                </div>
                <h3 className="font-serif text-xl text-white font-light">Como a maioria começa:</h3>
              </div>
              <ul className="space-y-4 text-sm text-brand-nude/70 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Insegurança constante:</strong> medo de colar os olhos da cliente ou causar alergias por falta de biossegurança.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Quedas na primeira semana:</strong> clientes reclamando de retenção sem entender o ciclo da cola e a umidade do ar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Stickies e desconforto:</strong> fios grudados uns aos outros repuxando e danificando a raiz natural.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Cobrando barato:</strong> sem autoridade para cobrar R$ 130 a R$ 160 por procedimento e refém de promoções.</span>
                </li>
              </ul>
            </div>

            {/* O Método Bianca Bondezan */}
            <div className="p-8 bg-gradient-to-b from-brand-rose/10 to-brand-black/80 border border-brand-rose/40 relative shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-rose/20 border border-brand-rose flex items-center justify-center text-brand-rose font-bold text-sm">
                  ✓
                </div>
                <h3 className="font-serif text-xl text-white font-light">Com a Formação Bianca Bondezan:</h3>
              </div>
              <ul className="space-y-4 text-sm text-brand-nude/90 font-light">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                  <span><strong>Domínio da Fisiologia Ocular:</strong> saiba exatamente qual fio usar sem nunca sobrecarregar a estrutura natural.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                  <span><strong>Retenção Extrema de até 30 dias:</strong> segredos de termohigrometria e controle milimétrico da gota de adesivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                  <span><strong>Visagismo e Mappings Consagrados:</strong> crie efeitos Gatinho, Boneca, Natural e Fox sob medida para cada olhar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                  <span><strong>Checklist & Ficha de Atendimento:</strong> metodologia profissional pronta para você atender com postura de alto padrão.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Os 4 Pilares Fundamentais da Formação */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-brand-black border border-brand-rose/20">
              <ShieldCheck className="w-6 h-6 text-brand-rose mb-4" />
              <h4 className="font-serif text-lg text-white mb-2">1. Biossegurança</h4>
              <p className="text-xs text-brand-nude/70 leading-relaxed font-light">
                Esterilização, controle de contaminação cruzada e descarte correto segundo normas sanitárias.
              </p>
            </div>

            <div className="p-6 bg-brand-black border border-brand-rose/20">
              <Eye className="w-6 h-6 text-brand-rose mb-4" />
              <h4 className="font-serif text-lg text-white mb-2">2. Mapeamento Facial</h4>
              <p className="text-xs text-brand-nude/70 leading-relaxed font-light">
                Planejamento simétrico de curvaturas e comprimentos para valorizar o formato de cada olho.
              </p>
            </div>

            <div className="p-6 bg-brand-black border border-brand-rose/20">
              <Zap className="w-6 h-6 text-brand-rose mb-4" />
              <h4 className="font-serif text-lg text-white mb-2">3. Acoplagem Precisa</h4>
              <p className="text-xs text-brand-nude/70 leading-relaxed font-light">
                Isolamento milimétrico, distância de segurança da pálpebra e zero excesso de adesivo.
              </p>
            </div>

            <div className="p-6 bg-brand-black border border-brand-rose/20">
              <TrendingUp className="w-6 h-6 text-brand-rose mb-4" />
              <h4 className="font-serif text-lg text-white mb-2">4. Retenção & Negócio</h4>
              <p className="text-xs text-brand-nude/70 leading-relaxed font-light">
                Química da cola, protocolos de manutenção, ficha de anamnese e fidelização de clientes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SEÇÃO DE DESEJO (DESIRE) */}
      {/* A Grade Completa da Apostila Oficial + Transformação & Bônus */}
      {/* ========================================================================= */}
      <section id="grade-curricular" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-brand-rose font-bold block mb-3">
              Grade Curricular Oficial
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-wide">
              O que você vai aprender na <span className="italic font-normal text-brand-rose font-serif">Apostila de Formação</span>
            </h2>
            <p className="text-sm text-brand-nude/75 font-light mt-4">
              Conteúdo teórico e prático estruturado minuciosamente para transformar você em uma especialista completa.
            </p>
            <div className="h-[1px] bg-brand-rose w-12 mx-auto mt-6" />
          </div>

          {/* Accordion dos Módulos da Apostila */}
          <div className="max-w-4xl mx-auto space-y-4 mb-20">
            {COURSE_MODULES.map((module, idx) => {
              const isOpen = openModuleIndex === idx;

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="border border-brand-rose/15 bg-brand-black-light/70 overflow-hidden transition-all duration-300 hover:border-brand-rose/40"
                >
                  <button
                    onClick={() => toggleModule(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-serif text-xl sm:text-2xl text-brand-rose font-light shrink-0">
                        {module.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-base sm:text-lg text-white font-medium group-hover:text-brand-rose transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-xs text-brand-nude/60 font-light mt-0.5">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`p-2 text-brand-rose transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-brand-rose/10 bg-brand-black/60 px-6 py-5"
                      >
                        <div className="space-y-2 mb-4">
                          {module.topics.map((topic, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-nude/80 font-light">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-rose shrink-0 mt-1" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>

                        {/* Mensagem Chave / Dica da Instrutora */}
                        <div className="mt-4 p-3 bg-brand-rose/10 border-l-2 border-brand-rose text-xs text-brand-rose font-serif italic">
                          "{module.takeaway}"
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* O que está incluso no seu Pacote de Formação */}
          <div className="p-8 sm:p-12 bg-gradient-to-r from-brand-black-light via-brand-black to-brand-black-light border border-brand-rose/30 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <span className="text-[10px] tracking-[0.2em] text-brand-rose uppercase font-bold block mb-2">
                  Tudo que você recebe
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-4">
                  Seu Kit de Formação Completo
                </h3>
                <p className="text-sm text-brand-nude/80 font-light leading-relaxed mb-6">
                  Você não sairá com dúvidas. Nossa formação foi desenhada para que no dia seguinte você já consiga atender com segurança absoluta.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                    <FileText className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Apostila Impressa Oficial (17 páginas)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                    <Award className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Certificado de Formação Oficial</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                    <UserCheck className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Treino Prático em Modelo Real</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Checklist Profissional de 11 Etapas</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                    <HeartHandshake className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Suporte VIP Pós-Curso via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                    <Sparkles className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Ficha de Anamnese Pronta para Uso</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right border-t lg:border-t-0 lg:border-l border-brand-rose/20 pt-6 lg:pt-0 lg:pl-8">
                <span className="text-[11px] text-brand-nude/60 uppercase tracking-widest block mb-2">
                  Investimento na sua carreira
                </span>
                <p className="font-serif text-2xl text-white font-light mb-1">
                  Vagas Exclusivas
                </p>
                <p className="text-xs text-brand-rose font-medium tracking-wide mb-6">
                  Condições especiais no Pix ou Cartão
                </p>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappCourseEnrollmentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-brand-rose text-brand-black font-semibold text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar Próxima Data</span>
                </motion.a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SEÇÃO DE AÇÃO (ACTION) */}
      {/* Fechamento com alta conversão, FAQ rápido e CTA definitivo */}
      {/* ========================================================================= */}
      <section id="inscricao" className="py-24 bg-brand-black-light border-t border-brand-rose/20 relative">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-brand-rose font-bold block mb-3">
              Tire suas dúvidas & Garanta sua vaga
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white tracking-wide">
              Perguntas Frequentes sobre a <span className="italic font-normal text-brand-rose font-serif">Formação</span>
            </h2>
            <div className="h-[1px] bg-brand-rose w-12 mx-auto mt-6" />
          </div>

          {/* Accordion FAQ do Curso */}
          <div className="space-y-4 mb-16">
            {COURSE_FAQ.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div 
                  key={index}
                  className="border border-brand-rose/15 bg-brand-black/60 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex gap-4 items-center">
                      <HelpCircle className="w-5 h-5 text-brand-rose shrink-0 opacity-80" />
                      <span className="font-serif text-base sm:text-lg text-white font-light group-hover:text-brand-rose transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-brand-rose shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-brand-rose/10 px-6 py-4 bg-brand-black/90"
                      >
                        <p className="text-sm text-brand-nude/80 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Cartão Final de Ação (AIDA Action) */}
          <div className="p-8 sm:p-12 text-center bg-brand-black border border-brand-rose/40 relative shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-brand-rose/10 border border-brand-rose/30 flex items-center justify-center mx-auto mb-6 text-brand-rose">
              <Flame className="w-6 h-6 animate-bounce" />
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-white font-light mb-4">
              Pronta para iniciar sua nova jornada?
            </h3>
            <p className="text-sm sm:text-base text-brand-nude/80 font-light max-w-xl mx-auto leading-relaxed mb-8">
              As turmas são propositalmente pequenas para que a <strong>Bianca Bondezan</strong> consiga acompanhar cada movimento das suas mãos durante a prática. Fale agora no WhatsApp e receba os detalhes completos.
            </p>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappCourseEnrollmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-rose via-[#e09ba5] to-brand-rose text-brand-black font-bold text-xs uppercase tracking-[0.25em] shadow-2xl hover:brightness-110 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Garantir Vaga no WhatsApp</span>
            </motion.a>

            <p className="mt-4 text-[11px] text-brand-nude/50 tracking-wide">
              Atendimento direto • Resposta rápida para tirar qualquer dúvida
            </p>
          </div>

        </div>
      </section>

      {/* Footer simples e elegante da Landing Page */}
      <footer className="py-8 bg-brand-black border-t border-brand-rose/10 text-center">
        <p className="font-serif text-sm tracking-[0.2em] text-white uppercase">
          Bondezan · Lash Designer & Academy
        </p>
        <p className="text-[11px] text-brand-nude/50 font-light mt-1">
          Instrutora Bianca Bondezan • Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
}
