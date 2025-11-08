import { User } from 'lucide-react'

const team = [
  { name: 'Ava Patel', role: 'Product Designer' },
  { name: 'Liam Chen', role: 'Full‑stack Engineer' },
  { name: 'Noah Johnson', role: 'Growth Marketer' },
  { name: 'Sofia Garcia', role: 'Frontend Engineer' },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our team</h2>
          <p className="mt-4 text-gray-600">A multidisciplinary crew blending engineering, design, and growth.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-black/10 p-6 bg-white">
              <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center mb-4">
                <User className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="mt-1 text-gray-600 text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
