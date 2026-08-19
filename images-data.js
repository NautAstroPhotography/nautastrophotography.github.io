// NAUTASTRO — SHARED IMAGE DATA
// This is the single source of truth for your portfolio.
// Both index.html (homepage preview) and portfolio.html (full gallery)
// read from this array and build their tiles automatically.
//
// TO ADD A NEW IMAGE: add a new object to the array below.
// TO FEATURE IT ON THE HOMEPAGE: set featured: true (homepage shows
// the first 6 entries with featured: true, in the order they appear here).
// TO REMOVE AN IMAGE: delete its object from the array.
//
// file  = path to the image (e.g. "images/veil-nebula.jpg")
// object = the name shown in the caption
// meta   = exposure/gear info shown in the caption (can include <br>)
// featured = true/false — whether it shows in the homepage preview

const PORTFOLIO_IMAGES = [
  {
    file: "images/fireworks_galaxy_2.jpg",
    object: "NGC 6946 — The Fireworks Galaxy",
    meta: "Integration: 1 hr 36 min · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: true,
    variants: [
      { file: "images/fireworks_galaxy_2.jpg", label: "Processed" },
      { file: "images/annotated_fireworks_galaxy_2.jpg", label: "Annotated" },
  ]
  },
  {
    file: "images/comet.jpg",
    object: "NGC 6946 — The Fireworks Galaxy",
    meta: "Integration: 41 min · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: true
  },
  {
    file: "images/veil_nebula_1_dark.jpg",
    object: "NGC 6960 — Western Veil Nebula",
    meta: "Integration: 5 hrs 5 min · Ha-OIII<br>Svbony SV503 80ED / ASI 2600MC",
    featured: true,
    variants: [
      { file: "images/veil_nebula_1_dark.jpg", label: "Processed" },
      { file: "images/veil_nebula_1_starless_dark.jpg", label: "Starless" },
  ]
  },
  {
    file: "images/Eagle_1.jpg",
    object: "M16 — Eagle Nebula",
    meta: "Integration: 2 hrs 30 min · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: true,
    variants: [
      { file: "images/Eagle_1.jpg", label: "True Color" },
      { file: "images/Eagle_4_(hubble_pallet_corrected).jpg", label: "Pseudo SHO · Hubble Palette" },
  ]
  },
  {
    file: "images/dumbbell_stretched.jpg",
    object: "M27 — Dumbbell Nebula",
    meta: "Integration: 1 hr 20 min · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: true
  },
  {
    file: "images/Mineral_Moon.jpg",
    object: "Mineral Moon",
    meta: "Integration: 2 panel mosaic · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: true,
    variants: [
      { file: "images/Mineral_Moon.jpg", label: "Mineral Enhancement" },
      { file: "images/Mono_Moon.jpg", label: "True Color" },
  ]
  },
  {
    file: "images/m13_newprocess.jpg",
    object: "Messier 13 — The Hercules Globular Cluster",
    meta: "Integration: 3 hrs 5 min · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: false,
    variants: [
      { file: "images/m13_newprocess.jpg", label: "Processed" },
      { file: "images/annotated_m13_newprocess.png", label: "Annotated" },
  ]
  },
  {
    file: "images/m42_update.jpg",
    object: "M42 — Great Nebula of Orion",
    meta: "Integration: 2 hrs 55 min · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: false
  },
];
