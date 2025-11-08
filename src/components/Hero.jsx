import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Build bold digital experiences with Stackly
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            We are a creative tech agency crafting websites, products, and growth engines for ambitious brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 font-medium hover:opacity-90">
              Explore services
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-black px-6 py-3 font-medium hover:bg-black hover:text-white">
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
