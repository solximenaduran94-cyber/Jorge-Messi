import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VirtualCandle } from './components/VirtualCandle';
import { CondolencesWall } from './components/CondolencesWall';
import { DecesoInfo } from './components/DecesoInfo';
import { OfficialNetworks } from './components/OfficialNetworks';
import { TributeCardGenerator } from './components/TributeCardGenerator';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { AngelicAudioBar } from './components/AngelicAudioBar';
import { BlackRibbonPreviewModal } from './components/BlackRibbonPreviewModal';
import { CondolenceMessage, LitCandle } from './types';
import { INITIAL_CONDOLENCES } from './data/memorialData';

const INITIAL_CANDLES: LitCandle[] = [
  { id: 'c1', name: 'Facundo & Rocío', location: 'Rosario, Argentina', dedication: 'Siempre presente Jorge. Fuerza Leo querido.', timestamp: 'Hace 5 minutos' },
  { id: 'c2', name: 'Peña Masia Barcelona', location: 'Barcelona, España', dedication: 'Eterno agradecimiento. Todo nuestro amor para la familia Messi.', timestamp: 'Hace 12 minutos' },
  { id: 'c3', name: 'Agustín P.', location: 'Buenos Aires, Argentina', dedication: 'Oraciones por el eterno descanso de Jorge. Paz para Leo y Antonela.', timestamp: 'Hace 20 minutos' },
  { id: 'c4', name: 'Familia Valenzuela', location: 'Miami, Florida', dedication: 'Encendemos esta vela en honor a un padre ejemplar.', timestamp: 'Hace 35 minutos' },
];

export default function App() {
  const [candleCount, setCandleCount] = useState<number>(() => {
    const saved = localStorage.getItem('jorge_messi_candle_count');
    return saved ? parseInt(saved, 10) : 1842;
  });

  const [candles, setCandles] = useState<LitCandle[]>(() => {
    const saved = localStorage.getItem('jorge_messi_candles');
    return saved ? JSON.parse(saved) : INITIAL_CANDLES;
  });

  const [messages, setMessages] = useState<CondolenceMessage[]>(() => {
    const saved = localStorage.getItem('jorge_messi_messages');
    return saved ? JSON.parse(saved) : INITIAL_CONDOLENCES;
  });

  const [isCandleModalOpen, setIsCandleModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isRibbonModalOpen, setIsRibbonModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('jorge_messi_candle_count', candleCount.toString());
  }, [candleCount]);

  useEffect(() => {
    localStorage.setItem('jorge_messi_candles', JSON.stringify(candles));
  }, [candles]);

  useEffect(() => {
    localStorage.setItem('jorge_messi_messages', JSON.stringify(messages));
  }, [messages]);

  const handleAddCandle = (name: string, location: string, dedication?: string) => {
    const newCandle: LitCandle = {
      id: Date.now().toString(),
      name,
      location,
      dedication,
      timestamp: 'Justo ahora',
    };
    setCandles(prev => [newCandle, ...prev]);
    setCandleCount(prev => prev + 1);
  };

  const handleAddMessage = (newMsg: Omit<CondolenceMessage, 'id' | 'createdAt' | 'likes'>) => {
    const createdMsg: CondolenceMessage = {
      ...newMsg,
      id: Date.now().toString(),
      createdAt: 'Justo ahora',
      likes: 1,
    };
    setMessages(prev => [createdMsg, ...prev]);

    if (newMsg.candleLit) {
      handleAddCandle(newMsg.name, newMsg.location, newMsg.text);
    }
  };

  const handleLikeMessage = (id: string) => {
    setMessages(prev =>
      prev.map(m => (m.id === id ? { ...m, likes: m.likes + 1 } : m))
    );
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#dcdcdc] font-sans selection:bg-white selection:text-black">
      
      {/* Sticky Header */}
      <Header
        candleCount={candleCount}
        onOpenCandleModal={() => setIsCandleModalOpen(true)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
        onOpenRibbonPreview={() => setIsRibbonModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        <HeroSection
          candleCount={candleCount}
          messageCount={messages.length}
          onOpenCandleModal={() => setIsCandleModalOpen(true)}
          onScrollToMessages={() => scrollToSection('muro-condolencias')}
          onScrollToNetworks={() => scrollToSection('redes-oficiales')}
          onOpenRibbonPreview={() => setIsRibbonModalOpen(true)}
        />

        <VirtualCandle
          candles={candles}
          totalCandles={candleCount}
          onAddCandle={handleAddCandle}
          isOpenModal={isCandleModalOpen}
          onCloseModal={() => setIsCandleModalOpen(false)}
        />

        <CondolencesWall
          messages={messages}
          onAddMessage={handleAddMessage}
          onLikeMessage={handleLikeMessage}
        />

        <DecesoInfo />

        <OfficialNetworks />

        <TributeCardGenerator />
      </main>

      {/* Footer */}
      <Footer onOpenCandleModal={() => setIsCandleModalOpen(true)} />

      {/* Angelic Background Music Floating Bar */}
      <AngelicAudioBar />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Black Ribbon Preview Modal */}
      <BlackRibbonPreviewModal
        isOpen={isRibbonModalOpen}
        onClose={() => setIsRibbonModalOpen(false)}
      />

    </div>
  );
}

