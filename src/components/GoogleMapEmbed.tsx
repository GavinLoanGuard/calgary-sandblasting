import { GOOGLE_MAPS_EMBED_SRC, GOOGLE_MAPS_SEARCH_URL } from "@/config/site";

export default function GoogleMapEmbed() {
  return (
    <div className="overflow-hidden rounded-lg border border-steel-200">
      <iframe
        title="Calgary Sandblasting service area map"
        src={GOOGLE_MAPS_EMBED_SRC}
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="bg-steel-50 px-4 py-2 text-center text-sm">
        <a href={GOOGLE_MAPS_SEARCH_URL} className="font-medium text-accent hover:underline">
          Find us on Google Maps
        </a>
      </div>
    </div>
  );
}
