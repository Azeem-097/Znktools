"use client";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function Logo({ size = 36, showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5 group">
      {/* Animated SVG Logo */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 group-hover:rotate-12"
        >
          {/* Outer rotating ring */}
          <defs>
            <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background hex shape */}
          <path
            d="M20 2 L34 10 L34 30 L20 38 L6 30 L6 10 Z"
            fill="url(#logoGrad2)"
            filter="url(#glow)"
          />

          {/* Inner accent ring */}
          <path
            d="M20 6 L30 12 L30 28 L20 34 L10 28 L10 12 Z"
            fill="none"
            stroke="url(#logoGrad1)"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Center "T" stylized */}
          <g transform="translate(20, 20)">
            <rect x="-7" y="-7" width="14" height="3" rx="1.2" fill="white" />
            <rect x="-1.5" y="-7" width="3" height="14" rx="1.2" fill="white" />
            {/* Small accent dot */}
            <circle cx="5" cy="5" r="1.5" fill="#fbbf24">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>

        {/* Pulse glow ring */}
        <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md group-hover:bg-indigo-500/40 transition-all duration-500" />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-base sm:text-lg font-bold tracking-tight">
            <span className="text-white">ZNK</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tools
            </span>
          </span>
          <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-medium hidden sm:block">
            Premium AI Tools
          </span>
        </div>
      )}
    </div>
  );
}