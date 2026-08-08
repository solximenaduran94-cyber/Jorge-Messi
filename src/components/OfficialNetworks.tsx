import React, { useState } from 'react';
import { Instagram, Facebook, Globe, Youtube, ExternalLink, Copy, Check, Heart, ShieldCheck, MessageCircle } from 'lucide-react';
import { OFFICIAL_NETWORKS } from '../data/memorialData';

export const OfficialNetworks: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const sampleDirectMsg = "Estimado Leo, te acompañamos con todo nuestro amor y respeto en la partida de tu querido padre Jorge. Mis oraciones están contigo y con toda la familia Messi. ¡Mucha fuerza capitán!";

  const handleCopySample = (index: number) => {
    navigator.clipboard.writeText(sampleDirectMsg);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'instagram':
        return <Instagram className="w-6 h-6 text-pink-500" />;
      case 'facebook':
        return <Facebook className="w-6 h-6 text-blue-500" />;
      case 'youtube':
        return <Youtube className="w-6 h-6 text-red-500" />;
      default:
        return <Globe className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="redes-oficiales" className="py-16 bg-[#080808] text-[#dcdcdc] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-zinc-300 text-xs font-sans tracking-[0.2em] uppercase">
            <Heart className="w-3.5 h-3.5 fill-white/20 text-white" />
            Canales Oficiales
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light">
            Redes Oficiales de Lionel Messi
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-sans font-light">
            Canales verificados donde puedes enviar tus palabras de aliento a Lionel Messi y su familia.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {OFFICIAL_NETWORKS.map((net, idx) => (
            <div
              key={idx}
              className="bg-[#101010] border border-white/10 p-6 flex flex-col justify-between space-y-4 transition-all shadow-lg group hover:border-white/20"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#080808] border border-white/15">
                    {getIcon(net.iconType)}
                  </div>

                  {net.verified && (
                    <span className="flex items-center gap-1 text-[11px] uppercase tracking-wider bg-white/5 text-zinc-300 border border-white/10 px-2.5 py-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
                      Verificado
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-serif text-white font-medium">
                    {net.platform}
                  </h3>
                  <p className="text-xs text-amber-300 font-mono mt-0.5">
                    {net.handle}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {net.description}
                </p>
              </div>

              <div className="pt-3 space-y-2 border-t border-white/10">
                
                <a
                  href={net.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-white text-black hover:bg-zinc-200 text-xs uppercase tracking-[0.15em] font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span>Ir a {net.platform}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>

                <button
                  onClick={() => handleCopySample(idx)}
                  className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">¡Mensaje Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar mensaje sugerido</span>
                    </>
                  )}
                </button>

              </div>

            </div>
          ))}
        </div>

        {/* Note on Twitter/X */}
        <div className="p-4 bg-[#101010] border border-white/10 text-center text-xs text-zinc-400 max-w-2xl mx-auto font-sans font-light">
          💡 <strong>Nota recordatoria:</strong> Lionel Messi no posee una cuenta personal activa en X (anteriormente Twitter). Su canal oficial principal en redes sociales es Instagram (<strong className="text-white">@leomessi</strong>).
        </div>

      </div>
    </section>
  );
};
