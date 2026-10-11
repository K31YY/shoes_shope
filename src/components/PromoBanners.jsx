const CARDS = [
  {
    id: 'blue',
    wrapClass: 'bg-cyan-400 text-zinc-950',
    label: 'Flat 25% Discount',
    labelClass: 'bg-zinc-950 text-cyan-300',
    ctaClass: 'bg-zinc-950 text-white hover:bg-zinc-800',
    title: 'Shoetopia Smart Casual Shoes',
    text: 'Slip-into-anywhere sneakers with memory-foam comfort and a day-to-night finish.',
    img: '/images/p-blue-casual.jpg',
    alt: "Men's vibrant blue casual sneakers",
    imgClass: 'bg-cyan-300 object-center',
  },
  {
    id: 'tan',
    wrapClass: 'bg-amber-100 text-zinc-950',
    label: 'Flat 20% Discount',
    labelClass: 'bg-crimson text-white',
    ctaClass: 'bg-zinc-950 text-white hover:bg-zinc-800',
    title: "Leather Men's Sports Shoes",
    text: 'Full-grain leather uppers broken in for the court, styled for the sidewalk.',
    img: '/images/promo-tan-lifestyle.jpg',
    alt: 'Person wearing yellow leather casual sneakers',
    imgClass: 'bg-amber-50 object-[center_78%]',
  },
]

export default function PromoBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CARDS.map((card) => (
          <article
            key={card.id}
            className={`group relative overflow-hidden rounded-3xl ${card.wrapClass} shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/10 lg:min-h-[300px] lg:grid lg:grid-cols-2 lg:items-center`}
          >
            <div className="p-7 pb-2 sm:p-9 lg:pb-9">
              <span
                className={`inline-block rounded-full ${card.labelClass} px-3.5 py-1.5 font-display text-[11px] font-black uppercase tracking-[0.18em]`}
              >
                {card.label}
              </span>
              <h3 className="mt-4 max-w-[16ch] font-display text-[26px] font-black uppercase leading-[1.02] tracking-tight sm:text-3xl">
                {card.title}
              </h3>
              <p className="mt-2.5 hidden max-w-[34ch] text-sm leading-snug opacity-75 sm:block">
                {card.text}
              </p>
              <a
                href="#popular"
                className={`mt-5 inline-flex items-center gap-2 rounded-full ${card.ctaClass} px-6 py-3 font-display text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-100`}
              >
                Shop Now
              </a>
            </div>
            <div className="relative overflow-hidden lg:h-full">
              <img
                src={card.img}
                alt={card.alt}
                loading="lazy"
                className={`h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52 lg:h-full lg:aspect-auto ${card.imgClass}`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
