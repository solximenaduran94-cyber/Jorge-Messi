import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Twitter, Facebook, Send } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const shareTitle = "🕊️ Homenaje a Jorge Messi (1958 - 2026) — Envia tu mensaje de apoyo a Lionel Messi";

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${shareTitle}\n\nUnámonos en oración y apoyo a Leo Messi y su familia en este día:\n${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-[#101010] border border-white/15 max-w-md w-full p-6 shadow-2xl relative space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 text-sm"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 text-white border-b border-white/10 pb-3">
          <Share2 className="w-5 h-5 text-amber-300" />
          <h3 className="text-xl font-serif text-white font-light">
            Compartir Homenaje
          </h3>
        </div>

        <p className="text-xs text-zinc-400 font-light leading-relaxed">
          Invita a más personas a encender una vela virtual y enviar sus palabras de condolencia y aliento a Lionel Messi y su familia.
        </p>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={shareWhatsApp}
            className="p-3 bg-white/5 border border-white/15 hover:bg-white/10 text-zinc-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <Send className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={shareFacebook}
            className="p-3 bg-white/5 border border-white/15 hover:bg-white/10 text-zinc-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <Facebook className="w-4 h-4 text-blue-400" />
            <span>Facebook</span>
          </button>
        </div>

        <div className="space-y-1.5 pt-2">
          <label className="block text-xs uppercase tracking-wider text-zinc-300">
            Enlace directo del Homenaje
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-[#080808] border border-white/15 px-3 py-2 text-xs text-zinc-300 focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 bg-white text-black hover:bg-zinc-200 uppercase tracking-wider font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copiado" : "Copiar"}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
