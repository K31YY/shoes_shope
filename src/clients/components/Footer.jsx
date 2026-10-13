import { Facebook, Footprints, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 md:flex-row md:justify-between lg:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-crimson">
            <Footprints className="h-[18px] w-[18px] -rotate-12" strokeWidth={2.4} aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-black lowercase tracking-tight">
            shoes<span className="text-crimson">vibe</span>
          </span>
        </a>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-semibold">
          {['About', 'Shipping', 'Returns', 'Size Guide', 'Careers', 'Privacy'].map((l) => (
            <a key={l} href="#top" className="transition-colors hover:text-white">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#top"
              aria-label={`Shoesvibe on social media`}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-colors hover:bg-crimson hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Shoesvibe. All strides reserved.
      </p>
    </footer>
  )
}
