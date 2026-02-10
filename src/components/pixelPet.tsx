"use client";

import { Heart } from "lucide-react";
import type { MotionValue } from "motion";
import { useMotionValueEvent } from "motion/react";
import { useState } from "react";

interface PixelPetProps {
  scrollY: MotionValue<number>;
}

type Mood = "idle" | "happy" | "excited" | "sleeping";

export function PixelPet({ scrollY }: PixelPetProps) {
  const [mood, setMood] = useState<Mood>("idle");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // Subscribe to scroll updates
  useMotionValueEvent(scrollY, "change", (v) => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight || 1;

    const scrollPercent = (v / maxScroll) * 100;

    if (scrollPercent < 5) {
      setMood("idle");
      setShowMessage(false);
    } else if (scrollPercent < 30) {
      setMood("happy");
      setMessage("Nice! Keep scrolling! 🐣");
      setShowMessage(true);
    } else if (scrollPercent < 60) {
      setMood("excited");
      setShowMessage(false);
    } else if (scrollPercent < 90) {
      setMood("happy");
      setShowMessage(false);
    } else {
      setMood("sleeping");
      setMessage("You've seen everything! 💤");
      setShowMessage(true);
    }
  });

  const renderPixelArt = () => {
    switch (mood) {
      case "happy":
        return (
          <div className="relative w-13 h-13 pixel-float">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              <div className="col-start-3 col-span-4 bg-black" />
              <div className="row-start-2 col-start-2 col-span-6 bg-black" />
              <div className="row-start-3 col-start-2 bg-black" />
              <div className="row-start-3 col-start-3 bg-white" />
              <div className="row-start-3 col-start-4 bg-black" />
              <div className="row-start-3 col-start-5 bg-black" />
              <div className="row-start-3 col-start-6 bg-white" />
              <div className="row-start-3 col-start-7 bg-black" />
              <div className="row-start-4 col-start-2 col-span-6 bg-black" />
              <div className="row-start-5 col-start-2 bg-black" />
              <div className="row-start-5 col-start-3 bg-pink-400" />
              <div className="row-start-5 col-start-4 bg-black" />
              <div className="row-start-5 col-start-5 bg-black" />
              <div className="row-start-5 col-start-6 bg-pink-400" />
              <div className="row-start-5 col-start-7 bg-black" />
              <div className="row-start-6 col-start-3 col-span-4 bg-black" />
            </div>
            <Heart className="absolute -top-2 -right-2 w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" />
          </div>
        );

      case "excited":
        return (
          <div className="relative w-13 h-13 animate-bounce">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              <div className="col-start-3 col-span-4 bg-black" />
              <div className="row-start-2 col-start-2 col-span-6 bg-black" />
              <div className="row-start-3 col-start-2 bg-black" />
              <div className="row-start-3 col-start-3 bg-blue-400" />
              <div className="row-start-3 col-start-4 bg-white" />
              <div className="row-start-3 col-start-5 bg-blue-400" />
              <div className="row-start-3 col-start-6 bg-white" />
              <div className="row-start-3 col-start-7 bg-black" />
              <div className="row-start-4 col-start-2 col-span-6 bg-black" />
              <div className="row-start-5 col-start-2 bg-black" />
              <div className="row-start-5 col-start-4 col-span-2 bg-red-400" />
              <div className="row-start-5 col-start-7 bg-black" />
              <div className="row-start-6 col-start-3 col-span-4 bg-black" />
            </div>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rotate-45" />
            <div className="absolute -top-2 -right-1 w-2 h-2 bg-yellow-400 rotate-45" />
          </div>
        );

      case "sleeping":
        return (
          <div className="relative w-13 h-13">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              <div className="col-start-3 col-span-4 bg-black" />
              <div className="row-start-2 col-start-2 col-span-6 bg-black" />
              <div className="row-start-3 col-start-2 bg-black" />
              <div className="row-start-3 col-start-3 col-span-2 bg-black" />
              <div className="row-start-3 col-start-5 col-span-2 bg-black" />
              <div className="row-start-3 col-start-7 bg-black" />
              <div className="row-start-4 col-start-2 col-span-6 bg-black" />
              <div className="row-start-5 col-start-3 col-span-4 bg-black" />
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-13 h-13 pixel-float">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              <div className="col-start-3 col-span-4 bg-black" />
              <div className="row-start-2 col-start-2 col-span-6 bg-black" />
              <div className="row-start-3 col-start-2 bg-black" />
              <div className="row-start-3 col-start-3 bg-black" />
              <div className="row-start-3 col-start-4 bg-black" />
              <div className="row-start-3 col-start-5 bg-black" />
              <div className="row-start-3 col-start-6 bg-black" />
              <div className="row-start-3 col-start-7 bg-black" />
              <div className="row-start-4 col-start-2 col-span-6 bg-black" />
              <div className="row-start-5 col-start-3 col-span-4 bg-black" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {showMessage && message && (
        <div className="absolute bottom-23 right-0 mb-2 pixel-font text-black text-xs bg-white border-4 border-dotted border-black px-4 py-3 pixel-shadow whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
          {message}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-dotted border-r-4 border-b-4 border-black rotate-45" />
        </div>
      )}

      <div className="bg-linear-to-br from-pink-200 via-purple-200 to-blue-200 border-4 border-black p-4 rounded-lg pixel-shadow cursor-pointer hover:scale-110 transition-transform">
        {renderPixelArt()}
      </div>
    </div>
  );
}
