import React, { useState } from 'react';
import { Flame, Heart, MessageSquare, Shield, Calendar, MapPin, Sparkles } from 'lucide-react';
import { JORGE_MESSI_INFO } from '../data/memorialData';

interface HeroSectionProps {
  candleCount: number;
  messageCount: number;
  onOpenCandleModal: () => void;
  onScrollToMessages: () => void;
  onScrollToNetworks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  candleCount,
  messageCount,
  onOpenCandleModal,
  onScrollToMessages,
  onScrollToNetworks,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-[#dcdcdc] py-12 lg:py-20 border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-white/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mourning badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/15 text-zinc-300 text-xs tracking-[0.2em] uppercase font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span>AFA Decretó Luto Oficial en el Fútbol Argentino</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Memorial Image Card Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Altar Glow & Candle Side Ambient Effects */}
              <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Complete Altar Container Frame */}
              <div className="relative border-2 border-amber-900/60 p-3 bg-[#0d0d0d] shadow-2xl space-y-3">
                
                {/* Top Wooden / Gold Inset Header */}
                <div className="flex items-center justify-between border-b border-amber-800/40 pb-2 px-1 text-xs font-sans text-amber-200/80 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                    <span className="text-[10px]">Altar Memorial de Rosario</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">1958 — 2026</span>
                </div>

                {/* Main Framed Photo Area */}
                <div className="relative p-2 bg-[#050505] border border-amber-700/30 shadow-inner">
                  
                  {/* Outer Gold Accent Line */}
                  <div className="border border-amber-500/30 p-1 relative">
                    <div className="aspect-[4/3] overflow-hidden bg-[#080808] relative">
                      <img
                        src="/src/assets/images/jorge_messi_user_photo.jpg"
                        alt="Fotografía de Jorge Horacio Messi"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-[center_15%] filter brightness-95 contrast-105"
                      />
                      
                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />

                      {/* Black Ribbon Draped Corner */}
                      <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none overflow-hidden">
                        <div className="bg-black border-y border-amber-600/40 text-amber-200/90 text-[8px] font-sans uppercase tracking-widest text-center py-0.5 transform -rotate-45 -translate-x-3 translate-y-2 shadow-md">
                          Luto
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Left & Right Candles Visual Elements */}
                  <div className="absolute -left-3 bottom-2 flex flex-col items-center pointer-events-none">
                    <div className="w-1.5 h-3 bg-amber-400 rounded-full blur-[1px] animate-pulse shadow-[0_0_10px_#f59e0b]"></div>
                    <div className="w-3 h-7 bg-gradient-to-b from-amber-100 to-zinc-300 border border-amber-900/40"></div>
                  </div>

                  <div className="absolute -right-3 bottom-2 flex flex-col items-center pointer-events-none">
                    <div className="w-1.5 h-3 bg-amber-400 rounded-full blur-[1px] animate-pulse shadow-[0_0_10px_#f59e0b]"></div>
                    <div className="w-3 h-7 bg-gradient-to-b from-amber-100 to-zinc-300 border border-amber-900/40"></div>
                  </div>
                </div>

                {/* Base of Altar - Flowers & Plaque */}
                <div className="pt-1 text-center space-y-1 border-t border-amber-900/40">
                  <div className="flex justify-center items-center gap-2 text-zinc-400 text-[11px] font-serif italic">
                    <span>🌹</span>
                    <span>En Memoria Eterna de Jorge Horacio Messi</span>
                    <span>🌹</span>
                  </div>
                  <h3 className="text-xl font-serif text-white font-light">
                    Jorge Horacio Messi
                  </h3>
                  <p className="text-xs text-amber-300 font-sans tracking-widest uppercase opacity-90">
                    1958 — 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats under photo */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm sm:max-w-md mt-4">
              <div className="bg-white/5 border border-white/10 p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 text-amber-300 text-lg font-bold">
                  <Flame className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
                  <span>{candleCount}</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider font-sans text-zinc-400 mt-0.5">Velas Encendidas</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-3 text-center">
                <div className="flex items-center justify-center gap-1.5 text-zinc-200 text-lg font-bold">
                  <Heart className="w-4 h-4 fill-white/20 text-white" />
                  <span>{messageCount}</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider font-sans text-zinc-400 mt-0.5">Mensajes de Fuerza</div>
              </div>
            </div>
          </div>

          {/* Main Title & Invitation Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="space-y-3">
              <p className="text-xs font-sans tracking-[0.3em] text-zinc-400 uppercase">
                Homenaje & Memorial • Realizado con respeto por Liorah Studio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-serif text-white font-light leading-none">
                Jorge Horacio Messi
              </h1>
              <p className="text-xl sm:text-2xl text-amber-200/90 font-serif italic">
                1958 — 2026
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 space-y-4 font-sans font-light leading-relaxed">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Con profundo pesar, comunicamos el fallecimiento de <strong className="text-white font-semibold">Jorge Horacio Messi</strong> ocurrido este <span className="text-white font-medium border-b border-white/30">sábado 8 de agosto de 2026 a las 02:00 a. m.</span> en el Sanatorio Centro de Rosario, Argentina, a los 68 años de edad.
              </p>

              <div className="p-4 bg-[#080808]/80 border border-white/10 text-xs sm:text-sm text-zinc-200 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Unidos en oración:</strong> Invitamos a toda la comunidad en Argentina, Barcelona, Miami y el mundo entero a encender una vela virtual o enviar sus mejores vibras y mensajes de apoyo a la familia Messi en este momento de inmenso dolor.
                </span>
              </div>
            </div>

            {/* Quick Metadata list */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs uppercase tracking-widest font-sans text-zinc-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{JORGE_MESSI_INFO.deathDate} ({JORGE_MESSI_INFO.timeOfDeath})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{JORGE_MESSI_INFO.location}, {JORGE_MESSI_INFO.city}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              
              <button
                onClick={onOpenCandleModal}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-black hover:bg-zinc-200 font-sans uppercase tracking-[0.15em] font-semibold text-xs shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <Flame className="w-4 h-4 fill-black text-black group-hover:scale-110 transition-transform" />
                <span>Encender Vela Virtual</span>
              </button>

              <button
                onClick={onScrollToMessages}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-sans uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>Escribir Mensaje / Rezo</span>
              </button>

              <button
                onClick={onScrollToNetworks}
                className="w-full sm:w-auto px-5 py-3.5 bg-white/5 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white font-sans uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 text-rose-300" />
                <span>Redes Oficiales</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
