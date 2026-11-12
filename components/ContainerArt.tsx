import type { ArtVariant } from "@/lib/models";

type Props = {
  variant?: ArtVariant;
  body?: string;
  tone?: "light" | "dark";
  className?: string;
  label?: string;
};

type Unit = { x: number; y: number; w: number; h: number; door?: boolean; shade?: number };

const GROUND = 300;

const layouts: Record<ArtVariant, Unit[]> = {
  solo: [{ x: 180, y: 178, w: 240, h: 122, door: true }],
  duo: [{ x: 90, y: 178, w: 420, h: 122, door: true }],
  family: [
    { x: 250, y: 158, w: 290, h: 142, shade: 0.18 },
    { x: 60, y: 178, w: 330, h: 122, door: true },
  ],
  loft: [
    { x: 90, y: 178, w: 420, h: 122, door: true },
    { x: 90, y: 56, w: 230, h: 122, shade: 0.12 },
  ],
};

function UnitShape({ u, body, id }: { u: Unit; body: string; id: string }) {
  const ribs = [];
  for (let x = u.x + 10; x < u.x + u.w - 4; x += 10) {
    ribs.push(<line key={x} x1={x} y1={u.y + 8} x2={x} y2={u.y + u.h - 8} stroke="#000" strokeOpacity="0.16" strokeWidth="2" />);
  }
  const doorW = Math.min(120, u.w * 0.36);
  const doorX = u.x + 26;
  const winX = doorX + doorW + 40;
  const winW = Math.min(110, u.x + u.w - winX - 26);
  return (
    <g>
      <rect x={u.x} y={u.y} width={u.w} height={u.h} fill={body} />
      {u.shade ? <rect x={u.x} y={u.y} width={u.w} height={u.h} fill="#000" opacity={u.shade} /> : null}
      {ribs}
      <rect x={u.x} y={u.y} width={u.w} height="8" fill="#000" opacity="0.28" />
      <rect x={u.x} y={u.y + u.h - 8} width={u.w} height="8" fill="#000" opacity="0.28" />
      <rect x={u.x} y={u.y} width="6" height={u.h} fill="#000" opacity="0.22" />
      <rect x={u.x + u.w - 6} y={u.y} width="6" height={u.h} fill="#000" opacity="0.22" />
      {u.door ? (
        <g>
          <rect x={doorX} y={u.y + 20} width={doorW} height={u.h - 28} fill={`url(#${id}-glass)`} stroke="#1a1a1a" strokeWidth="3" />
          <line x1={doorX + doorW / 2} y1={u.y + 20} x2={doorX + doorW / 2} y2={u.y + u.h - 8} stroke="#1a1a1a" strokeWidth="3" />
        </g>
      ) : null}
      {winW > 40 ? (
        <rect x={u.door ? winX : u.x + u.w - winW - 30} y={u.y + 30} width={winW} height={u.h * 0.36} fill={`url(#${id}-glass)`} stroke="#1a1a1a" strokeWidth="3" />
      ) : null}
    </g>
  );
}

export default function ContainerArt({ variant = "duo", body = "#0D4532", tone = "light", className, label }: Props) {
  const id = `art-${variant}-${tone}-${body.replace("#", "")}`;
  const units = layouts[variant];
  const dark = tone === "dark";
  const front = units.find((u) => u.door) ?? units[0];
  return (
    <svg className={className} viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label ?? "Illustration of a container home"}>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={dark ? "#0D4532" : "#F8F3EA"} />
          <stop offset="1" stopColor={dark ? "#1B4633" : "#E8DDD0"} />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dfe9e4" />
          <stop offset="1" stopColor="#9fb8ad" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill={`url(#${id}-sky)`} />
      <circle cx="500" cy="78" r="34" fill="#C4956A" opacity={dark ? 0.5 : 0.55} />
      <path d="M0 262 L90 214 L170 250 L270 196 L380 252 L470 218 L600 262 L600 300 L0 300 Z" fill={dark ? "#0a3a2a" : "#ddd0bf"} />
      {units.map((u, i) => (
        <UnitShape key={i} u={u} body={body} id={id} />
      ))}
      {variant === "loft" ? (
        <g stroke={dark ? "#F8F3EA" : "#272727"} strokeWidth="3" fill="none">
          <line x1="320" y1="150" x2="510" y2="150" />
          {[340, 380, 420, 460, 500].map((x) => (
            <line key={x} x1={x} y1="150" x2={x} y2="178" />
          ))}
        </g>
      ) : null}
      <rect x={front.x - 24} y={GROUND} width={front.w + 48} height="9" fill="#C4956A" />
      <rect x="0" y={GROUND + 9} width="600" height={360 - GROUND - 9} fill={dark ? "#082e21" : "#cdbfac"} />
      <g>
        <rect x="42" y="250" width="6" height="50" fill="#6b4f35" />
        <circle cx="45" cy="236" r="26" fill={dark ? "#2a6a50" : "#1B4633"} />
        <circle cx="62" cy="252" r="16" fill={dark ? "#2a6a50" : "#1B4633"} opacity="0.85" />
      </g>
    </svg>
  );
}
