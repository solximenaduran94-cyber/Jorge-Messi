import React from 'react';
import { Heart, Flame, Shield, ArrowUp, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenCandleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCandleModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    '¡Hola Liorah Studio! Vi el sitio memorial y me gustaría consultar por el servicio de invitaciones web o páginas personalizadas.'
  );

  return (
    <footer className="bg-[#080808] text-zinc-400 py-12 border-t border-white/10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Memorial Summary */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-lg font-serif font-light text-white flex items-center justify-center md:justify-start gap-2">
              <span>Homenaje a Jorge Horacio Messi (1958 - 2026)</span>
            </h3>
            <p className="text-xs text-zinc-400 font-light max-w-xl">
              Espacio memorial independiente creado con el mayor respeto y admiración desde <strong className="text-zinc-200 font-medium">Liorah Studio</strong> para que aficionados de todo el mundo envíen sus oraciones y mensajes de aliento a Lionel Messi y a toda su familia.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCandleModal}
              className="px-4 py-2.5 bg-white text-black hover:bg-zinc-200 text-xs uppercase tracking-[0.15em] font-semibold transition-all flex items-center gap-2"
            >
              <Flame className="w-4 h-4 fill-black text-black" />
              <span>Encender Vela</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-white/5 border border-white/15 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Liorah Studio Web Invitations & Custom Sites Promo Card */}
        <div className="bg-gradient-to-r from-[#0d0d0d] via-[#121212] to-[#0d0d0d] border border-amber-500/30 p-6 shadow-2xl relative overflow-hidden space-y-5">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-white/10 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[10px] uppercase font-sans tracking-widest">
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>Servicios de Diseño & Desarrollo Web</span>
              </div>
              <h3 className="text-xl font-serif text-white font-light">
                ¿Querés un Sitio Web para tu Evento o Invitaciones Digitales?
              </h3>
              <p className="text-xs text-zinc-300 font-light max-w-2xl leading-relaxed">
                En <strong className="text-amber-200 font-semibold">Liorah Studio</strong> diseñamos invitaciones web interactivas, páginas de eventos (casamientos, XV años, cumpleaños) y sitios memoriales o corporativos a medida. Con confirmación de asistencia, mapa, música, galerías e itinerario.
              </p>
            </div>

            {/* WhatsApp Direct Action Button */}
            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Contratar Servicios por WhatsApp</span>
            </a>
          </div>

          {/* Social Networks Links Grid */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <span className="text-xs uppercase tracking-widest font-sans text-zinc-400 text-center sm:text-left">
              Seguinos en nuestras redes oficiales:
            </span>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/liorah.ok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/15 hover:border-pink-500/60 hover:bg-pink-950/30 text-xs text-zinc-200 hover:text-pink-200 transition-all group"
              >
                <span className="text-base">📸</span>
                <span className="font-medium">Instagram</span>
                <span className="text-[10px] text-zinc-500 group-hover:text-pink-300 font-mono">@liorah.ok</span>
                <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-pink-300" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61593223583165"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/15 hover:border-blue-500/60 hover:bg-blue-950/30 text-xs text-zinc-200 hover:text-blue-200 transition-all group"
              >
                <span className="text-base">📘</span>
                <span className="font-medium">Facebook</span>
                <span className="text-[10px] text-zinc-500 group-hover:text-blue-300 font-mono">Liorah Studio</span>
                <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-blue-300" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@liorah.ok?_r=1&_t=ZS-98iMFyQVW2m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/15 hover:border-cyan-500/60 hover:bg-cyan-950/30 text-xs text-zinc-200 hover:text-cyan-200 transition-all group"
              >
                <span className="text-base">🎵</span>
                <span className="font-medium">TikTok</span>
                <span className="text-[10px] text-zinc-500 group-hover:text-cyan-300 font-mono">@liorah.ok</span>
                <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-cyan-300" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-light gap-4 pt-2">
          <p>
            © 2026 Homenaje Memorial Jorge Messi • Diseñado por <span className="text-zinc-300 font-medium">Liorah Studio</span>.
          </p>

          <div className="flex items-center gap-1.5 text-zinc-300 uppercase tracking-widest text-[11px]">
            <span>Liorah Studio • Invitaciones Web & Desarrollo Digital</span>
            <Heart className="w-3.5 h-3.5 fill-white/30 text-white" />
          </div>
        </div>

      </div>
    </footer>
  );
};

