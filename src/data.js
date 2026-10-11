const money = (n) => `$${n.toFixed(2)}`

/** Build a priced product from MRSP + discount % so the badge and prices always agree. */
export const product = ({ name, img, mrp, discount, rating, reviews, category, alt }) => ({
  name,
  img,
  rating,
  reviews,
  category,
  alt: alt || name,
  discount,
  price: money(Math.round(mrp * (1 - discount / 100))),
  mrp: money(mrp),
})

export const CATEGORIES = ['Sports', 'Sneakers', 'Boots']

export const PRODUCTS = [
  // ---- Sports ----
  product({ name: "AirStride Zoom Men's Road Runners", img: '/images/p-black-runner.jpg', mrp: 96, discount: 10, rating: 4.6, reviews: 84, category: 'Sports' }),
  product({ name: "CloudKnit Lightweight Runners", img: '/images/p-grey-trainer.jpg', mrp: 79, discount: 9, rating: 4.4, reviews: 57, category: 'Sports' }),
  product({ name: "Velocity Court Multi-Surface Shoes", img: '/images/p-navy-runner.jpg', mrp: 88, discount: 15, rating: 4.7, reviews: 93, category: 'Sports' }),
  product({ name: "TrailPulse Grip Running Shoes", img: '/images/p-green-runner.jpg', mrp: 102, discount: 20, rating: 4.5, reviews: 41, category: 'Sports' }),
  // ---- Sneakers ----
  product({ name: "Heritage Low Top Sneakers", img: '/images/p-white-classic.jpg', mrp: 84, discount: 9, rating: 4.6, reviews: 112, category: 'Sneakers' }),
  product({ name: "Skyline High Top Sneakers", img: '/images/p-black-high.jpg', mrp: 98, discount: 12, rating: 4.5, reviews: 76, category: 'Sneakers' }),
  product({ name: "Retro 84 Canvas Sneakers", img: '/images/p-beige-court.jpg', mrp: 72, discount: 10, rating: 4.3, reviews: 63, category: 'Sneakers' }),
  product({ name: "Vibe Colorblock Sneakers", img: '/images/p-colorful-retro.jpg', mrp: 105, discount: 22, rating: 4.8, reviews: 148, category: 'Sneakers' }),
  // ---- Boots ----
  product({ name: "Urban Suede Chelsea Boots", img: '/images/p-boot-chelsea.jpg', mrp: 130, discount: 10, rating: 4.5, reviews: 38, category: 'Boots' }),
  product({ name: "Ridge Leather Work Boots", img: '/images/p-boot-work.jpg', mrp: 145, discount: 18, rating: 4.6, reviews: 52, category: 'Boots' }),
  product({ name: "Tactical Combat Boots", img: '/images/p-boot-combat.jpg', mrp: 139, discount: 14, rating: 4.4, reviews: 29, category: 'Boots' }),
  product({ name: "Alpine Trail Hiking Boots", img: '/images/p-boot-hiking.jpg', mrp: 158, discount: 20, rating: 4.7, reviews: 67, category: 'Boots' }),
]
