import React, { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX, Play, Pause, Sparkles, Disc } from 'lucide-react';
import { memorialAudio, TrackType } from '../utils/audio';

export const AngelicAudioBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [track, setTrack] = useState<TrackType>('wos_piano');
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    setIsPlaying(memorialAudio.getStatus());
    setTrack(memorialAudio.getTrack());
  }, []);

  const handleToggle = () => {
    const active = memorialAudio.toggle();
    setIsPlaying(active);
  };

  const handleTrackSelect = (selectedTrack: TrackType) => {
    setTrack(selectedTrack);
    memorialAudio.setTrack(selectedTrack);
    setIsPlaying(memorialAudio.getStatus());
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    memorialAudio.setVolume(newVol);
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 font-sans">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#121212]/95 border border-amber-500/40 text-amber-300 p-2.5 rounded-none shadow-2xl backdrop-blur-md flex items-center gap-2 hover:bg-[#1a1a1a] transition-all group"
          title="Abrir reproductor de música memorial"
        >
          <Music className={`w-4 h-4 text-amber-400 ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="text-xs uppercase tracking-wider font-semibold pr-1">
            {track === 'wos_piano' ? 'Arrancármelo (Piano)' : 'Música Angelical'}
          </span>
          {isPlaying && (
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
          )}
        </button>
      ) : (
        <div className="bg-[#0f0f0f]/95 border border-amber-500/30 text-[#dcdcdc] p-3.5 shadow-2xl backdrop-blur-md max-w-xs sm:max-w-sm w-full space-y-2.5 border-l-4 border-l-amber-500">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-950/60 border border-amber-500/40 text-amber-300">
                <Disc className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
              </div>
              <div>
                <h4 className="text-xs font-serif font-medium text-white flex items-center gap-1.5">
                  {track === 'wos_piano' ? 'Arrancármelo — WOS' : 'Música Angelical de Fondo'}
                  <span className="text-[9px] uppercase tracking-widest text-amber-400 bg-amber-950/80 px-1 py-0.2 border border-amber-800/60">
                    {track === 'wos_piano' ? 'Piano Cover (0:08)' : 'Solfeggio 432Hz'}
                  </span>
                </h4>
                <p className="text-[10px] text-zinc-400 font-sans">
                  {isPlaying ? '♪ Reproduciendo en vivo...' : 'Hacé clic en reproducir para escuchar'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsMinimized(true)}
              className="text-zinc-500 hover:text-white text-xs px-1.5 py-0.5"
              title="Minimizar reproductor"
            >
              —
            </button>
          </div>

          {/* Track Switcher */}
          <div className="flex items-center bg-[#080808] border border-white/10 p-0.5 text-[10px]">
            <button
              onClick={() => handleTrackSelect('wos_piano')}
              className={`flex-1 py-1 px-1.5 text-center font-sans uppercase tracking-wider transition-all ${
                track === 'wos_piano'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Arrancármelo (Piano)
            </button>
            <button
              onClick={() => handleTrackSelect('angelic_pad')}
              className={`flex-1 py-1 px-1.5 text-center font-sans uppercase tracking-wider transition-all ${
                track === 'angelic_pad'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Música Angelical
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 pt-0.5">
            {/* Play/Pause Button */}
            <button
              onClick={handleToggle}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                isPlaying
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:bg-amber-400'
                  : 'bg-white text-black hover:bg-zinc-200'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-black" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Escuchar</span>
                </>
              )}
            </button>

            {/* Equalizer animation */}
            {isPlaying && (
              <div className="flex items-end gap-0.5 h-4 px-1">
                <div className="w-1 bg-amber-400 h-full animate-[bounce_1s_infinite_100ms]" />
                <div className="w-1 bg-amber-300 h-3/4 animate-[bounce_1s_infinite_300ms]" />
                <div className="w-1 bg-amber-500 h-full animate-[bounce_1s_infinite_200ms]" />
                <div className="w-1 bg-amber-200 h-1/2 animate-[bounce_1s_infinite_400ms]" />
              </div>
            )}

            {/* Volume slider */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  const newV = volume > 0 ? 0 : 0.3;
                  setVolume(newV);
                  memorialAudio.setVolume(newV);
                }}
                className="text-zinc-400 hover:text-amber-300"
                title={volume > 0 ? "Silenciar" : "Activar sonido"}
              >
                {volume > 0 ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 text-rose-400" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-zinc-800 accent-amber-400 cursor-pointer"
                title="Ajustar volumen"
              />
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
