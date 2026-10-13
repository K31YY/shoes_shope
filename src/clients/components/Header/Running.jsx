import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ChevronDown,
  Filter,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  Star,
} from 'lucide-react'

// Product list for Running shoes
const RUNNING_PRODUCTS = [
  {
    id: 'r1',
    name: 'Nike Air Zoom Pegasus 40',
    category: 'Daily Trainer',
    price: 130,
    originalPrice: 150,
    rating: 4.8,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    tag: 'Best Seller',
    colors: ['bg-red-500', 'bg-black', 'bg-blue-500'],
  },
  {
    id: 'r2',
    name: 'Adidas Ultraboost Light',
    category: 'Long Distance',
    price: 190,
    originalPrice: null,
    rating: 4.9,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
    tag: 'New Drop',
    colors: ['bg-zinc-800', 'bg-emerald-500'],
  },
  {
    id: 'r3',
    name: 'Asics Gel-Nimbus 25',
    category: 'Max Cushion',
    price: 160,
    originalPrice: 180,
    rating: 4.7,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1608231387042-66d17b3070a5?q=80&w=1000&auto=format&fit=crop',
    tag: '-11% OFF',
    colors: ['bg-blue-600', 'bg-zinc-400'],
  },
  {
    id: 'r4',
    name: 'New Balance Fresh Foam X 1080v12',
    category: 'Road Running',
    price: 150,
    originalPrice: null,
    rating: 4.6,
    reviews: 115,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
    tag: 'Top Rated',
    colors: ['bg-orange-500', 'bg-black'],
  },
  {
    id: 'r5',
    name: 'Hoka Clifton 9',
    category: 'Ultra Cushion',
    price: 145,
    originalPrice: 160,
    rating: 4.9,
    reviews: 410,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
    tag: 'Popular',
    colors: ['bg-teal-500', 'bg-blue-700'],
  },
  {
    id: 'r6',
    name: 'Brooks Ghost 15',
    category: 'Neutral Trainer',
    price: 140,
    originalPrice: null,
    rating: 4.8,
    reviews: 290,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
    tag: 'Runner Favorite',
    colors: ['bg-zinc-900', 'bg-red-600'],
  },
]

export default function Running() {
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filterCategories = ['All', 'Daily Trainer', 'Long Distance', 'Max Cushion', 'Road Running']

  const filteredProducts = selectedCategory === 'All'
    ? RUNNING_PRODUCTS
    : RUNNING_PRODUCTS.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-24">
      {/* Category Header Banner */}
      <section className="relative overflow-hidden bg-zinc-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 to-transparent opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 transition-colors hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-crimson/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-crimson mb-3">
              Performance Collection
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              RUNNING SHOES
            </h1>
            <p className="mt-4 text-sm text-zinc-400 sm:text-base leading-relaxed">
              Feathery-cushioned daily trainers built for the street and the track. Responsive foam, breathable engineered mesh, and maximum traction for every stride.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        {/* Controls / Filter Bar */}
        <div className="flex flex-col gap-4 border-b border-zinc-200/80 pb-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Subcategory Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-crimson text-white shadow-md shadow-crimson/20'
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
              {filteredProducts.length} Items
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-xl border border-zinc-200 bg-white py-2 pl-3 pr-8 text-xs font-bold text-zinc-700 outline-none focus:ring-2 focus:ring-crimson/30"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5"
            >
              <div>
                {/* Top Badge & Wishlist Button */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {product.tag}
                  </span>
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="grid h-9 w-9 place-items-center rounded-full bg-zinc-100/80 text-zinc-600 transition-colors hover:bg-crimson/10 hover:text-crimson"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                {/* Product Image */}
                <div className="relative my-4 aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  {product.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-zinc-900 group-hover:text-crimson transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-zinc-800">{product.rating}</span>
                  <span className="text-xs text-zinc-400">({product.reviews})</span>
                </div>
              </div>

              {/* Bottom Price & Add to Cart */}
              <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-zinc-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs font-bold text-zinc-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-crimson hover:shadow-md hover:shadow-crimson/30 active:scale-95"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}