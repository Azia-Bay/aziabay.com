"use client";

import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  src: string;
  title: string;
};

export default function MusicPlayer({ src, title }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    function updateTime() {
      setCurrentTime(audio!.currentTime);
    }
    
    function setAudioDuration() {
      setDuration(audio!.duration);
    }

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    function handleMouseMove(e: MouseEvent) {
      const time = calculateSeekTime(e.clientX);
      if (time !== null && audioRef.current) audioRef.current.currentTime = time;
    }

    function handleMouseUp() {
      setIsDragging(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, duration]);

  function togglePlay() {
    const audio = audioRef.current;

    if (!audio) return;

    isPlaying ? audio.pause() : audio.play();
    
    setIsPlaying(!isPlaying);
  }

  function calculateSeekTime(clientX: number) {
    const bar = barRef.current;
    
    if (!bar || !duration) return null;

    const rect = bar.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);

    const percentage = x / rect.width;
    
    return percentage * duration;
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;

    setIsDragging(true);

    const time = calculateSeekTime(e.clientX);
    
    if (time !== null && audio) audio.currentTime = time;
  }

  function formatTime(secs: number) {
    if (isNaN(secs)) return "0:00";

    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="mx-12 mb-10 flex flex-col">
      <audio ref={audioRef} src={src} loop />

      <div className="flex flex-row items-center">
        <button onClick={togglePlay} className="cursor-pointer w-8 h-8 bg-background text-foreground flex items-center justify-center">
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <div className="overflow-clip flex-1 w-50 ml-2 -mt-6 flex flex-col">
          <div className="marquee h-6">
            <span>{title}</span>
          </div>
          
          <div ref={barRef} onMouseDown={handleSeek} className="cursor-pointer h-6 rounded-lg border-4 border-foreground border-double bg-background">
            <div className="h-full bg-foreground" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="ml-4 text-sm w-22">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
}
