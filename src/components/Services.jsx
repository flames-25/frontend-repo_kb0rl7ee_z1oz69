import { Code, PenTool, LineChart, Layers } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Fast, accessible, SEO-friendly websites built with modern stacks.'
  },
  {
    icon: Layers,
    title: 'Software Development',
    desc: 'Robust, scalable applications tailored to your business needs.'
  },
  {
    icon: LineChart,
    title: 'SEO & Digital Marketing',
    desc: 'Data-driven campaigns to grow traffic, leads, and revenue.'
  },
  {
    icon: PenTool,
    title: 'Product Design',
    desc: 'Human-centered UI/UX from idea to polished prototypes.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Services</h2>
          <p className="mt-4 text-gray-600">Everything you need to launch and scale your product.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-black/10 p-6 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-black text-white flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
