"use client";

import { motion } from "framer-motion";

const ECG_PATH =
  "M0 100 L200 100 L240 100 L255 60 L270 140 L285 30 L300 170 L315 100 L600 100 L640 100 L655 60 L670 140 L685 30 L700 170 L715 100 L1200 100";

export default function HeroECGLine() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[48%] flex items-center justify-center overflow-hidden md:inset-0 md:top-0">
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMid meet"
        className="w-full opacity-90 md:max-w-[1400px] md:opacity-30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Faint baseline so it always reads as a monitor trace */}
        <path
          d={ECG_PATH}
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />

        {/* Animated bright stroke — continuously redraws on mobile */}
        <motion.path
          d={ECG_PATH}
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
          transition={{
            duration: 4,
            times: [0, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{
            filter:
              "drop-shadow(0 0 8px rgba(56, 189, 248, 0.9)) drop-shadow(0 0 16px rgba(56, 189, 248, 0.5))",
          }}
        />
      </svg>
    </div>
  );
}