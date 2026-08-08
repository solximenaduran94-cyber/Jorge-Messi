import React from 'react';
import { Heart, Flame, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenCandleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCandleModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-zinc-400 py-12 border-t border-white/10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-lg font-serif font-light text-white flex items-center justify-center md:justify-start gap-2">
              <span>Homenaje a Jorge Horacio Messi (1958 - 2026)</span>
            </h3>
            <p className="text-xs text-zinc-400 font-light max-w-xl">
              Espacio memorial independiente creado con el mayor respeto y admiración desde <strong className="text-zinc-200 font-medium">Liorah Studio</strong> para que aficionados de todo el mundo envíen sus oraciones, rezos y mensajes de aliento a Lionel Messi y a toda su familia.
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

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-light gap-4">
          <p>
            © 2026 Homenaje Memorial Jorge Messi • Realizado con respeto por <span className="text-zinc-300 font-medium">Liorah Studio</span>.
          </p>

          <div className="flex items-center gap-1.5 text-zinc-300 uppercase tracking-widest text-[11px]">
            <span>Liorah Studio • En memoria del padre del 10</span>
            <Heart className="w-3.5 h-3.5 fill-white/30 text-white" />
          </div>
        </div>

      </div>
    </footer>
  );
};
