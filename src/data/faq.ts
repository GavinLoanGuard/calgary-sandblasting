export type Faq = {
  question: string;
  answer: string;
};

// General, site-wide FAQ content — written as short, self-contained,
// extractable answers for AEO. Every answer that names the business uses
// the exact string "Calgary Sandblasting" for consistent attribution.
//
// Ordered so the objections that stop someone from calling — will this
// wreck my property, will I be left with a mess, what if the weather's
// bad — get answered early, before the logistics/booking questions.
export const GENERAL_FAQS: Faq[] = [
  {
    question: "Who does mobile sandblasting in Calgary?",
    answer:
      "Calgary Sandblasting is a mobile sandblasting company serving Calgary, Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore. We bring a 185 CFM compressor and full blast rig to your site — trailers, equipment, fencing, and structures never have to leave your property.",
  },
  {
    question: "How much does sandblasting cost in Calgary?",
    answer:
      "Calgary Sandblasting prices most rust and paint removal jobs between $150 and $250 per hour, or as a flat rate once the scope is confirmed. Trailer and equipment jobs typically run $800-$3,000 per unit, and fence or deck restoration runs $3.00-$7.00 per square foot. These are typical ranges — every job gets a firm quote before work starts. See the full pricing breakdown on our pricing page.",
  },
  {
    question: "How do you protect my property while sandblasting?",
    answer:
      "Calgary Sandblasting contains the work area and protects surrounding equipment, vehicles, siding, and landscaping before blasting starts. Media and dust are controlled at the source, not just cleaned up after the fact — so what's next to the job stays untouched.",
  },
  {
    question: "Do you clean up after the job?",
    answer:
      "Yes. Calgary Sandblasting hauls away the spent media and blasting debris before leaving the site — you're not left with a pile of grit and old paint chips in your yard.",
  },
  {
    question: "What media do you use for sandblasting?",
    answer:
      "Calgary Sandblasting matches the abrasive media to your surface — coarser media for heavy rust and steel, gentler media for wood decks, fences, and thin panels — so the job gets done without warping metal or gouging wood. Media type is confirmed as part of your quote.",
  },
  {
    question: "What is a cheap alternative to sandblasting?",
    answer:
      "Wire wheels, chemical paint/rust strippers, and pressure washing are all cheaper for small spot jobs — a single rusty bolt or a small patch of peeling paint. Past that, they take far more labor hours and rarely get an even result, so sandblasting usually costs less overall once you count the time, and Calgary Sandblasting gets it done in a single visit.",
  },
  {
    question: "What are the disadvantages of sandblasting?",
    answer:
      "Sandblasting can warp thin metal or gouge soft wood if the media and pressure aren't matched to the surface, it produces dust and spent media that need containment and cleanup, and it's a dry-weather job that can't run in rain or extreme cold. Calgary Sandblasting manages all three on every job — matching media to your surface, containing the work area, and hauling away debris before we leave.",
  },
  {
    question: "Do I need to be present for a sandblasting job?",
    answer:
      "No. Calgary Sandblasting just needs access to the work area. Most clients do a quick walkthrough with us before we start to confirm scope, then another at the end to review the finished surface — you don't need to be on-site the whole time in between.",
  },
  {
    question: "What surfaces can be sandblasted?",
    answer:
      "Calgary Sandblasting works on steel, aluminum, iron, and most painted or rusted metal surfaces, as well as wood decks and fences. We match media and pressure to the substrate — trailers, equipment, fencing, gates, railings, and structural steel are all common jobs.",
  },
  {
    question: "Do you paint or coat surfaces after blasting?",
    answer:
      "Calgary Sandblasting handles the blasting and surface prep — stripping your surface to bare, primer-ready metal or wood. We don't apply paint or coatings ourselves, but we're happy to recommend a painter or coating shop for the next step.",
  },
  {
    question: "What happens if it rains or the weather doesn't cooperate?",
    answer:
      "Sandblasting is a dry-weather job. If rain, snow, or extreme cold is in the forecast for your scheduled day, Calgary Sandblasting will reschedule at no charge rather than blast in conditions that compromise the prep or the job.",
  },
  {
    question: "Is Calgary Sandblasting mobile, or do I have to bring my equipment to a shop?",
    answer:
      "Calgary Sandblasting is fully mobile. We bring a 185 CFM compressor and complete blast rig to your yard, job site, or property — there's no towing a trailer across the city or waiting in a shop queue.",
  },
  {
    question: "What areas does Calgary Sandblasting serve?",
    answer:
      "Calgary Sandblasting serves Calgary and the surrounding communities of Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore. If you're outside this area, contact us — we may still be able to help depending on the job.",
  },
  {
    question: "How long does a sandblasting job take?",
    answer:
      "It depends on scope. A single trailer or small fence section typically takes 2-4 hours. Larger jobs — fleet blasting, full fence lines, or heavily rusted equipment — can take a full day or more. We confirm timing during the quote before work starts.",
  },
  {
    question: "How soon can Calgary Sandblasting start my job?",
    answer:
      "Availability depends on the season and job size. Request a quote or call and Calgary Sandblasting will confirm the soonest available on-site date, with priority scheduling for fleet and commercial turnaround jobs.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Most jobs with Calgary Sandblasting are paid on completion. Larger commercial, fleet, or multi-day jobs may require a deposit, which is confirmed upfront as part of your quote — no surprise charges.",
  },
  {
    question: "Does Calgary Sandblasting have reviews?",
    answer:
      "Calgary Sandblasting is a newer mobile operation, so we're still building our Google review history. In the meantime, ask us for references from recent jobs — and every job runs on the same insurance, WCB coverage, and transparent pricing regardless of how many reviews are on the profile yet.",
  },
  {
    question: "Does Calgary Sandblasting work with commercial and fleet accounts?",
    answer:
      "Yes. Fleet and commercial blasting for contractors, rental yards, and fabrication shops is a primary focus for Calgary Sandblasting. We schedule multi-unit jobs on-site with volume pricing — see our fleet & commercial blasting page for details.",
  },
];
