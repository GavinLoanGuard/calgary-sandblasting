export type ServiceAreaContent = {
  slug: string;
  name: string;
  region: string;
  driveTime: string;
  intro: string;
  localContext: string;
  focusAreas: string[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICE_AREAS: ServiceAreaContent[] = [
  {
    slug: "calgary",
    name: "Calgary",
    region: "AB",
    driveTime: "Home base",
    intro:
      "Calgary Sandblasting is based in Calgary and runs the majority of our jobs right in the city — from fabrication shops in the Foothills Industrial area to fencing contractors staging out of Barlow Trail and Great Plains yards.",
    localContext:
      "Calgary's industrial northeast and southeast are full of fabrication shops, equipment rental yards, and fencing/landscaping contractors that need trailers and equipment blasted between jobs. We show up with the compressor and blast rig ready to go, whether that's a single trailer at a shop off Manchester Road or a multi-unit fleet job at a rental yard near the airport.",
    focusAreas: [
      "Fabrication and welding shops needing bare-metal prep",
      "Equipment rental yards turning over fleet inventory",
      "Fencing and landscaping contractors prepping trailers for the season",
      "Residential fence and deck restoration across Calgary neighborhoods",
    ],
    metaTitle: "Sandblasting Calgary | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting is a mobile sandblasting company based in Calgary, serving fabrication shops, equipment rental yards, and contractors citywide.",
  },
  {
    slug: "airdrie",
    name: "Airdrie",
    region: "AB",
    driveTime: "~25 min from Calgary",
    intro:
      "Airdrie's industrial parks and surrounding acreages keep growing, and Calgary Sandblasting runs regular jobs north of the city for contractors and equipment owners who don't want to trailer their gear into Calgary for prep work.",
    localContext:
      "Between the East Lake and Yankee Valley industrial areas and the acreages ringing Airdrie, we see a steady mix of fencing contractor trailers, small fabrication shops, and rural property owners dealing with rusted fence lines and equipment. We come to you, so nothing has to leave the yard.",
    focusAreas: [
      "Fencing contractors serving Airdrie's growing acreage subdivisions",
      "Small fabrication and welding shops in Airdrie's industrial parks",
      "Equipment and trailer prep for landscaping companies",
      "Acreage fence and gate rust removal",
    ],
    metaTitle: "Sandblasting Airdrie | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting provides mobile sandblasting in Airdrie, AB — trailer and equipment blasting, rust removal, and fence restoration on-site.",
  },
  {
    slug: "cochrane",
    name: "Cochrane",
    region: "AB",
    driveTime: "~30 min from Calgary",
    intro:
      "West of Calgary toward the foothills, Cochrane and the surrounding acreages have a lot of ranch fencing, gates, and equipment that takes a beating from weather. Calgary Sandblasting handles that work on-site.",
    localContext:
      "Cochrane's acreage and ranch properties mean more metal fencing, gates, and equipment exposed to weather year-round than you'd find in a typical subdivision. We regularly strip rust off ranch gates, equipment trailers, and outbuilding steel for property owners west of Calgary.",
    focusAreas: [
      "Ranch and acreage gate and fence rust removal",
      "Equipment trailer prep for contractors working the Cochrane area",
      "Outbuilding and structural steel rust removal",
      "Residential deck and fence restoration",
    ],
    metaTitle: "Sandblasting Cochrane | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting offers mobile sandblasting in Cochrane, AB, including ranch gate and fence rust removal, trailer prep, and deck restoration.",
  },
  {
    slug: "okotoks",
    name: "Okotoks",
    region: "AB",
    driveTime: "~35 min from Calgary",
    intro:
      "South of Calgary in Foothills County, Okotoks and the surrounding acreages bring us a similar mix of ranch fencing, farm equipment, and contractor trailers that need on-site blasting instead of a trip into the city.",
    localContext:
      "Foothills County's acreages and small farms around Okotoks mean equipment and fencing that sits outside year-round. We handle rust removal on farm equipment, gates, and trailers, plus fleet prep for contractors based south of Calgary who'd rather not haul equipment north for service.",
    focusAreas: [
      "Farm and acreage equipment rust removal",
      "Trailer and fleet prep for Foothills County contractors",
      "Fence and gate restoration for rural properties",
      "Residential deck restoration",
    ],
    metaTitle: "Sandblasting Okotoks | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting provides mobile sandblasting in Okotoks and Foothills County — equipment rust removal, trailer prep, and fence restoration on-site.",
  },
  {
    slug: "chestermere",
    name: "Chestermere",
    region: "AB",
    driveTime: "~20 min from Calgary",
    intro:
      "Chestermere's mix of newer residential development and small acreages east of Calgary means a steady need for deck restoration, fence work, and equipment prep for the contractors building and maintaining the area.",
    localContext:
      "With Chestermere's lakeside residential growth and the acreages further out, we see a mix of homeowners wanting decks and fences stripped and refinished alongside landscaping and fencing contractors who need trailers turned around between jobs.",
    focusAreas: [
      "Residential deck and fence restoration around Chestermere Lake",
      "Landscaping and fencing contractor trailer prep",
      "Acreage gate and equipment rust removal",
    ],
    metaTitle: "Sandblasting Chestermere | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting offers mobile sandblasting in Chestermere, AB — deck and fence restoration, trailer prep, and rust removal on-site.",
  },
  {
    slug: "strathmore",
    name: "Strathmore",
    region: "AB",
    driveTime: "~40 min from Calgary",
    intro:
      "East of Calgary in Wheatland County, Strathmore's agricultural base means grain trailers, farm equipment, and fencing that Calgary Sandblasting services on-site for local operators.",
    localContext:
      "Strathmore and Wheatland County run on agriculture, and that means grain trailers, implements, and fencing that take real wear. We bring the compressor and blast rig out to farms and shops in the area so equipment doesn't have to make the trip into Calgary.",
    focusAreas: [
      "Grain trailer and farm implement rust removal",
      "Agricultural fencing and gate restoration",
      "Fabrication shop and equipment dealer prep work",
    ],
    metaTitle: "Sandblasting Strathmore | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting provides mobile sandblasting in Strathmore, AB — farm equipment and grain trailer rust removal, fencing restoration, and more.",
  },
];

export function getServiceAreaBySlug(slug: string): ServiceAreaContent | undefined {
  return SERVICE_AREAS.find((c) => c.slug === slug);
}
