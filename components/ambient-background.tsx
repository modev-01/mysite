export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base grid */}
      <div className="grid-bg absolute inset-0 opacity-60" />

      {/* Glowing orbs */}
      <div
        className="absolute -top-40 right-[-10%] size-144 rounded-full bg-primary/20 blur-[120px]"
        style={{ animation: "pulse-glow 9s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] size-128 rounded-full bg-chart-2/20 blur-[120px]"
        style={{ animation: "pulse-glow 11s ease-in-out infinite 1s" }}
      />

      {/* Top vignette to focus content */}
      <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/20 to-background/80" />
    </div>
  );
}
