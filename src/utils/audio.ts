// Web Audio API & MP3 Sound Engine
// Includes "Arrancármelo - WOS (Piano Cover)" starting at 8 seconds and Solfeggio Angelic Choirs.

export type TrackType = 'wos_piano' | 'angelic_pad';

class MemorialAudioEngine {
  private currentTrack: TrackType = 'wos_piano';
  private audioEl: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private volume: number = 0.3; // Default volume

  // Synthesizer properties
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private padTimer: number | null = null;
  private harpTimer: number | null = null;

  private celestialChords = [
    [172.8, 259.2, 324.0, 432.0, 518.4],
    [129.6, 194.4, 243.0, 291.6, 388.8],
    [216.0, 259.2, 324.0, 432.0, 648.0],
    [144.0, 216.0, 288.0, 360.0, 432.0],
  ];

  private harpNotes = [432.0, 518.4, 648.0, 777.6, 864.0, 1036.8, 1296.0];

  private initAudioElement() {
    if (typeof window === 'undefined') return;
    if (!this.audioEl) {
      this.audioEl = new Audio('/arrancarmelo_piano.mp3');
      this.audioEl.loop = true;
      this.audioEl.volume = this.volume;

      // Ensure when track loops or starts, if it's before 8s, jump to 8s
      this.audioEl.addEventListener('play', () => {
        if (this.audioEl && this.audioEl.currentTime < 8) {
          this.audioEl.currentTime = 8;
        }
      });
    }
  }

  public setTrack(track: TrackType) {
    if (this.currentTrack === track) return;
    const wasPlaying = this.isPlaying;
    if (wasPlaying) {
      this.stop();
    }
    this.currentTrack = track;
    if (wasPlaying) {
      this.start();
    }
  }

  public getTrack(): TrackType {
    return this.currentTrack;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioEl) {
      this.audioEl.volume = this.volume;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public start() {
    if (this.currentTrack === 'wos_piano') {
      this.stopSynth();
      this.initAudioElement();
      if (this.audioEl) {
        if (this.audioEl.currentTime < 8) {
          this.audioEl.currentTime = 8;
        }
        this.audioEl.volume = this.volume;
        this.audioEl
          .play()
          .then(() => {
            this.isPlaying = true;
          })
          .catch((err) => {
            console.warn("Audio play blocked by browser policy:", err);
            this.isPlaying = false;
          });
        this.isPlaying = true;
      }
    } else {
      if (this.audioEl) {
        this.audioEl.pause();
      }
      this.startSynth();
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.stopSynth();
  }

  private startSynth() {
    try {
      if (!this.ctx) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      if (!this.masterGain) {
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
      }

      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.isPlaying = true;

      let chordIndex = 0;

      const playChoirPad = () => {
        if (!this.isPlaying || !this.ctx || !this.masterGain) return;

        const currentChord = this.celestialChords[chordIndex % this.celestialChords.length];
        chordIndex++;

        const now = this.ctx.currentTime;
        const padDuration = 7.0;

        currentChord.forEach((freq, idx) => {
          if (!this.ctx || !this.masterGain) return;

          const osc = this.ctx.createOscillator();
          const oscGain = this.ctx.createGain();
          const oscDetune = this.ctx.createOscillator();
          const detuneGain = this.ctx.createGain();

          const filter = this.ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(800 + idx * 200, now);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);

          oscDetune.type = 'triangle';
          oscDetune.frequency.setValueAtTime(freq * 1.002, now);

          oscGain.gain.setValueAtTime(0.0001, now);
          oscGain.gain.exponentialRampToValueAtTime(0.04 / (idx + 1), now + 2.5);
          oscGain.gain.exponentialRampToValueAtTime(0.0001, now + padDuration - 0.2);

          detuneGain.gain.setValueAtTime(0.0001, now);
          detuneGain.gain.exponentialRampToValueAtTime(0.02 / (idx + 1), now + 2.8);
          detuneGain.gain.exponentialRampToValueAtTime(0.0001, now + padDuration - 0.2);

          osc.connect(oscGain);
          oscGain.connect(filter);

          oscDetune.connect(detuneGain);
          detuneGain.connect(filter);

          filter.connect(this.masterGain);

          osc.start(now);
          oscDetune.start(now);

          osc.stop(now + padDuration);
          oscDetune.stop(now + padDuration);
        });
      };

      const playHarpNote = () => {
        if (!this.isPlaying || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const randomNote = this.harpNotes[Math.floor(Math.random() * this.harpNotes.length)];

        const harpOsc = this.ctx.createOscillator();
        const harpGain = this.ctx.createGain();

        harpOsc.type = 'sine';
        harpOsc.frequency.setValueAtTime(randomNote, now);

        harpGain.gain.setValueAtTime(0.0001, now);
        harpGain.gain.exponentialRampToValueAtTime(0.015, now + 0.08);
        harpGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

        harpOsc.connect(harpGain);
        harpGain.connect(this.masterGain);

        harpOsc.start(now);
        harpOsc.stop(now + 3.2);
      };

      playChoirPad();
      this.padTimer = window.setInterval(playChoirPad, 6200);
      this.harpTimer = window.setInterval(playHarpNote, 3200);
    } catch (e) {
      console.warn("Synth start failed:", e);
      this.isPlaying = false;
    }
  }

  private stopSynth() {
    if (this.padTimer) {
      clearInterval(this.padTimer);
      this.padTimer = null;
    }
    if (this.harpTimer) {
      clearInterval(this.harpTimer);
      this.harpTimer = null;
    }

    if (this.masterGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      } catch (e) {
        console.warn("Synth stop error:", e);
      }
    }
  }
}

export const memorialAudio = new MemorialAudioEngine();
