"use client";

import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  src: string;
  title: string;
};

export default function MusicPlayer({ src, title }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
  }, [title]);

  function togglePlay() {
    const audio = audioRef.current;

    if (!audio) return;

    isPlaying ? audio.pause() : audio.play();
    
    setIsPlaying(!isPlaying);
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;

    if (!audio || !duration) return;

    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const percentage = x / rect.width;

    audio.currentTime = percentage * duration;
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
      <audio ref={audioRef} src={src} />

      <div className="flex flex-row items-center">
        <button onClick={togglePlay} className="cursor-pointer w-8 h-8 bg-background text-foreground flex items-center justify-center">
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <div className="overflow-clip flex-1 w-50 ml-2 -mt-6 flex flex-col">
          <div className="marquee h-6">
            <span>{title}</span>
          </div>
          
          <div onClick={handleSeek} className="cursor-pointer h-6 rounded-lg border-4 border-foreground border-double bg-background">
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
