import React, { useState } from 'react';
import { X, Check, Copy, Share2, Award, Flame, Star, ShieldCheck } from 'lucide-react';

interface BlackRibbonPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlackRibbonPreviewModal: React.FC<BlackRibbonPreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'portrait' | 'screen' | 'social'>('portrait');

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0d0d0d] border-2 border-amber-900/60 p-6 shadow-2xl space-y-5 text-[#dcdcdc] font-sans">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 transition-colors"
          title="Cerrar previsualización"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1 border-b border-amber-800/40 pb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-950/80 border border-amber-600/50 text-amber-300 text-[10px] uppercase font-sans tracking-widest">
            <Star className="w-3 h-3 fill-black text-amber-400" />
            <span>Previsualización del Lazo Negro Oficial</span>
          </div>
          <h3 className="text-xl font-serif text-white font-light pt-1">
            Crespón de Luto & Homenaje
          </h3>
          <p className="text-xs text-zinc-400 font-light">
            Símbolo de respeto institucional decretado por la AFA y la comunidad de Rosario en honor a Jorge Horacio Messi.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex border border-white/10 p-1 bg-[#050505] text-xs">
          <button
            onClick={() => setActiveTab('portrait')}
            className={`flex-1 py-1.5 px-2 text-center transition-all ${
              activeTab === 'portrait'
                ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            En Fotografía
          </button>
          <button
            onClick={() => setActiveTab('screen')}
            className={`flex-1 py-1.5 px-2 text-center transition-all ${
              activeTab === 'screen'
                ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            En Pantalla
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`flex-1 py-1.5 px-2 text-center transition-all ${
              activeTab === 'social'
                ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Insignia Social
          </button>
        </div>

        {/* Preview Container */}
        <div className="p-4 bg-[#050505] border border-amber-800/30 relative flex flex-col items-center justify-center min-h-[220px]">
          
          {activeTab === 'portrait' && (
            <div className="relative w-48 h-48 border-2 border-amber-700/50 p-1 bg-black shadow-2xl overflow-hidden group">
              <img
                src="/jorge_messi_user_photo.jpg"
                alt="Retrato de Jorge Horacio Messi"
                className="w-full h-full object-cover object-[center_15%]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/jorge_messi_uploaded.png';
                }}
              />
              
              {/* Lazo Negro Overlay Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none">
                <div className="bg-black/95 border-y-2 border-amber-500/60 text-amber-200 text-[9px] font-sans font-bold uppercase tracking-widest text-center py-1 transform -rotate-45 -translate-x-6 translate-y-3 shadow-2xl">
                  ★ LUTO ★
                </div>
              </div>

              {/* Bottom black ribbon badge */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/90 border border-amber-500/40 px-3 py-1 flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-amber-300">
                <div className="w-2 h-3 bg-black border border-amber-400 transform -rotate-12"></div>
                <span>Crespón Oficial</span>
              </div>
            </div>
          )}

          {activeTab === 'screen' && (
            <div className="w-full h-44 bg-[#0a0a0a] border border-white/10 relative p-3 flex flex-col justify-between">
              {/* Corner Black Ribbon */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="bg-black border-y border-amber-500 text-amber-300 text-[8px] font-sans uppercase tracking-widest text-center py-1 transform rotate-45 translate-x-7 translate-y-3 shadow-xl">
                  ★ Luto 1958-2026 ★
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-serif text-white">
                <Star className="w-3.5 h-3.5 fill-black text-amber-400" />
                <span>Previsualización del Sitio con Crespón de Luto</span>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 text-[11px] text-zinc-300 italic font-serif">
                "En homenaje y oración eterna por la memoria de Jorge Horacio Messi, padre admirado por el mundo."
              </div>

              <div className="flex items-center justify-between text-[10px] text-zinc-400 uppercase tracking-widest font-sans">
                <span>Rosario, Argentina</span>
                <span className="text-amber-400 font-semibold">Crespón Activo</span>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="text-center space-y-3 py-2">
              <div className="mx-auto w-20 h-20 bg-black border-2 border-amber-500/60 rounded-full flex flex-col items-center justify-center p-2 shadow-xl">
                <div className="w-4 h-7 bg-black border-2 border-amber-400 transform -rotate-12 relative mb-1">
                  <div className="absolute -top-1 -left-1.5 w-7 h-2 bg-zinc-900 border-t border-b border-amber-400"></div>
                </div>
                <span className="text-[8px] text-amber-300 uppercase tracking-widest font-bold">Q.E.P.D.</span>
              </div>
              <p className="text-xs text-zinc-300 font-serif italic max-w-xs mx-auto">
                Insignia de Luto Oficial de Jorge Horacio Messi lista para compartir en historias o foto de perfil.
              </p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCopyLink}
            className="flex-1 py-2.5 bg-amber-500 text-black hover:bg-amber-400 font-sans uppercase tracking-wider text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
          >
            {copied ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Enlace Copiado al Portapapeles' : 'Copiar Enlace con Lazo Negro'}</span>
          </button>

          <button
            onClick={onClose}
            className="py-2.5 px-4 bg-white/5 border border-white/15 hover:bg-white/10 text-white font-sans uppercase tracking-wider text-xs transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
