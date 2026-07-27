export type Collection = "day" | "night";

export type Product = {
  slug: string;
  name: string;
  collection: Collection;
  collectionLabel: string;
  scentFamily: string;
  price: number;
  travelPrice: number;
  tagline: string;
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  burn: {
    time: string;
    wax: string;
    wick: string;
    vessel: string;
  };
  pairing: string;
  making: string;
  soldOut?: boolean;
};

export const products: Product[] = [
  {
    slug: "meridian",
    name: "Meridian",
    collection: "day",
    collectionLabel: "Day Collection",
    scentFamily: "Bergamot / Cedar",
    price: 78,
    travelPrice: 38,
    tagline: "Bergamot. White cedar. Black pepper. For the hours that matter.",
    description:
      "Built for men who treat stillness as a discipline. Meridian opens a room without announcing itself.",
    notes: {
      top: ["Bergamot", "Black pepper"],
      heart: ["White cedar", "Clary sage"],
      base: ["Vetiver", "Amber"],
    },
    burn: { time: "45+ hours", wax: "100% soy", wick: "Cotton, lead-free", vessel: "Matte black glass" },
    pairing: "Pairs with: Cold brew. Pressed linen. Early meetings.",
    making:
      "Meridian was built around a single bergamot sourced from a Calabrian estate. Everything else was chosen to stay out of its way.",
  },
  {
    slug: "obsidian",
    name: "Obsidian",
    collection: "night",
    collectionLabel: "Night Collection",
    scentFamily: "Oud / Vetiver",
    price: 82,
    travelPrice: 40,
    tagline: "Oud. Vetiver. Leather smoke. Burn it when the world quiets down.",
    description:
      "Built for men who treat stillness as a discipline. Obsidian doesn't fill a room. It lowers it.",
    notes: {
      top: ["Smoked leather", "Black pepper"],
      heart: ["Oud", "Dark rose"],
      base: ["Vetiver", "Labdanum"],
    },
    burn: { time: "45+ hours", wax: "100% soy", wick: "Cotton, lead-free", vessel: "Matte black glass" },
    pairing: "Pairs with: Dark bourbon. Cool concrete. Late evenings.",
    making:
      "Obsidian took eleven revisions. The oud kept fighting the leather note until we stopped trying to blend them and let them sit apart.",
  },
  {
    slug: "ash-and-iron",
    name: "Ash & Iron",
    collection: "night",
    collectionLabel: "Night Collection",
    scentFamily: "Smoke / Mineral",
    price: 84,
    travelPrice: 40,
    tagline: "Birch tar. Cold iron. Dying embers. Not for every room.",
    description:
      "A colder register than Obsidian. Built for men who like a room to feel like it's been lived in.",
    notes: {
      top: ["Birch tar", "Juniper"],
      heart: ["Iron accord", "Incense"],
      base: ["Guaiac wood", "Musk"],
    },
    burn: { time: "45+ hours", wax: "100% soy", wick: "Cotton, lead-free", vessel: "Matte black glass" },
    pairing: "Pairs with: Peated scotch. Raw concrete. Silence.",
    making:
      "We wanted the smell of a forge after the fire's out. Ash & Iron is what was left after we stopped trying to make it warmer.",
  },
  {
    slug: "quiet-hour",
    name: "Quiet Hour",
    collection: "day",
    collectionLabel: "Day Collection",
    scentFamily: "Green / Woody",
    price: 78,
    travelPrice: 38,
    tagline: "Fig leaf. Cypress. Wet stone. The pause before the day starts.",
    description:
      "The quietest thing we make. Meant for the hour before anyone else is awake.",
    notes: {
      top: ["Fig leaf", "Green mandarin"],
      heart: ["Cypress", "Violet leaf"],
      base: ["Wet stone accord", "Cedarwood"],
    },
    burn: { time: "45+ hours", wax: "100% soy", wick: "Cotton, lead-free", vessel: "Matte black glass" },
    pairing: "Pairs with: Black coffee. Open windows. Nothing else on.",
    making:
      "Quiet Hour started as a rejected version of Meridian. It was too restrained for Day. It turned out that was the point.",
  },
];

export const solstice = {
  code: "SOLSTICE — 001",
  name: "Solstice",
  tagline: "One formula. One run. A hundred men who understood.",
  units: 100,
  description:
    "Cade oil. Frankincense. Aged sandalwood. Poured once, numbered by hand, never repeated.",
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
