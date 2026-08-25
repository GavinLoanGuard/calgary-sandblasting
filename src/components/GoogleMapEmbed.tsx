import { GOOGLE_MAPS_EMBED_SRC, GOOGLE_MAPS_SEARCH_URL } from "@/config/site";

export default function GoogleMapEmbed() {
  return (
    <div className="clip-plate overflow-hidden border-2 border-ink">
      <iframe
        title="Calgary Sandblasting service area map"
        src={GOOGLE_MAPS_EMBED_SRC}
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="border-t-2 border-ink bg-steel-50 px-4 py-2 text-center">
        <a href={GOOGLE_MAPS_SEARCH_URL} className="font-mono text-xs font-semibold uppercase tracking-wide text-rust hover:underline">
          Find us on Google Maps
        </a>
      </div>
    </div>
  );
}
