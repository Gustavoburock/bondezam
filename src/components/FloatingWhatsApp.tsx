import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/5511987797862?text=Olá%20Bondezan!%20Gostaria%20de%20saber%20mais%20e%20agendar%20um%20horário%20para%20extensão%20de%20cílios.";

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Lash Designer no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 py-3 px-4.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-white text-[#128C7E]" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
      </div>
      <span className="text-xs font-bold tracking-wider uppercase hidden sm:inline pr-1">
        Agendar Horário
      </span>
    </motion.a>
  );
}
