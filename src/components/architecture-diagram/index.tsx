import { cn } from "@/utils";

type Node = { label: string; x: number; y: number; w?: number; h?: number; emphasis?: boolean };

const NODES: readonly Node[] = [
  { label: "WEB APP", x: 24, y: 70 },
  { label: "MOBILE", x: 24, y: 170 },
  { label: "PARTNERS", x: 24, y: 270 },
  { label: "API", x: 214, y: 162, h: 56, emphasis: true },
  { label: "SERVICES", x: 410, y: 70 },
  { label: "CACHE", x: 410, y: 170 },
  { label: "QUEUE", x: 410, y: 270 },
  { label: "DATABASE", x: 214, y: 330 },
];

const LINKS = [
  "M144 90C180 90 180 190 214 190",
  "M144 190H214",
  "M144 290C180 290 180 190 214 190",
  "M334 190C372 190 372 90 410 90",
  "M334 190H410",
  "M334 190C372 190 372 290 410 290",
  "M410 290C372 290 372 350 334 350",
  "M274 218V330",
] as const;

/**
 * An abstract system: clients, an API, services, cache, queue and data.
 * Dashes stream along each connection to show requests in flight.
 */
export const ArchitectureDiagram = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 560 400"
    role="img"
    aria-label="Diagram of a system: web, mobile and partner clients connect to an API, which routes to services, a cache, a queue and a database, all running in the cloud."
    className={cn("h-auto w-full", className)}
  >
    <rect x="196" y="40" width="352" height="340" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="2 6" />
    <text x="208" y="32" fill="currentColor" fillOpacity="0.55" style={{ fontFamily: "var(--font-geist-mono)", fontSize: 10, letterSpacing: "0.16em" }}>
      CLOUD · CI/CD
    </text>

    {LINKS.map((d) => (
      <g key={d}>
        <path d={d} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.25" />
        <path d={d} fill="none" stroke="var(--inverse-accent)" strokeWidth="1.5" className="flow-dash" />
      </g>
    ))}

    {NODES.map(({ label, x, y, w = 120, h = 40, emphasis }) => (
      <g key={label}>
        {emphasis ? (
          <rect
            x={x}
            y={y}
            width={w}
            height={h}
            rx="8"
            fill="none"
            stroke="var(--inverse-accent)"
            className="origin-center motion-safe:animate-[pulse-ring_2.4s_var(--ease-out)_infinite]"
            style={{ transformBox: "fill-box" }}
          />
        ) : null}
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          rx="8"
          fill="var(--inverse)"
          stroke={emphasis ? "var(--inverse-accent)" : "currentColor"}
          strokeOpacity={emphasis ? 1 : 0.35}
          strokeWidth={emphasis ? 1.5 : 1}
        />
        <text
          x={x + w / 2}
          y={y + h / 2 + 3.5}
          textAnchor="middle"
          fill="currentColor"
          style={{ fontFamily: "var(--font-geist-mono)", fontSize: 10, letterSpacing: "0.16em" }}
        >
          {label}
        </text>
      </g>
    ))}
  </svg>
);
