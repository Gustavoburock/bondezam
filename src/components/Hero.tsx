import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, ShieldCheck, Star } from 'lucide-react';
import bondezanHeroPhoto from '../assets/images/bianca_lash.jpeg';

export default function Hero() {
  const whatsappLink = "https://wa.me/5511987797862?text=Olá%20Bondezan!%20Gostaria%20de%20agendar%20um%20horário%20para%20extensão%20de%20cílios.";

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-black via-[#111114] to-brand-black text-center">
      
      {/* Radiant ambient glow behind the artist */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] md:w-[650px] h-[340px] sm:h-[500px] md:h-[650px] bg-gradient-to-b from-brand-rose/20 via-brand-pink/10 to-transparent rounded-full blur-[90px] md:blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-rose-soft/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-rose/10 border border-brand-rose/25 text-brand-rose rounded-full mb-6 backdrop-blur-sm shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-rose animate-pulse" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase">
            Atendimento Exclusivo • Alto Padrão
          </span>
        </motion.div>

        {/* Lash Designer Portrait - Centerpiece with Ethereal Lighting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] mb-2"
        >
          {/* Subtle glowing halo rings */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-brand-rose/40 via-brand-pink/20 to-transparent blur-sm -z-10" />
          <div className="absolute -inset-4 rounded-3xl border border-brand-rose/20 pointer-events-none hidden sm:block" />

          {/* Decorative Sparkles positioned around portrait */}
          <div className="absolute -top-3 -right-3 p-1.5 bg-brand-black/80 border border-brand-rose/30 rounded-full shadow-lg z-20">
            <Sparkles className="w-4 h-4 text-brand-rose animate-pulse" />
          </div>
          <div className="absolute top-1/3 -left-3 p-1 bg-brand-black/80 border border-brand-rose/20 rounded-full shadow-md z-20 hidden sm:block">
            <Star className="w-3 h-3 text-brand-rose" />
          </div>

          {/* Portrait Container with smooth lower fade */}
          <div className="relative aspect-[3/3.8] rounded-2xl overflow-hidden shadow-2xl border border-brand-rose/30 bg-brand-black-card">
            <img
              src={bondezanHeroPhoto}
              alt="Bondezan Lash Designer"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] hover:scale-[1.02] transition-transform duration-700"
            />
            
            {/* Seamless gradient fade at the bottom into the page content */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent pointer-events-none" />
          </div>

          {/* Luxury 3D Metallic Emblem Badge (Overlapping Bottom) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative -mt-10 mx-auto max-w-[280px] sm:max-w-[320px] bg-gradient-to-b from-[#232328] via-[#18181c] to-[#0f0f12] border border-brand-rose/40 rounded-xl p-3.5 shadow-2xl backdrop-blur-md z-20"
          >
            <div className="flex items-center justify-center gap-1.5 text-brand-rose mb-1">
              <Sparkles className="w-3 h-3 text-brand-rose" />
              <span className="font-serif text-lg sm:text-xl font-medium tracking-[0.2em] uppercase text-white">
                BONDEZAN
              </span>
              <Sparkles className="w-3 h-3 text-brand-rose" />
            </div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.25em] text-brand-rose uppercase font-semibold">
              O Luxo das Extensões de Cílios
            </p>
            <div className="h-[1px] w-12 bg-brand-rose/30 mx-auto my-1.5" />
            <p className="text-[10px] tracking-[0.15em] text-brand-nude/70 uppercase font-light">
              by Bondezan Lash Designer
            </p>
          </motion.div>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 mb-4"
        >
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-white leading-[1.15]">
            A REVOLUÇÃO NA <br />
            <span className="font-normal bg-gradient-to-r from-brand-rose via-brand-pink-light to-brand-rose bg-clip-text text-transparent italic font-serif">
              EXTENSÃO DE CÍLIOS
            </span>
          </h1>
        </motion.div>

        {/* High-Converting Bold Hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white font-medium text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-snug mb-3 tracking-wide"
        >
          Tudo o que você precisa saber sobre o procedimento que vai transformar o seu olhar.
        </motion.p>

        {/* Persuasive Descriptive Copy with Highlighted Accents */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-brand-nude/75 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-8 tracking-wide"
        >
          No conforto de um espaço <span className="text-brand-rose font-medium">100% privativo</span>, desfrute de um mapeamento personalizado que une a mais alta sofisticação ao cuidado rigoroso com a <span className="text-brand-rose font-medium">saúde dos seus fios naturais</span>. Acorde pronta e impecável todos os dias.
        </motion.p>

        {/* High-Impact CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-md flex flex-col items-center gap-3 mb-10"
        >
          <motion.a
            whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(228, 164, 156, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4.5 px-8 bg-gradient-to-r from-brand-rose via-[#e8afa8] to-brand-rose text-brand-black font-bold text-xs sm:text-sm tracking-[0.25em] uppercase rounded-none shadow-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <Calendar className="w-4 h-4 text-brand-black shrink-0" />
            <span className="relative z-10">Agendar Meu Horário no WhatsApp</span>
          </motion.a>

          {/* Microcopy & Scarcity */}
          <div className="flex items-center gap-2 text-[11px] text-brand-rose/90 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atendimento somente com hora marcada</span>
          </div>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-full max-w-2xl pt-6 border-t border-brand-rose/15 grid grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-brand-rose mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-serif text-lg sm:text-xl font-bold text-white">100%</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-brand-nude/70 uppercase tracking-wider font-light">
              Saúde dos Fios
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-brand-rose/10">
            <div className="flex items-center gap-1 text-brand-rose mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="font-serif text-lg sm:text-xl font-bold text-white">VIP</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-brand-nude/70 uppercase tracking-wider font-light">
              Fios Premium
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-brand-rose mb-1">
              <Heart className="w-4 h-4 text-brand-rose fill-brand-rose/30" />
              <span className="font-serif text-lg sm:text-xl font-bold text-white">5.0 ★</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-brand-nude/70 uppercase tracking-wider font-light">
              Retenção e Conforto
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
