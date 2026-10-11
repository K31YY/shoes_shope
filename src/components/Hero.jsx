import { ArrowRight, ShieldCheck, Star, Truck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-crimson text-white">
      {/* Sporty diagonal speed slabs + glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 46px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />
      {/* Ghost wordmark — the page's one loud signature */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[26vw] font-black leading-none tracking-tighter text-white/[0.06] lg:text-[16rem]"
      >
        VIBE
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-2 lg:gap-8 lg:px-6 lg:py-0 xl:min-h-[560px]">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.35em] text-red-100">
            <span className="h-px w-8 bg-red-100/70" aria-hidden="true" />
            New Sports Collection
          </p>
          <h1 className="mt-4 font-display text-[2.6rem] font-black uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            Nike Free Run Men&rsquo;s{' '}
            <span className="relative inline-block text-[#ffc843]">
              Running
            </span>{' '}
            Shoes
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-red-100/90">
            Feathery-cushioned daily trainers built for the street and the track.
            Responsive foam, breathable engineered mesh and the GripFlex outsole
            that keeps every stride locked in.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#popular"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-display text-sm font-black uppercase tracking-widest text-crimson shadow-lg shadow-crimson-deep/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-zinc-50 active:scale-100"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-100">
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#ffc843] text-[#ffc843]" />
                ))}
              </span>
              4.8 &middot; 2,300+ happy runners
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-wider text-red-100/80">
            <span className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4" /> Free 2-day shipping
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> 30-day easy returns
            </span>
          </div>
        </div>

        {/* Product stage */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-crimson-deep/40 lg:translate-y-8">
            <div className="absolute inset-0 z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.10),transparent_45%)] ring-1 ring-inset ring-zinc-900/5" />
            <img
              src="/images/hero-red-shoe.jpg"
              alt="Red Nike Free Run men's running shoes, three-quarter view"
              className="aspect-[4/3] w-full bg-white object-cover motion-safe:animate-float"
              loading="eager"
            />
          </div>
          {/* Price chip */}
          <div className="absolute -bottom-5 left-2 z-20 rotate-[-4deg] rounded-2xl bg-zinc-950 px-5 py-3 shadow-lg shadow-crimson-deep/40 sm:left-6 lg:left-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Now only</p>
            <p className="font-display text-2xl font-black text-white">
              $86 <span className="text-sm font-bold text-zinc-400 line-through">$110</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom marquee band */}
      <div className="relative border-t border-white/10 bg-crimson-dark/60 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-red-100/90">
        <div className="marquee-track flex w-max animate-marquee gap-12 whitespace-nowrap motion-reduce:animate-none">
          {[...Array(2)].flatMap((_, r) =>
            ['Run lighter', 'Recover faster', 'Own the street', 'New drop weekly', 'Members earn double'].map((t) => (
              <span key={`${r}-${t}`} className="flex items-center gap-12">
                {t} <span aria-hidden="true">&mdash;</span>
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  )
}
