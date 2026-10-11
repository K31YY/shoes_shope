import { BadgePercent } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-[11px] font-medium leading-snug sm:text-xs md:text-[13px]">
        <BadgePercent className="hidden h-4 w-4 shrink-0 text-crimson sm:block" aria-hidden="true" />
        <span>
          Limited-Time Offer: 1st Time Buyer? Use{' '}
          <span className="mx-0.5 inline-block rounded-md border border-white/25 bg-white/10 px-2 py-0.5 font-display font-bold tracking-widest text-white">
            ONE
          </span>{' '}
          Promocode To Instantly Get <span className="font-bold text-white">50% Off!</span>
        </span>
      </p>
    </div>
  )
}
