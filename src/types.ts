export interface CondolenceMessage {
  id: string;
  name: string;
  location: string;
  category: 'oracion' | 'fuerza' | 'condolencia' | 'homenaje';
  text: string;
  createdAt: string;
  candleLit: boolean;
  likes: number;
}

export interface LitCandle {
  id: string;
  name: string;
  location: string;
  dedication?: string;
  timestamp: string;
}

export interface SocialHandle {
  platform: string;
  handle: string;
  url: string;
  description: string;
  iconType: 'instagram' | 'facebook' | 'globe' | 'youtube';
  verified: boolean;
}
