import Image from "next/image";

function hashTilt(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 997;
  // deterministic tilt between -2.5deg and 2.5deg
  return ((h % 50) - 25) / 10;
}

export default function GalleryPhoto({
  label,
  src,
  aspect = "aspect-[4/3]",
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  label: string;
  src?: string;
  aspect?: string;
  className?: string;
  sizes?: string;
}) {
  const tilt = hashTilt(label);

  return (
    <div
      className={`relative bg-steel-50 p-2.5 pb-8 shadow-[3px_3px_0_0_theme(colors.ink.DEFAULT)] transition-transform hover:rotate-0 ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* tape corners */}
      <span className="absolute -top-2 left-6 h-4 w-10 -rotate-6 bg-hazard/60" />
      <span className="absolute -top-2 right-6 h-4 w-10 rotate-3 bg-hazard/60" />

      <div className={`relative ${aspect} overflow-hidden border border-steel-200 bg-steel-100`}>
        {src ? (
          <>
            <Image src={src} alt={label} fill sizes={sizes} className="object-cover" />
            <span className="grain" aria-hidden style={{ opacity: 0.15 }} />
          </>
        ) : (
          <>
            <span
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(21,23,26,0.08) 0, rgba(21,23,26,0.08) 2px, transparent 2px, transparent 12px)",
              }}
            />
            <span className="grain" aria-hidden />
            <div className="relative flex h-full items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-steel-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V6a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 6v10.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l5-5 4 4 3-3 6 6" />
                <circle cx="8" cy="8.5" r="1.5" />
              </svg>
            </div>
          </>
        )}
      </div>

      <p className="absolute inset-x-3 bottom-1.5 truncate text-center font-mark text-sm leading-none text-steel-700">
        {label}
      </p>
    </div>
  );
}
