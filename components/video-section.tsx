"use client";

import { Play } from "lucide-react";
import { useState } from "react";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";
const videoUrl =
  "https://player.vimeo.com/video/367328676?background=1&autoplay=1&muted=1&loop=1&controls=0";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className={`${container} my-4 relative w-full h-[80vh] bg-linear-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl`}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

      {isPlaying ? (
        <iframe
          title="Pelvic floor exercise video"
          src={videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          aria-label="Play video"
          className="group absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          onClick={() => setIsPlaying(true)}
        >
          <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
            <Play className="w-10 h-10 text-[#163B5A] ml-1" fill="currentColor" />
          </div>
        </button>
      )}
    </section>
  );
}

