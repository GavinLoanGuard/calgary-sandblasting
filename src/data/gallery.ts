export type GalleryPhoto = {
  src: string;
  label: string;
  serviceSlug?: string;
};

// Real job photos, shot mid-process (not staged before/after pairs).
// serviceSlug links a photo to the service page it should also appear on.
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/gallery/fleet.png",
    label: "Fleet Trailer — Mid-Blast",
    serviceSlug: "fleet-commercial-blasting",
  },
  {
    src: "/images/gallery/equipment.png",
    label: "Heavy Equipment Blasting",
    serviceSlug: "trailer-equipment-blasting",
  },
  {
    src: "/images/gallery/fence.png",
    label: "Fence & Gate Restoration",
    serviceSlug: "fence-deck-restoration",
  },
  {
    src: "/images/gallery/deck.png",
    label: "Deck Sandblasting",
    serviceSlug: "fence-deck-restoration",
  },
  {
    src: "/images/gallery/wheel.png",
    label: "Wheel Hub Rust Removal",
    serviceSlug: "rust-paint-removal",
  },
  {
    src: "/images/gallery/driveway.png",
    label: "Residential Driveway",
  },
];

export function getGalleryPhotosForService(slug: string): GalleryPhoto[] {
  return GALLERY_PHOTOS.filter((p) => p.serviceSlug === slug);
}
