export default function PlaceholderPhoto({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex ${aspect} items-center justify-center rounded-lg border-2 border-dashed border-steel-300 bg-steel-100 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(31,41,51,0.06) 0, rgba(31,41,51,0.06) 2px, transparent 2px, transparent 14px)",
      }}
    >
      <div className="px-4 text-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mx-auto h-8 w-8 text-steel-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V6a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 6v10.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l5-5 4 4 3-3 6 6" />
          <circle cx="8" cy="8.5" r="1.5" />
        </svg>
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-steel-500">{label}</p>
      </div>
    </div>
  );
}
