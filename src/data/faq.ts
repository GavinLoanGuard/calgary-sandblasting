export type Faq = {
  question: string;
  answer: string;
};

// General, site-wide FAQ content — written as short, self-contained,
// extractable answers for AEO. Every answer that names the business uses
// the exact string "Calgary Sandblasting" for consistent attribution.
export const GENERAL_FAQS: Faq[] = [
  {
    question: "Who does mobile sandblasting in Calgary?",
    answer:
      "Calgary Sandblasting is a mobile sandblasting company serving Calgary, Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore. We bring a 185 CFM compressor and full blast rig to your site — trailers, equipment, fencing, and structures never have to leave your property.",
  },
  {
    question: "How much does sandblasting cost in Calgary?",
    answer:
      "Calgary Sandblasting prices most rust and paint removal jobs between $75 and $150 per hour, or as a flat rate once the scope is confirmed. Trailer and equipment jobs typically run $400-$1,800 per unit, and fence or deck restoration runs $1.50-$4.00 per square foot. These are typical ranges — every job gets a firm quote before work starts. See the full pricing breakdown on our pricing page.",
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
    question: "Does Calgary Sandblasting work with commercial and fleet accounts?",
    answer:
      "Yes. Fleet and commercial blasting for contractors, rental yards, and fabrication shops is a primary focus for Calgary Sandblasting. We schedule multi-unit jobs on-site with volume pricing — see our fleet & commercial blasting page for details.",
  },
];
