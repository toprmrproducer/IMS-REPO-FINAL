import { useState, useCallback } from 'react';

export function useVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleHover = useCallback((hover: boolean) => {
    setIsHovered(hover);
  }, []);

  return {
    isPlaying,
    isHovered,
    handlePlay,
    handleHover
  };
}