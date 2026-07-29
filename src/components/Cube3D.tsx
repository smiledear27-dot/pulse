import { useEffect, useRef } from 'react';

// A CSS-3D rotating cube whose faces are tinted with the brand gradient.
// It continuously spins on two axes and leans toward the cursor (parallax).
export default function Cube3D() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const tilt = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const scene = sceneRef.current;
    const cube = cubeRef.current;
    if (!scene || !cube) return;

    let raf = 0;
    let angle = 0;

    const onMove = (e: MouseEvent) => {
      const rect = scene.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // normalized -1..1 from center
      target.current.x = (e.clientX - cx) / (rect.width / 2);
      target.current.y = (e.clientY - cy) / (rect.height / 2);
    };
    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };

    const tick = () => {
      angle += 0.35;
      // ease tilt toward target for smooth parallax
      tilt.current.x += (target.current.x - tilt.current.x) * 0.06;
      tilt.current.y += (target.current.y - tilt.current.y) * 0.06;
      const rx = -tilt.current.y * 18;
      const ry = tilt.current.x * 18;
      cube.style.transform = `rotateX(${rx}deg) rotateY(${angle + ry}deg)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  const faceBase =
    'absolute inset-0 flex items-center justify-center border border-white/10 backdrop-blur-[2px]';
  const tintA = 'bg-gradient-to-br from-primary/30 to-primary/5';
  const tintB = 'bg-gradient-to-br from-secondary/30 to-secondary/5';

  const S = 150; // cube size in px

  return (
    <div
      ref={sceneRef}
      className="perspective-1000 relative flex items-center justify-center"
      style={{ width: S * 2.2, height: S * 2.2 }}
    >
      {/* ambient glow behind cube */}
      <div className="absolute h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute h-40 w-40 translate-x-16 translate-y-12 rounded-full bg-secondary/20 blur-3xl" />

      <div
        ref={cubeRef}
        className="preserve-3d relative"
        style={{ width: S, height: S, transformStyle: 'preserve-3d' }}
      >
        {/* front */}
        <div
          className={`${faceBase} ${tintA} rounded-md`}
          style={{ transform: `translateZ(${S / 2}px)` }}
        >
          <FaceGlyph label="SEO" />
        </div>
        {/* back */}
        <div
          className={`${faceBase} ${tintA} rounded-md`}
          style={{ transform: `rotateY(180deg) translateZ(${S / 2}px)` }}
        >
          <FaceGlyph label="PPC" />
        </div>
        {/* right */}
        <div
          className={`${faceBase} ${tintB} rounded-md`}
          style={{ transform: `rotateY(90deg) translateZ(${S / 2}px)` }}
        >
          <FaceGlyph label="CRO" />
        </div>
        {/* left */}
        <div
          className={`${faceBase} ${tintB} rounded-md`}
          style={{ transform: `rotateY(-90deg) translateZ(${S / 2}px)` }}
        >
          <FaceGlyph label="SMM" />
        </div>
        {/* top */}
        <div
          className={`${faceBase} bg-gradient-to-br from-white/15 to-white/0 rounded-md`}
          style={{ transform: `rotateX(90deg) translateZ(${S / 2}px)` }}
        >
          <FaceGlyph label="UX" />
        </div>
        {/* bottom */}
        <div
          className={`${faceBase} bg-gradient-to-br from-white/10 to-white/0 rounded-md`}
          style={{ transform: `rotateX(-90deg) translateZ(${S / 2}px)` }}
        >
          <FaceGlyph label="AI" />
        </div>
      </div>
    </div>
  );
}

function FaceGlyph({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display text-2xl font-bold tracking-tight text-white/90">
        {label}
      </span>
      <span className="h-1 w-6 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </div>
  );
}
