import React, { useState } from 'react';
import { Sparkles, Flame, Heart, Copy, Check, Share2, Download, RefreshCw } from 'lucide-react';

export const TributeCardGenerator: React.FC = () => {
  const [sender, setSender] = useState('Un seguidor que te admira');
  const [location, setLocation] = useState('Rosario, Argentina');
  const [message, setMessage] = useState('Mucha fuerza Leo en este momento tan doloroso. Que la luz de tu papá Jorge te guíe y te dé paz.');
  const [cardTheme, setCardTheme] = useState<'darkGold' | 'deepBlue' | 'minimalNavy'>('darkGold');
  const [copied, setCopied] = useState(false);

  const getBgStyle = () => {
    switch (cardTheme) {
      case 'darkGold':
        return 'from-zinc-950 via-zinc-900 to-amber-950 border-amber-600/50';
      case 'deepBlue':
        return 'from-slate-950 via-slate-900 to-blue-950 border-blue-600/50';
      case 'minimalNavy':
        return 'from-zinc-950 via-zinc-900 to-zinc-950 border-zinc-700';
    }
  };

  const handleCopyText = () => {
    const textToCopy = `🕊️ Homenaje a Jorge Messi (1958 - 2026)\n\n"${message}"\n\n— ${sender} (${location})\n\n🕯️ Encendiendo una vela por Leo y la familia Messi.`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 bg-[#080808] text-[#dcdcdc] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-zinc-300 text-xs font-sans tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Tarjeta Personalizada de Apoyo
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light">
            Genera tu Tarjeta de Condolencias Digital
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-sans font-light">
            Crea una imagen/tarjeta de texto personalizada para compartir en tus historias o redes sociales demostrando tu apoyo a Lionel Messi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-6 space-y-4 bg-[#101010] border border-white/10 p-6 font-sans">
            <h3 className="text-lg font-serif font-light text-white border-b border-white/10 pb-3">
              Personaliza los Datos de tu Tarjeta
            </h3>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                Tu Nombre o Seudónimo
              </label>
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2 text-sm text-zinc-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                Lugar de Origen
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2 text-sm text-zinc-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                Mensaje de Fuerza
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                Estilo de Color
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCardTheme('darkGold')}
                  className={`py-2 text-xs uppercase tracking-wider border ${
                    cardTheme === 'darkGold'
                      ? 'bg-white text-black border-white font-semibold'
                      : 'bg-white/5 border-white/10 text-zinc-400'
                  }`}
                >
                  Monocromo
                </button>
                <button
                  type="button"
                  onClick={() => setCardTheme('deepBlue')}
                  className={`py-2 text-xs uppercase tracking-wider border ${
                    cardTheme === 'deepBlue'
                      ? 'bg-white text-black border-white font-semibold'
                      : 'bg-white/5 border-white/10 text-zinc-400'
                  }`}
                >
                  Azul Noche
                </button>
                <button
                  type="button"
                  onClick={() => setCardTheme('minimalNavy')}
                  className={`py-2 text-xs uppercase tracking-wider border ${
                    cardTheme === 'minimalNavy'
                      ? 'bg-white text-black border-white font-semibold'
                      : 'bg-white/5 border-white/10 text-zinc-400'
                  }`}
                >
                  Minimalista
                </button>
              </div>
            </div>

            <button
              onClick={handleCopyText}
              className="w-full py-3 bg-white text-black hover:bg-zinc-200 text-xs uppercase tracking-[0.15em] font-semibold transition-all flex items-center justify-center gap-2 mt-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>¡Texto Copiado para Compartir!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black" />
                  <span>Copiar Formato para Redes / WhatsApp</span>
                </>
              )}
            </button>
          </div>

          {/* Live Preview Card Column */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="text-xs text-zinc-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Vista Previa Digital
            </div>

            <div className="w-full max-w-md aspect-[4/5] bg-[#121212] p-8 border border-white/20 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              
              {/* Background watermark ribbon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Flame className="w-20 h-20 text-white fill-white" />
              </div>

              {/* Top Card Header */}
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-sans tracking-widest uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                  <span>HOMENAJE A JORGE MESSI</span>
                </div>
                <h4 className="text-xl font-serif text-white font-light">
                  1958 — 2026
                </h4>
              </div>

              {/* Card Quote Body */}
              <div className="my-auto py-4 space-y-3">
                <p className="text-base sm:text-lg font-serif text-zinc-100 leading-relaxed italic">
                  "{message}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-zinc-300 font-sans">
                <div>
                  <div className="font-medium text-white">{sender}</div>
                  <div className="text-[11px] text-zinc-500">{location}</div>
                </div>

                <div className="text-right text-[10px] text-zinc-400">
                  <span>8 de Agosto de 2026</span>
                  <div className="text-amber-300 font-serif">In Memoriam</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
