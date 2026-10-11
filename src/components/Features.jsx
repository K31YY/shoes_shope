import { Headset, RotateCcw, Store, Truck } from 'lucide-react'

const FEATURES = [
  {
    icon: Truck,
    title: 'Fast Free Shipping',
    text: 'On every order over $50, delivered in 2 days.',
  },
  {
    icon: Headset,
    title: '24/7 Supports',
    text: 'Real sneakerheads on chat, any hour of the day.',
  },
  {
    icon: RotateCcw,
    title: 'Easy Money Back',
    text: '30-day no-questions-asked return guarantee.',
  },
  {
    icon: Store,
    title: 'Store Search',
    text: 'Find a Shoesvibe pickup counter near you.',
  },
]

export default function Features() {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-zinc-950 text-white shadow-sm transition-all duration-300 group-hover:-rotate-6 group-hover:bg-crimson">
              <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-[15px] font-extrabold tracking-tight">{title}</h3>
              <p className="mt-1 text-sm leading-snug text-zinc-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
