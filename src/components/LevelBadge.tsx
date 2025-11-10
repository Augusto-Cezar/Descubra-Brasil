import React, { useEffect, useState } from "react";

import level1 from "@/assets/levels/level1.svg";
import level2 from "@/assets/levels/level2.svg";
import level3 from "@/assets/levels/level3.svg";
import level4 from "@/assets/levels/level4.svg";
import level5 from "@/assets/levels/level5.svg";
import level6 from "@/assets/levels/level6.svg";
import level7 from "@/assets/levels/level7.svg";
import level8 from "@/assets/levels/level8.svg";
import level9 from "@/assets/levels/level9.svg";
import level10 from "@/assets/levels/level10.svg";
import level11 from "@/assets/levels/level11.svg";
import level12 from "@/assets/levels/level12.svg";
import level13 from "@/assets/levels/level13.svg";
import level14 from "@/assets/levels/level14.svg";
import level15 from "@/assets/levels/level15.svg";

const levelImages: Record<number, string> = {
  1: level1,
  2: level2,
  3: level3,
  4: level4,
  5: level5,
  6: level6,
  7: level7,
  8: level8,
  9: level9,
  10: level10,
  11: level11,
  12: level12,
  13: level13,
  14: level14,
  15: level15,
};

interface LevelBadgeProps {
  level: number;
}

export function LevelBadge({ level }: LevelBadgeProps) {
  const safeLevel = Math.min(Math.max(level, 1), 15);
  const imageSrc = levelImages[safeLevel];

  const [fadeKey, setFadeKey] = useState(0);

  // reinicia animação sempre que o nível muda
  useEffect(() => {
    setFadeKey((prev) => prev + 1);
  }, [level]);

  // Injeta animação e brilho no head
  useEffect(() => {
    if (!document.getElementById("level-fade-style")) {
      const style = document.createElement("style");
      style.id = "level-fade-style";
      style.innerHTML = `
        @keyframes fadeLevel {
          0% { opacity: 0; transform: scale(0.8); filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
          40% { opacity: 1; transform: scale(1.08); filter: drop-shadow(0 0 10px rgba(255,255,255,0.7)); }
          100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 4px rgba(255,255,255,0.3)); }
        }
        .animate-fadeLevel {
          animation: fadeLevel 0.8s ease-in-out;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        key={fadeKey}
        src={imageSrc}
        alt={`Level ${safeLevel}`}
        className="w-24 h-24 sm:w-32 sm:h-32 object-contain animate-fadeLevel select-none"
      />
    </div>
  );
}
