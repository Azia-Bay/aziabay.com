"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { useTheme } from "@teispace/next-themes";

type MusicPlayerProps = {
  src: string;
  title: string;
};

export default function MusicPlayer({ src, title }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const volumeBarRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);

  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  var play_button_src = null
  var volume_button_src = null

  if (mounted) {
    if (theme === "dark") {
      play_button_src = isPlaying ? "music_player/pause_icon.png" : "music_player/play_icon.png";
      volume_button_src = "music_player/volume_icon.png";
    }
    else {
      play_button_src = isPlaying ? "music_player/pause_icon_light.png" : "music_player/play_icon_light.png";
      volume_button_src = "music_player/volume_icon_light.png";
    }
  }

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;
    
    function setAudioDuration() {
      setDuration(audio!.duration);
    }

    function updateTime() {
      setCurrentTime(audio!.currentTime);
    }

    setAudioDuration();
    updateTime();

    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    function handleMouseMove(e: MouseEvent) {
      const audio = audioRef.current;
      
      const time = calculateSeekTime(e.clientX);
      if (time !== null && audio) audio.currentTime = time;
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

  useEffect(() => {
    if (!isDraggingVolume) return;

    function handleMouseMove(e: MouseEvent) {
      const audio = audioRef.current;

      const volume = calculateSeekVolume(e.clientX);
      if (volume !== null && audio) {
        setVolume(volume);
        audio.volume = volume;
      }
    }

    function handleMouseUp() {
      setIsDraggingVolume(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggingVolume]);

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

  function calculateSeekVolume(clientX: number) {
    const volumeBar = volumeBarRef.current;
    
    if (!volumeBar) return null;

    const rect = volumeBar.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);

    const percentage = x / rect.width;
    
    return percentage;
  }

  function handleVolumeChange(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;

    setIsDraggingVolume(true);

    const volume = calculateSeekVolume(e.clientX);
    
    if (volume !== null && audio) {
      setVolume(volume);
      audio.volume = volume;
    }
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
        <button onClick={togglePlay} className="cursor-pointer p-2 hover:scale-125 transition-transform duration-300 ease-out">
          {play_button_src && <Image src={play_button_src} alt="" className="pixelated" width={16} height={16} unoptimized loading="eager" />}
        </button>

        <div className="overflow-clip flex-1 ml-2 -mt-6 flex flex-col">
          <div className={`${isPlaying ? "marquee" : ""} h-6`}>
            <span>{title}</span>
          </div>
          
          <div ref={barRef} onMouseDown={handleSeek} className="cursor-pointer h-6 rounded-lg border-4 border-foreground border-double bg-background">
            <div className="h-full bg-foreground" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="ml-4 text-sm w-20">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        <button className="cursor-pointer p-2 hover:scale-125 transition-transform duration-300 ease-out">
          {volume_button_src && <Image src={volume_button_src} alt="" className="pixelated" width={16} height={16} unoptimized loading="eager" />}
        </button>

        <div ref={volumeBarRef} onMouseDown={handleVolumeChange} className="cursor-pointer w-20 h-4 rounded-full border-4 border-foreground border-double bg-background">
          <div className="h-full rounded-full bg-foreground" style={{ width: `${volume * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
