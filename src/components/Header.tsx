import React, { useState } from 'react';
import { Volume2, VolumeX, Flame, Heart, Share2, MessageSquare, BookOpen, Globe } from 'lucide-react';
import { memorialAudio } from '../utils/audio';

interface HeaderProps {
  candleCount: number;
  onOpenCandleModal: () => void;
  onOpenShareModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  candleCount,
  onOpenCandleModal,
  onOpenShareModal,
}) => {
  const [audioActive, setAudioActive] = useState(false);

  const toggleAudio = () => {
    const active = memorialAudio.toggle();
    setAudioActive(active);
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 text-[#dcdcdc] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left branding */}
        <div className="flex items-center space-x-3">
          {/* Black Mourning Ribbon SVG / Crespón negro */}
          <div className="w-8 h-8 rounded-none border border-white/20 bg-[#121212] flex items-center justify-center shadow-inner relative group" title="Crespón Negro - Luto Oficial">
            <div className="w-3 h-5 bg-[#080808] border border-zinc-600 relative transform -rotate-12">
              <div className="absolute -top-1 -left-1 w-5 h-2 bg-zinc-900 border-t border-b border-zinc-600"></div>
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
          </div>

          <div>
            <h1 className="text-base sm:text-lg font-serif font-light text-white tracking-tight flex items-center gap-2">
              Jorge Horacio Messi
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans px-2 py-0.5 border border-white/20 bg-white/5 text-zinc-300">
                1958 – 2026
              </span>
            </h1>
            <p className="text-[11px] uppercase tracking-[0.2em] font-sans text-zinc-400 hidden sm:block">
              In Memoriam • Rosario, Argentina
            </p>
          </div>
        </div>

        {/* Navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-[0.2em] font-sans text-zinc-400">
          <button 
            onClick={() => scrollToSection('deceso-info')} 
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
            Información
          </button>

          <button 
            onClick={() => scrollToSection('velas-section')} 
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Velas ({candleCount})
          </button>

          <button 
            onClick={() => scrollToSection('muro-condolencias')} 
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
            Mensajes
          </button>

          <button 
            onClick={() => scrollToSection('redes-oficiales')} 
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            Redes Oficiales
          </button>
        </nav>

        {/* Right actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Ambient Music Toggle */}
          <button
            onClick={toggleAudio}
            className={`px-3 py-1.5 border text-xs tracking-wider uppercase font-sans transition-all flex items-center gap-1.5 ${
              audioActive
                ? 'bg-amber-950/40 text-amber-200 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                : 'bg-white/5 text-zinc-400 border-white/10 hover:text-white hover:border-white/30'
            }`}
            title={audioActive ? "Silenciar música ambiental de homenaje" : "Reproducir suave melodía ambiental de piano"}
          >
            {audioActive ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{audioActive ? "Música Activa" : "Música Memorial"}</span>
          </button>

          {/* Light Candle Button */}
          <button
            onClick={onOpenCandleModal}
            className="px-4 py-1.5 bg-white text-black hover:bg-zinc-200 font-sans uppercase tracking-[0.15em] font-semibold text-xs transition-all shadow-md flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5 fill-black" />
            <span>Encender Vela</span>
          </button>

          {/* Share Button */}
          <button
            onClick={onOpenShareModal}
            className="p-2 bg-white/5 text-zinc-300 border border-white/10 hover:border-white/30 hover:text-white transition-all"
            title="Compartir Homenaje"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
