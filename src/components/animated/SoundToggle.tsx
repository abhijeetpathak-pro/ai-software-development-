// src/components/animated/SoundToggle.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function SoundToggle() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(soundFx.getMuted());
  }, []);

  const toggleSound = () => {
    const isNowMuted = soundFx.toggleMute();
    setMuted(isNowMuted);
  };

  return (
    <button
      onClick={toggleSound}
      onMouseEnter={() => soundFx.playHover()}
      className="relative group p-2.5 rounded-full bg-background/80 hover:bg-muted/80 backdrop-blur-md border border-border/60 transition-all duration-300 shadow-md flex items-center justify-center text-foreground hover:scale-105"
      title={muted ? 'Enable Sound FX' : 'Mute Sound FX'}
      aria-label="Toggle Sound"
    >
      {muted ? (
        <VolumeX className="w-4 h-4 text-muted-foreground group-hover:text-red-400 transition-colors" />
      ) : (
        <div className="relative">
          <Volume2 className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
      )}
    </button>
  );
}
