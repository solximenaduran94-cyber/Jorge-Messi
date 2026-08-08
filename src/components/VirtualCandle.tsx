import React, { useState } from 'react';
import { Flame, Sparkles, MapPin, Heart, Check, Plus, Filter } from 'lucide-react';
import { LitCandle } from '../types';

interface VirtualCandleProps {
  candles: LitCandle[];
  totalCandles: number;
  onAddCandle: (name: string, location: string, dedication?: string) => void;
  isOpenModal: boolean;
  onCloseModal: () => void;
}

export const VirtualCandle: React.FC<VirtualCandleProps> = ({
  candles,
  totalCandles,
  onAddCandle,
  isOpenModal,
  onCloseModal,
}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Rosario, Argentina');
  const [dedication, setDedication] = useState('');
  const [litSuccess, setLitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddCandle(name, location, dedication);
    setLitSuccess(true);
    setTimeout(() => {
      setLitSuccess(false);
      setName('');
      setDedication('');
      onCloseModal();
    }, 1500);
  };

  return (
    <section id="velas-section" className="py-16 bg-[#080808] text-[#dcdcdc] border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-zinc-300 text-xs font-sans tracking-[0.2em] uppercase">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Altar de Luz Virtual
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light">
            Enciende una Vela por Jorge Messi
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-sans font-light leading-relaxed">
            Cada luz representa una oración, un pensamiento de paz y una muestra de afecto para sostener a Lionel Messi y a su familia en este momento.
          </p>
        </div>

        {/* Central Candle Display Area */}
        <div className="bg-[#101010] border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          
          {/* Flame background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/5 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Animated Candle Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#080808] border border-white/10">
              
              {/* Animated Flame */}
              <div className="relative mb-6 flex flex-col items-center">
                {/* Flame Halo */}
                <div className="w-24 h-24 bg-amber-500/10 rounded-full blur-xl animate-pulse absolute -top-8" />
                
                {/* The Flame */}
                <div className="relative w-8 h-14 mb-1">
                  <div className="w-8 h-12 bg-gradient-to-t from-amber-600 via-amber-400 to-amber-100 rounded-full blur-[1px] animate-bounce duration-700 shadow-[0_0_20px_#f59e0b]" />
                  <div className="w-3 h-6 bg-amber-100 rounded-full absolute bottom-1 left-2.5 blur-[0.5px]" />
                </div>

                {/* Candle Wick */}
                <div className="w-1 h-3 bg-zinc-600 rounded-t-sm" />

                {/* Candle Body */}
                <div className="w-16 h-36 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-300 shadow-lg border-t border-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-200/20 via-transparent to-black/30" />
                  <div className="absolute top-2 left-2 right-2 h-1 bg-white/40 rounded-full blur-[0.5px]" />
                </div>

                {/* Candle Base/Candlestick */}
                <div className="w-28 h-4 bg-zinc-900 border-t border-zinc-600 shadow-xl" />
              </div>

              {/* Total counter */}
              <div className="text-center space-y-1">
                <div className="text-3xl font-serif text-white font-light tracking-tight">
                  {totalCandles.toLocaleString()}
                </div>
                <p className="text-xs text-amber-300 font-sans uppercase tracking-[0.2em]">
                  Velas Virtuales Encendidas
                </p>
              </div>

              <button
                onClick={onCloseModal}
                className="mt-6 w-full py-3 bg-white text-black hover:bg-zinc-200 font-sans uppercase tracking-[0.15em] font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 fill-black text-black" />
                <span>Encender Mi Vela Ahora</span>
              </button>

            </div>

            {/* Recent Lit Candles List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-serif text-white font-light flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Últimas Velas Encendidas por la Comunidad
                </h3>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-sans">En vivo</span>
              </div>

              <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
                {candles.map((candle) => (
                  <div
                    key={candle.id}
                    className="p-3.5 bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 bg-amber-950/40 border border-amber-500/30 text-amber-400 flex-shrink-0 mt-0.5">
                      <Flame className="w-4 h-4 fill-amber-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-sans font-medium text-white truncate">
                          {candle.name}
                        </h4>
                        <span className="text-xs text-zinc-500 whitespace-nowrap font-sans">
                          {candle.timestamp}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-zinc-400 mt-0.5 font-sans">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{candle.location}</span>
                      </div>

                      {candle.dedication && (
                        <p className="text-xs text-zinc-300 italic font-serif mt-1.5 bg-[#080808]/60 p-2 border border-white/5">
                          "{candle.dedication}"
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Light Candle Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#121212] border border-white/20 max-w-lg w-full p-6 shadow-2xl relative">
            
            <button
              onClick={onCloseModal}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 hover:bg-white/10 text-sm font-sans"
            >
              ✕
            </button>

            {litSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-white/5 border border-white/20 flex items-center justify-center mx-auto text-amber-300">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white font-light">
                  ¡Tu Vela ha sido Encendida!
                </h3>
                <p className="text-sm text-zinc-300 font-sans font-light">
                  Gracias por enviar tu oración y luz a Lionel Messi y su familia.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-amber-300 border-b border-white/10 pb-3">
                  <Flame className="w-5 h-5 fill-amber-400" />
                  <h3 className="text-xl font-serif text-white font-light">
                    Encender una Vela Virtual
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 font-sans">
                  Completa tus datos para dedicar una luz en memoria de Jorge Messi y enviarle fuerza a Leo.
                </p>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-sans text-zinc-300 mb-1">
                    Tu Nombre o Familia *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Familia Martínez o Juan de Rosario"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-sans text-zinc-300 mb-1">
                    Ciudad / País
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Rosario, Argentina / Barcelona / Miami"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-sans text-zinc-300 mb-1">
                    Palabras de Dedicatoria u Oración (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Escribe una pequeña oración o mensaje de aliento para Leo..."
                    value={dedication}
                    onChange={(e) => setDedication(e.target.value)}
                    className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none font-sans resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3 font-sans">
                  <button
                    type="button"
                    onClick={onCloseModal}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-zinc-300 text-xs uppercase tracking-wider"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-white text-black hover:bg-zinc-200 font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
                  >
                    <Flame className="w-4 h-4 fill-black text-black" />
                    <span>Encender Vela</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
