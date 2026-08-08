import React, { useState } from 'react';
import { MessageSquare, Heart, Send, Sparkles, Flame, Filter, User, MapPin, Feather, Search, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CondolenceMessage } from '../types';
import { QUICK_TEMPLATES } from '../data/memorialData';

interface CondolencesWallProps {
  messages: CondolenceMessage[];
  onAddMessage: (msg: Omit<CondolenceMessage, 'id' | 'createdAt' | 'likes'>) => void;
  onLikeMessage: (id: string) => void;
}

export const CondolencesWall: React.FC<CondolencesWallProps> = ({
  messages,
  onAddMessage,
  onLikeMessage,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'oracion' | 'fuerza' | 'condolencia' | 'homenaje'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewAllMode, setViewAllMode] = useState(true);
  
  // New message form states
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('Rosario, Argentina');
  const [category, setCategory] = useState<'oracion' | 'fuerza' | 'condolencia' | 'homenaje'>('fuerza');
  const [text, setText] = useState('');
  const [litCandleWithMsg, setLitCandleWithMsg] = useState(true);
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  const handleSelectTemplate = (template: string) => {
    setText(template);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !text.trim()) return;

    onAddMessage({
      name: authorName,
      location,
      category,
      text,
      candleLit: litCandleWithMsg,
    });

    setShowFormSuccess(true);
    setText('');
    setTimeout(() => setShowFormSuccess(false), 3000);
  };

  const filteredMessages = messages.filter(m => {
    const matchesFilter = activeFilter === 'all' || m.category === activeFilter;
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryBadge = (cat: CondolenceMessage['category']) => {
    switch (cat) {
      case 'oracion':
        return <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/50 text-xs font-medium">Oración / Rezo</span>;
      case 'fuerza':
        return <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/50 text-xs font-medium">Fuerza para Leo</span>;
      case 'condolencia':
        return <span className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/50 text-xs font-medium">Condolencias</span>;
      case 'homenaje':
        return <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 text-xs font-medium">Homenaje</span>;
    }
  };

  return (
    <section id="muro-condolencias" className="py-16 bg-[#080808] text-[#dcdcdc] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-zinc-300 text-xs font-sans tracking-[0.2em] uppercase">
            <Feather className="w-3.5 h-3.5 text-zinc-300" />
            Libro de Homenajes y Condolencias Guardadas
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light">
            Envía tu Mensaje de Apoyo y Buenas Vibras
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-sans font-light">
            Escribe tus condolencias, oraciones o palabras de fuerza. <strong className="text-zinc-200">Todos los mensajes quedan guardados permanentemente</strong> en la página para acompañar a Lionel Messi y a su familia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Write Message Form Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#101010] border border-white/10 p-5 sm:p-6 shadow-xl space-y-4 sticky top-20">
              
              <div className="flex items-center justify-between text-white border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-300" />
                  <h3 className="text-lg font-serif font-light">Escribir al Libro de Condolencias</h3>
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase text-emerald-400 bg-emerald-950/60 px-2 py-0.5 border border-emerald-800/50">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Guardado Permanente</span>
                </div>
              </div>

              {showFormSuccess && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 text-xs text-emerald-200 flex items-center gap-2 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>¡Tu mensaje ha sido guardado permanentemente en el libro memorial!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
                
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                    Nombre o Familia *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Martín / Familia Gómez"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                      Ciudad / País
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Rosario"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                      Categoría
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full bg-[#080808] border border-white/15 focus:border-white px-3 py-2 text-xs text-zinc-100 focus:outline-none"
                    >
                      <option value="fuerza">Fuerza para Leo</option>
                      <option value="oracion">Oración / Rezo</option>
                      <option value="condolencia">Condolencias</option>
                      <option value="homenaje">Homenaje</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                    Mensaje u Oración *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Escribe tus palabras de cariño y aliento..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-[#080808] border border-white/15 focus:border-white px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none resize-none"
                  />
                </div>

                {/* Quick Templates picker */}
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400">
                    O selecciona un mensaje rápido:
                  </span>
                  <div className="space-y-1 max-h-28 overflow-y-auto pr-1 text-xs custom-scrollbar">
                    {QUICK_TEMPLATES.map((tmpl, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectTemplate(tmpl)}
                        className="w-full text-left p-1.5 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors truncate border border-white/5"
                      >
                        "{tmpl}"
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="candle-opt"
                    checked={litCandleWithMsg}
                    onChange={(e) => setLitCandleWithMsg(e.target.checked)}
                    className="bg-[#080808] border-white/20 text-white focus:ring-0"
                  />
                  <label htmlFor="candle-opt" className="text-xs text-zinc-300 flex items-center gap-1 cursor-pointer">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    Encender una vela virtual junto con este mensaje
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black hover:bg-zinc-200 uppercase tracking-[0.15em] font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publicar y Guardar Mensaje</span>
                </button>

              </form>

            </div>
          </div>

          {/* Messages Feed Column */}
          <div className="lg:col-span-7 space-y-4 font-sans">
            
            {/* Search and persistence banner */}
            <div className="bg-[#101010] border border-white/10 p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-auto flex-1">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, ciudad o mensaje..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#080808] border border-white/15 focus:border-white pl-9 pr-3 py-1.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 whitespace-nowrap">
                <span className="text-amber-400 font-semibold">{messages.length}</span>
                <span>mensajes guardados</span>
                <button
                  onClick={() => setViewAllMode(!viewAllMode)}
                  className="ml-1 px-2.5 py-1 bg-white/5 border border-white/10 hover:border-white/30 text-[11px] uppercase tracking-wider text-zinc-200"
                >
                  {viewAllMode ? 'Ver en Scroll' : 'Ver Todos'}
                </button>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Filtrar:
              </span>
              
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                  activeFilter === 'all'
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-zinc-300 border border-white/10 hover:border-white/20'
                }`}
              >
                Todos ({messages.length})
              </button>

              <button
                onClick={() => setActiveFilter('fuerza')}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                  activeFilter === 'fuerza'
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-zinc-300 border border-white/10 hover:border-white/20'
                }`}
              >
                Fuerza para Leo
              </button>

              <button
                onClick={() => setActiveFilter('oracion')}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                  activeFilter === 'oracion'
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-zinc-300 border border-white/10 hover:border-white/20'
                }`}
              >
                Oración / Rezo
              </button>

              <button
                onClick={() => setActiveFilter('condolencia')}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                  activeFilter === 'condolencia'
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-zinc-300 border border-white/10 hover:border-white/20'
                }`}
              >
                Condolencias
              </button>
            </div>

            {/* List of Messages */}
            <div className={`space-y-4 ${viewAllMode ? '' : 'max-h-[600px] overflow-y-auto pr-1 custom-scrollbar'}`}>
              {filteredMessages.length === 0 ? (
                <div className="p-8 text-center bg-[#101010] border border-white/10 space-y-2">
                  <p className="text-sm text-zinc-400 font-serif italic">
                    No se encontraron mensajes registrados con ese criterio.
                  </p>
                  <p className="text-xs text-zinc-500 font-sans">
                    Sé el primero en escribir tu condolencia u oración en el formulario.
                  </p>
                </div>
              ) : (
                filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-[#101010] border border-white/10 p-4 sm:p-5 hover:border-white/20 transition-all shadow-md space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-white/5 border border-white/15 flex items-center justify-center text-white font-serif font-light text-sm">
                          {msg.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white flex items-center gap-2">
                            {msg.name}
                            {msg.candleLit && (
                              <span title="Vela encendida" className="inline-flex">
                                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              </span>
                            )}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                            <MapPin className="w-3 h-3 text-amber-400" />
                            <span>{msg.location}</span>
                            <span>•</span>
                            <span>{msg.createdAt}</span>
                          </div>
                        </div>
                      </div>

                      <div>{getCategoryBadge(msg.category)}</div>
                    </div>

                    <p className="text-sm text-zinc-200 leading-relaxed font-serif italic bg-[#080808] p-3 border border-white/5">
                      "{msg.text}"
                    </p>

                    <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-white/5">
                      <button
                        onClick={() => onLikeMessage(msg.id)}
                        className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors bg-white/5 px-2.5 py-1 border border-white/10"
                      >
                        <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                        <span>{msg.likes} Apoyos</span>
                      </button>

                      <span className="text-[10px] uppercase tracking-wider text-emerald-400/90 flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 border border-emerald-900/40">
                        <CheckCircle2 className="w-3 h-3" />
                        Guardado en la página
                      </span>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

