import { useState } from 'react'
import { Heart, Star } from 'lucide-react'

function Stars({ rating, reviews }) {
  const rounded = Math.round(rating * 2) / 2
  return (
    <div className="flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5 from ${reviews} reviews`}>
      <span className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => {
          const filled = rounded >= i
          const half = !filled && rounded >= i - 0.5
          return (
            <span key={i} className="relative inline-block h-4 w-4">
              <Star className="absolute inset-0 h-4 w-4 text-zinc-300" />
              {(filled || half) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: filled ? '100%' : '50%' }}
                >
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </span>
              )}
            </span>
          )
        })}
      </span>
      <span className="text-xs font-semibold text-zinc-400">
        {rating.toFixed(1)} ({reviews})
      </span>
    </div>
  )
}

export default function ProductCard({ item }) {
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-zinc-900/10">
      <div className="relative overflow-hidden bg-zinc-50">
        <img
          src={item.img}
          alt={item.alt}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        {/* Circular discount badge */}
        <span className="absolute left-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-crimson text-[11px] font-black text-white shadow-md shadow-crimson/30">
          -{item.discount}%
        </span>
        <button
          type="button"
          onClick={() => setWishlisted((v) => !v)}
          aria-pressed={wishlisted}
          aria-label={wishlisted ? `Remove ${item.name} from wishlist` : `Add ${item.name} to wishlist`}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-zinc-500 opacity-0 shadow-sm ring-1 ring-zinc-100 backdrop-blur transition-all duration-300 hover:text-crimson focus-visible:opacity-100 group-hover:opacity-100"
        >
          <Heart className={`h-[18px] w-[18px] ${wishlisted ? 'fill-crimson text-crimson' : ''}`} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Stars rating={item.rating} reviews={item.reviews} />
        <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-bold leading-snug text-zinc-800 transition-colors group-hover:text-crimson">
          {item.name}
        </h3>
        <p className="mt-auto flex items-baseline gap-2.5">
          <span className="font-display text-lg font-black text-zinc-950">{item.price}</span>
          <span className="text-sm font-semibold text-zinc-500 line-through decoration-zinc-400">
            {item.mrp}
          </span>
        </p>
      </div>
    </article>
  )
}
