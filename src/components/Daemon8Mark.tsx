type MarkProps = {
  size?: number;
  variant?: "primary" | "inverse" | "mono" | "oxide";
};

export function Daemon8Mark({ size = 320, variant = "primary" }: MarkProps) {
  const colors = {
    primary: { bg: "var(--da-paper)", ink: "var(--da-ink)", numeral: "var(--da-oxide)", paren: "var(--da-ink)", mute: "var(--da-mute)" },
    inverse: { bg: "var(--da-ink)", ink: "var(--da-paper)", numeral: "var(--da-oxide)", paren: "var(--da-paper)", mute: "var(--da-mute)" },
    mono: { bg: "var(--da-paper)", ink: "var(--da-ink)", numeral: "var(--da-ink)", paren: "var(--da-ink)", mute: "var(--da-mute)" },
    oxide: { bg: "var(--da-oxide)", ink: "var(--da-paper)", numeral: "var(--da-paper)", paren: "var(--da-paper)", mute: "color-mix(in oklch, var(--da-paper) 70%, transparent)" },
  }[variant];

  const w = size;
  const h = size * 1.05;

  const outerSpacingX = w * 0.06;
  const outerSpacingY = h * 0.12;

  const tickX1 = outerSpacingX;
  const tickX2 = w - outerSpacingX;
  const tickY1 = outerSpacingY;
  const tickY2 = h - outerSpacingY;
  const tickLen = w * 0.08;

  const labelGap = w * 0.035;

  const innerPaddingX = w * 0.18;
  const innerPaddingY = h * 0.14;

  const contentX1 = tickX1 + innerPaddingX;
  const contentX2 = tickX2 - innerPaddingX;
  const contentY1 = tickY1 + innerPaddingY;
  const contentY2 = tickY2 - innerPaddingY;

  const stroke = 1.5;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ background: colors.bg, display: "block", maxWidth: w }}
      role="img"
      aria-label="DAEMON(8) mark"
    >
      <text x={tickX1} y={tickY1 - labelGap} fontFamily="JetBrains Mono, monospace" fontSize={size * 0.026} fill={colors.mute} letterSpacing={0.8}>OBSERVE</text>
      <text x={tickX2} y={tickY1 - labelGap} fontFamily="JetBrains Mono, monospace" fontSize={size * 0.026} fill={colors.mute} textAnchor="end" letterSpacing={0.8}>RUST</text>
      <text x={tickX1} y={tickY2 + labelGap} fontFamily="JetBrains Mono, monospace" fontSize={size * 0.026} fill={colors.mute} letterSpacing={0.8} dominantBaseline="hanging">LOGS</text>
      <text x={tickX2} y={tickY2 + labelGap} fontFamily="JetBrains Mono, monospace" fontSize={size * 0.026} fill={colors.mute} textAnchor="end" letterSpacing={0.8} dominantBaseline="hanging">SURREALDB</text>

      {[
        { ax: tickX1, ay: tickY1, hx: 1, vy: 1 },
        { ax: tickX2, ay: tickY1, hx: -1, vy: 1 },
        { ax: tickX1, ay: tickY2, hx: 1, vy: -1 },
        { ax: tickX2, ay: tickY2, hx: -1, vy: -1 },
      ].map((c, i) => (
        <g key={i}>
          <line x1={c.ax} y1={c.ay} x2={c.ax + c.hx * tickLen} y2={c.ay} stroke={colors.ink} strokeWidth={stroke} strokeLinecap="square" />
          <line x1={c.ax} y1={c.ay} x2={c.ax} y2={c.ay + c.vy * tickLen} stroke={colors.ink} strokeWidth={stroke} strokeLinecap="square" />
        </g>
      ))}

      <text
        x={w / 2}
        y={contentY1}
        fontFamily="JetBrains Mono, monospace"
        fontSize={size * 0.034}
        fill={colors.ink}
        textAnchor="middle"
        dominantBaseline="hanging"
        letterSpacing={size * 0.004}
      >
        DAEMON(8)
      </text>

      <text
        x={w / 2}
        y={(contentY1 + contentY2) / 2}
        fontFamily="Instrument Serif, Georgia, serif"
        fontSize={size * 0.30}
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fill={colors.paren}>(</tspan>
        <tspan fill={colors.numeral}>8</tspan>
        <tspan fill={colors.paren}>)</tspan>
      </text>

      <line x1={contentX1} y1={contentY2 - size * 0.045} x2={contentX2} y2={contentY2 - size * 0.045} stroke={colors.ink} strokeWidth={1} opacity={0.45} />

      <text
        x={w / 2}
        y={contentY2}
        fontFamily="JetBrains Mono, monospace"
        fontSize={size * 0.028}
        fill={colors.mute}
        textAnchor="middle"
        letterSpacing={size * 0.004}
      >
        SITUATIONAL AWARENESS
      </text>
    </svg>
  );
}
