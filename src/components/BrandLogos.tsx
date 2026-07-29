// Lightweight inline SVG "brand" marks — grayscale on the social-proof strip.
// These are abstract wordmark-style logos rendered as SVG so the strip stays
// crisp at any size without external image dependencies.

const brands = [
  { name: 'Nova', path: 'M2 14 L8 2 L14 14 M4 10 H12' },
  { name: 'Vertex', path: 'M2 12 L8 3 L14 12 M5 8 H11' },
  { name: 'Orbit', path: 'M8 2 a6 6 0 1 0 0.01 0 M8 8 L12 4' },
  { name: 'Pulse', path: 'M2 8 H5 L7 3 L9 13 L11 8 H14' },
  { name: 'Quanta', path: 'M8 2 L14 8 L8 14 L2 8 Z M8 5 L11 8 L8 11 L5 8 Z' },
  { name: 'Helix', path: 'M3 3 C13 6 3 10 13 13 M13 3 C3 6 13 10 3 13' },
];

export default function BrandLogos({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-4 ${className}`}>
      {brands.map((b) => (
        <div
          key={b.name}
          className="flex items-center gap-2 opacity-50 grayscale transition-all duration-500 hover:opacity-90 hover:grayscale-0"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d={b.path} />
          </svg>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            {b.name}
          </span>
        </div>
      ))}
    </div>
  );
}
