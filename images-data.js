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
    meta: "Integration: 5.1 hrs · Ha-OIII<br>Svbony SV503 80ED / ASI2600MC",
    featured: true
  },
  {
    file: "REPLACE_2.jpg",
    object: "M31 — Andromeda Galaxy",
    meta: "Integration: 4 hrs · RGB<br>Askar FRA400 / ASI2600MM",
    featured: true
  },
  {
    file: "REPLACE_3.jpg",
    object: "M42 — Orion Nebula",
    meta: "Integration: 3 hrs · Ha-OIII-SII<br>Askar FRA400 / ASI2600MM",
    featured: true
  },
  {
    file: "REPLACE_4.jpg",
    object: "IC 1396 — Elephant's Trunk",
    meta: "Integration: 8 hrs · SHO<br>Askar FRA400 / ASI2600MM",
    featured: true
  },
  {
    file: "REPLACE_5.jpg",
    object: "M45 — The Pleiades",
    meta: "Integration: 5 hrs · RGB<br>Askar FRA400 / ASI2600MM",
    featured: true
  },
  {
    file: "REPLACE_6.jpg",
    object: "M51 — Whirlpool Galaxy",
    meta: "Integration: 4.5 hrs · LRGB<br>Askar FRA400 / ASI2600MM",
    featured: true
  },
  {
    file: "REPLACE_7.jpg",
    object: "Veil Nebula",
    meta: "Integration: — hrs · —<br>ASI2600MC Pro",
    featured: false
  },
  {
    file: "REPLACE_8.jpg",
    object: "Eagle Nebula",
    meta: "Integration: — hrs · Hubble Palette<br>ZWO 585MC Pro",
    featured: false
  },
  {
    file: "REPLACE_9.jpg",
    object: "Dumbbell Nebula",
    meta: "Integration: — hrs · —<br>ZWO 585MC Pro",
    featured: false
  }
];
