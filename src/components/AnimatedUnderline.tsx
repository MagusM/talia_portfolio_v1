import React from "react";
import { motion } from "framer-motion";

interface AnimatedUnderlineProps {
  delay?: number;
  color?: "french" | "blue" | "israel";
  width?: number | string;
}

const gradientColors: Record<Pick<AnimatedUnderlineProps, "color">, string> = {
  french: "linear-gradient(to right, #002395, #FFFFFF, #ED2939)",
  blue: "linear-gradient(to right, #60A5FA, #3B82F6, #1D4ED8)",
  israel: "linear-gradient(to right, #60A5FA, #FFFFFF, #60A5FA)",
};

export const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  delay = 0,
  color = "french",
  width = "100%",
}) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ width: 0, x: -50 }}
        animate={{ width: width, x: 0 }}
        transition={{
          duration: 4,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute h-4 -mt-3 z-0"
        style={{
          background: gradientColors[color],
          filter: "url(#brushStroke)",
          opacity: 1,
          transformOrigin: "left",
          borderRadius: "40%",
          zIndex: -1,
          borderBottom: "1px solid grey",
        }}
      />
      <svg width="0" height="0">
        <defs>
          <filter id="brushStroke">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.08"
              numOctaves="10"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite operator="in" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
