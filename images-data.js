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
    file: "images/veil_nebula_1.jpg",
    object: "NGC 6960 — Western Veil Nebula",
    meta: "Integration: 5 hrs 5 min · Ha-OIII<br>Svbony SV503 80ED / ASI 2600MC",
    featured: true
  },
  {
    file: "images/Eagle_1.jpg",
    object: "M16 — Eagle Nebula",
    meta: "Integration: 2 hrs 30 min · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: true
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
    meta: "Integration: 2 panel mosaic<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: true
  },
  {
    file: "images/m42_update.jpg",
    object: "M42 — Great Nebula of Orion",
    meta: "Integration: 2 hrs 55 min · RGB<br>Orion SpaceProbe 130st / ASI 585MC",
    featured: true
  },
];
