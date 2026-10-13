import { useState } from 'react'
import { CATEGORIES, PRODUCTS } from '../../data'
import ProductCard from './ProductCard'

export default function PopularProducts() {
  // Active filter tab for the product grid
  const [activeTab, setActiveTab] = useState('Sports')

  const visible = PRODUCTS.filter((p) => p.category === activeTab)

  return (
    <section id="popular" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <header className="text-center">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Popular Products
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
            The pairs people keep coming back for — reviewed by runners,
            hotheads on the court and commuters alike.
          </p>
        </header>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {CATEGORIES.map((category) => {
            const active = activeTab === category
            return (
              <button
                key={category}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setActiveTab(category)}
                className={`rounded-full px-6 py-2.5 font-display text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                  active
                    ? 'bg-zinc-950 text-white shadow-lg shadow-zinc-950/25'
                    : 'bg-white text-zinc-500 ring-1 ring-zinc-200 hover:text-zinc-950 hover:ring-zinc-400'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Product grid — re-keyed so a fade-in plays on every tab switch */}
        <div
          key={activeTab}
          className="mt-10 grid animate-fadeUp grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visible.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-full border-2 border-zinc-950 bg-transparent px-8 py-3 font-display text-xs font-black uppercase tracking-widest text-zinc-950 transition-all duration-300 hover:bg-zinc-950 hover:text-white hover:shadow-xl"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
