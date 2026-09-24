import type { ReactNode } from "react";

import type { ArtworkTone, ArtworkVariant } from "@/types";
import { cn } from "@/utils";

/*
 * Generated artwork for each piece of work. Every project gets its own
 * composition and colourway from the same restrained palette, so the grid
 * looks deliberate without stock photography. Colours are fixed (not
 * themed): artwork looks the same in light and dark mode, like a print.
 */

type Palette = { bg: string; fg: string; accent: string; muted: string };

const TONES: Record<ArtworkTone, Palette> = {
  ink: { bg: "#0b0b0b", fg: "#f5f5f7", accent: "#ff7a45", muted: "#262626" },
  paper: { bg: "#f2f1ed", fg: "#111111", accent: "#e8501e", muted: "#e0ded7" },
  signal: { bg: "#e8501e", fg: "#111111", accent: "#fbfaf7", muted: "#d44716" },
  moss: { bg: "#232a26", fg: "#f5f5f7", accent: "#ff7a45", muted: "#323b36" },
  clay: { bg: "#dcd6ca", fg: "#111111", accent: "#c2410c", muted: "#cdc6b8" },
  slate: { bg: "#1b1e23", fg: "#f5f5f7", accent: "#ff7a45", muted: "#2a2e35" },
};

const MONO = { fontFamily: "var(--font-geist-mono), monospace", fontSize: 10, letterSpacing: "0.14em" };

const Orbits = ({ fg, accent, muted }: Palette) => (
  <>
    {[48, 96, 144].map((r) => (
      <circle key={r} cx="240" cy="180" r={r} fill="none" stroke={muted} strokeWidth="1.5" />
    ))}
    <path d="M40 180h400M240 20v320" stroke={fg} strokeOpacity="0.35" />
    {[
      [150, 120],
      [190, 250],
      [300, 230],
      [120, 210],
      [270, 140],
      [350, 260],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill={fg} fillOpacity="0.55" />
    ))}
    <g className="origin-[340px_100px] transition-transform duration-700 ease-(--ease-out) group-hover:scale-110">
      <circle cx="340" cy="100" r="24" fill="none" stroke={accent} strokeWidth="2" />
      <circle cx="340" cy="100" r="9" fill={fg} />
    </g>
    <path d="M364 100h44" stroke={fg} />
    <text x="412" y="103" fill={fg} style={MONO}>
      YOU
    </text>
    <text x="246" y="32" fill={fg} style={MONO}>
      SPECIALIST
    </text>
    <text x="44" y="172" fill={fg} style={MONO}>
      ACCESSIBLE
    </text>
    <text x="376" y="172" fill={fg} style={MONO}>
      PREMIUM
    </text>
  </>
);

const Signal = ({ fg, accent, muted }: Palette) => (
  <>
    {[60, 110, 160, 210, 260].map((r, index) => (
      <path
        key={r}
        d={`M${90 + r} 280A${r} ${r} 0 0 0 90 ${280 - r}`}
        fill="none"
        stroke={fg}
        strokeOpacity={0.8 - index * 0.14}
        strokeWidth="1.5"
      />
    ))}
    <circle cx="90" cy="280" r="12" fill={accent} />
    {[40, 70, 96, 130, 176].map((height, index) => (
      <rect
        key={height}
        x={300 + index * 28}
        y={300 - height}
        width="16"
        height={height}
        fill={index === 4 ? accent : muted}
        className="origin-bottom transition-transform duration-700 ease-(--ease-out) group-hover:scale-y-110"
        style={{ transformBox: "fill-box" }}
      />
    ))}
    <path d="M292 300h160" stroke={fg} strokeOpacity="0.5" />
    <text x="40" y="52" fill={fg} style={MONO}>
      ONE IDEA · EVERY CHANNEL
    </text>
  </>
);

const Manuscript = ({ bg, fg, accent, muted }: Palette) => (
  <>
    <rect x="128" y="36" width="224" height="288" fill={muted} transform="translate(10 10)" />
    <rect
      x="128"
      y="36"
      width="224"
      height="288"
      fill={fg === "#111111" ? "#ffffff" : bg}
      stroke={fg}
      strokeOpacity="0.15"
      className="transition-transform duration-700 ease-(--ease-out) group-hover:-translate-y-1.5"
    />
    <text x="150" y="130" fill={accent} style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 110, fontWeight: 600 }}>
      “
    </text>
    {[
      [150, 150, 180],
      [150, 166, 164],
      [150, 182, 176],
      [150, 198, 120],
      [150, 226, 172],
      [150, 242, 150],
      [150, 258, 166],
    ].map(([x, y, width]) => (
      <rect key={y} x={x} y={y} width={width} height="5" rx="2.5" fill={fg} fillOpacity="0.7" />
    ))}
    <path d="M152 296c14-14 22 8 34-4s18-10 26 2 20-6 28 0" fill="none" stroke={fg} strokeWidth="1.5" />
  </>
);

const Blueprint = ({ fg, accent, muted }: Palette) => (
  <>
    <pattern id="bp-grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0v24" fill="none" stroke={muted} strokeWidth="1" />
    </pattern>
    <rect width="480" height="360" fill="url(#bp-grid)" />
    <rect x="48" y="60" width="276" height="216" rx="6" fill="none" stroke={fg} strokeWidth="1.5" />
    <path d="M48 84h276" stroke={fg} strokeWidth="1.5" />
    {[62, 74, 86].map((cx) => (
      <circle key={cx} cx={cx} cy="72" r="3" fill={fg} />
    ))}
    <rect x="68" y="104" width="120" height="14" fill={fg} fillOpacity="0.8" />
    <rect x="68" y="128" width="84" height="8" fill={fg} fillOpacity="0.4" />
    <rect x="68" y="160" width="236" height="96" fill="none" stroke={fg} strokeDasharray="4 6" />
    <g className="transition-transform duration-700 ease-(--ease-out) group-hover:-translate-y-2">
      <rect x="330" y="112" width="100" height="196" rx="16" fill="#111111" stroke={fg} strokeWidth="1.5" />
      <rect x="346" y="140" width="68" height="8" fill={fg} fillOpacity="0.8" />
      <rect x="346" y="156" width="48" height="6" fill={fg} fillOpacity="0.4" />
      <rect x="346" y="262" width="68" height="22" rx="11" fill={accent} />
    </g>
    <path d="M48 316h382M48 310v12M430 310v12" stroke={accent} strokeWidth="1.5" />
    <text x="206" y="340" fill={accent} style={MONO}>
      MVP · V1
    </text>
  </>
);

const Stack = ({ bg, fg, accent, muted }: Palette) => {
  const layer = (y: number) => `240,${y} 360,${y + 56} 240,${y + 112} 120,${y + 56}`;

  return (
    <>
      <path d="M120 212v-56M360 212v-56M240 268v-56" stroke={fg} strokeOpacity="0.35" strokeDasharray="3 5" />
      <polygon points={layer(156)} fill={muted} stroke={fg} strokeOpacity="0.4" />
      <polygon points={layer(100)} fill={bg} stroke={fg} strokeOpacity="0.7" strokeWidth="1.5" />
      <g className="transition-transform duration-700 ease-(--ease-out) group-hover:-translate-y-3">
        <polygon points={layer(44)} fill={bg} stroke={accent} strokeWidth="2" />
        <circle cx="240" cy="100" r="6" fill={accent} />
      </g>
      {[
        ["API", 100],
        ["SERVICES", 156],
        ["DATA", 212],
      ].map(([label, y]) => (
        <g key={label}>
          <path d={`M372 ${y}h36`} stroke={fg} strokeOpacity="0.5" />
          <text x="414" y={Number(y) + 3} fill={fg} style={MONO}>
            {label}
          </text>
        </g>
      ))}
      <text x="40" y="52" fill={fg} style={MONO}>
        CACHE · QUEUE · OBSERVE
      </text>
    </>
  );
};

const Frames = ({ bg, fg, accent, muted }: Palette) => (
  <>
    <rect x="44" y="40" width="270" height="190" rx="6" fill={muted} />
    <rect x="102" y="84" width="270" height="190" rx="6" fill={bg} stroke={fg} strokeOpacity="0.5" />
    <g className="transition-transform duration-700 ease-(--ease-out) group-hover:-translate-x-2 group-hover:-translate-y-2">
      <rect x="164" y="128" width="276" height="196" rx="6" fill={fg} />
      <path d="M164 150h276" stroke={bg} strokeOpacity="0.25" />
      {[178, 190, 202].map((cx) => (
        <circle key={cx} cx={cx} cy="139" r="3" fill={bg} fillOpacity="0.6" />
      ))}
      <rect x="184" y="172" width="170" height="20" fill={bg} />
      <rect x="184" y="200" width="120" height="20" fill={accent} />
      <rect x="184" y="238" width="200" height="6" fill={bg} fillOpacity="0.5" />
      <rect x="184" y="252" width="176" height="6" fill={bg} fillOpacity="0.5" />
      <rect x="184" y="284" width="84" height="22" rx="11" fill="none" stroke={bg} />
    </g>
  </>
);

const VARIANTS: Record<ArtworkVariant, (palette: Palette) => ReactNode> = {
  orbits: Orbits,
  signal: Signal,
  manuscript: Manuscript,
  blueprint: Blueprint,
  stack: Stack,
  frames: Frames,
};

export type WorkArtworkProps = {
  variant: ArtworkVariant;
  tone: ArtworkTone;
  className?: string;
};

export const WorkArtwork = ({ variant, tone, className }: WorkArtworkProps) => {
  const palette = TONES[tone];
  const Composition = VARIANTS[variant];

  return (
    <svg
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={cn("block size-full", className)}
      style={{ backgroundColor: palette.bg }}
    >
      <Composition {...palette} />
    </svg>
  );
};
