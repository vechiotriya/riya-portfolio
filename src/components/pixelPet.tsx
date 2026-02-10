"use client";
import { Heart } from "lucide-react";
import { MotionValue } from "motion";

interface PixelPetProps {
  scrollY: MotionValue<number>;
}

export function PixelPet({ scrollY }: PixelPetProps) {
const maxScroll =
   typeof window !== 'undefined'
    ? document.documentElement.scrollHeight - window.innerHeight || 1:1;

const scrollPercent = (scrollY.get() / maxScroll) * 100;

let mood: "idle" | "happy" | "excited" | "sleeping" = "idle";
let message = "";
let showMessage = false;

if (scrollPercent < 5) {
  mood = "idle";
} else if (scrollPercent < 30) {
  mood = "happy";
  message = "Nice! Keep scrolling! 🐣";
  showMessage = true;
} else if (scrollPercent < 60) {
  mood = "excited";
} else if (scrollPercent < 90) {
  mood = "happy";
} else {
  mood = "sleeping";
  message = "You've seen everything! 💤";
  showMessage = true;
}

  const renderPixelArt = () => {
    switch (mood) {
      case "happy":
        return (
          <div className="relative w-13 h-13 pixel-float">
            {/* Happy Pet */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              {/* Row 1 */}
              <div className="col-start-3 col-span-4 bg-black"></div>
              {/* Row 2 */}
              <div className="row-start-2 col-start-2 col-span-6 bg-black"></div>
              {/* Row 3 - Eyes */}
              <div className="row-start-3 col-start-2 bg-black"></div>
              <div className="row-start-3 col-start-3 bg-white"></div>
              <div className="row-start-3 col-start-4 bg-black"></div>
              <div className="row-start-3 col-start-5 bg-black"></div>
              <div className="row-start-3 col-start-6 bg-white"></div>
              <div className="row-start-3 col-start-7 bg-black"></div>
              {/* Row 4 */}
              <div className="row-start-4 col-start-2 col-span-6 bg-black"></div>
              {/* Row 5 - Smile */}
              <div className="row-start-5 col-start-2 bg-black"></div>
              <div className="row-start-5 col-start-3 bg-pink-400"></div>
              <div className="row-start-5 col-start-4 bg-black"></div>
              <div className="row-start-5 col-start-5 bg-black"></div>
              <div className="row-start-5 col-start-6 bg-pink-400"></div>
              <div className="row-start-5 col-start-7 bg-black"></div>
              {/* Row 6 */}
              <div className="row-start-6 col-start-3 col-span-4 bg-black"></div>
            </div>
            {/* Hearts */}
            <Heart className="absolute -top-2 -right-2 w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" />
          </div>
        );

      case "excited":
        return (
          <div className="relative w-13 h-13 animate-bounce">
            {/* Excited Pet with stars */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              <div className="col-start-3 col-span-4 bg-black"></div>
              <div className="row-start-2 col-start-2 col-span-6 bg-black"></div>
              {/* Big eyes */}
              <div className="row-start-3 col-start-2 bg-black"></div>
              <div className="row-start-3 col-start-3 col-span-1 bg-blue-400"></div>
              <div className="row-start-3 col-start-4 col-span-1 bg-white"></div>
              <div className="row-start-3 col-start-5 col-span-1 bg-blue-400"></div>
              <div className="row-start-3 col-start-6 col-span-1 bg-white"></div>
              <div className="row-start-3 col-start-7 bg-black"></div>
              <div className="row-start-4 col-start-2 col-span-6 bg-black"></div>
              <div className="row-start-5 col-start-2 bg-black"></div>
              <div className="row-start-5 col-start-4 col-span-2 bg-red-400"></div>
              <div className="row-start-5 col-start-7 bg-black"></div>
              <div className="row-start-6 col-start-3 col-span-4 bg-black"></div>
            </div>
            {/* Stars */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rotate-45"></div>
            <div className="absolute -top-2 -right-1 w-2 h-2 bg-yellow-400 rotate-45"></div>
          </div>
        );

      case "sleeping":
        return (
          <div className="relative w-13 h-13">
            {/* Sleeping Pet */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              <div className="col-start-3 col-span-4 bg-black"></div>
              <div className="row-start-2 col-start-2 col-span-6 bg-black"></div>
              {/* Closed eyes */}
              <div className="row-start-3 col-start-2 bg-black"></div>
              <div className="row-start-3 col-start-3 col-span-2 bg-black"></div>
              <div className="row-start-3 col-start-5 col-span-2 bg-black"></div>
              <div className="row-start-3 col-start-7 bg-black"></div>
              <div className="row-start-4 col-start-2 col-span-6 bg-black"></div>
              <div className="row-start-5 col-start-3 col-span-4 bg-black"></div>
            </div>
          </div>
        );

      default: // idle
        return (
          <div className="relative w-13 h-13 pixel-float">
            {/* Idle Pet */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              <div className="col-start-3 col-span-4 bg-black"></div>
              <div className="row-start-2 col-start-2 col-span-6 bg-black"></div>
              {/* Normal eyes */}
              <div className="row-start-3 col-start-2 bg-black"></div>
              <div className="row-start-3 col-start-3 bg-black"></div>
              <div className="row-start-3 col-start-4 bg-black"></div>
              <div className="row-start-3 col-start-5 bg-black"></div>
              <div className="row-start-3 col-start-6 bg-black"></div>
              <div className="row-start-3 col-start-7 bg-black"></div>
              <div className="row-start-4 col-start-2 col-span-6 bg-black"></div>
              <div className="row-start-5 col-start-3 col-span-4 bg-black"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Speech Bubble */}
      {showMessage && message && (
        <div className="absolute bottom-23 right-0 mb-2 pixel-font text-black text-xs bg-white border-4 border-dotted border-black px-4 py-3  pixel-shadow whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
          {message}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-dotted border-r-4 border-b-4 border-black transform rotate-45"></div>
        </div>
      )}

      {/* Pet Container */}
      <div className="bg-linear-to-br from-pink-200 via-purple-200 to-blue-200 border-4 border-black p-4 rounded-lg pixel-shadow cursor-pointer hover:scale-110 transition-transform">
        {renderPixelArt()}
      </div>
    </div>
  );
}