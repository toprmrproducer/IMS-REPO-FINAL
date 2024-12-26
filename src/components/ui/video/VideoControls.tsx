import React from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoControlsProps {
  isPlaying: boolean;
  isHovered: boolean;
  onPlayPause: () => void;
}

export default function VideoControls({ isPlaying, isHovered, onPlayPause }: VideoControlsProps) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-500 ${
      (!isPlaying || isHovered) ? 'opacity-100' : 'opacity-0'
    }`}>
      <button
        onClick={onPlayPause}
        className="w-20 h-20 rounded-full bg-[#FF0000]/90 hover:bg-[#FF0000] flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? (
          <Pause className="w-10 h-10 text-white" />
        ) : (
          <Play className="w-10 h-10 text-white ml-1" />
        )}
      </button>
    </div>
  );
}