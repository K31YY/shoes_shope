import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  Footprints,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { 
    label: 'Shoes', 
    href: '/', 
    dropdown: [
      { name: 'Running', href: '/shoes/running' },
      { name: 'Casual', href: '/shoes/casual' },
      { name: 'Formal', href: '/shoes/formal' },
      { name: 'Trail', href: '/shoes/trail' },
    ] 
  },
  { label: 'Sneakers', href: '/' },
  { label: 'Boots', href: '/' },
  { label: 'Contact', href: '/' },
  { label: 'Blogs', href: '/' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-crimson text-white shadow-sm shadow-crimson/30">
        <Footprints className="h-5 w-5 -rotate-12" strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="font-display text-2xl font-black lowercase tracking-tight">
        shoes<span className="text-crimson">vibe</span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')

  const searchField = (mobile = false) => (
    <label
      className={
        mobile
          ? 'flex h-11 w-full items-center gap-2 rounded-full bg-zinc-100 px-4'
          : 'hidden h-10 w-44 items-center gap-2 rounded-full bg-zinc-100 px-4 transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-crimson/40 md:flex lg:w-60'
      }
    >
      <Search className="h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products…"
        aria-label="Search products"
        className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
      />
    </label>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:h-[76px] lg:px-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                to={link.href}
                className="flex items-center gap-1 border-b-2 border-transparent py-1 text-sm font-bold text-zinc-700 transition-colors hover:border-crimson hover:text-crimson"
              >
                {link.label}
                {link.dropdown && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <ul className="invisible absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <li className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl shadow-zinc-900/10">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-crimson"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </li>
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {searchField(false)}
          <button
            type="button"
            aria-label="Account"
            className="hidden h-10 w-10 place-items-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-crimson sm:grid"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="hidden h-10 w-10 place-items-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-crimson sm:grid"
          >
            <Heart className="h-5 w-5" />
          </button>
          <Link
            to="/"
            className="relative flex h-10 items-center gap-2 rounded-full px-3 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-crimson"
          >
            <span className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-2 -top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full bg-crimson text-[10px] font-bold text-white">
                3
              </span>
            </span>
            <span className="hidden text-sm font-bold xl:inline">My Cart</span>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="grid h-10 w-10 place-items-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="animate-fadeUp border-t border-zinc-100 bg-white px-4 pb-6 pt-4 lg:hidden"
        >
          {searchField(true)}
          <ul className="mt-3 divide-y divide-zinc-100">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-display text-base font-bold tracking-wide text-zinc-800 hover:text-crimson"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <ul className="pl-4 pb-2 space-y-2">
                    {link.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-sm font-medium text-zinc-500 hover:text-crimson"
                        >
                          ↳ {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}