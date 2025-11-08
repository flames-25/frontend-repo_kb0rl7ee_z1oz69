import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Stackly logo"
              className="h-8 w-8 rounded-md object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span className="text-xl font-semibold tracking-tight">Stackly</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-black transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 font-medium hover:opacity-90">
              Get a quote
            </a>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 hover:text-black"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 font-medium">
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
