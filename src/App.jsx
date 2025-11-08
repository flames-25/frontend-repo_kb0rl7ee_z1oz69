import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Stackly — All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with care • Let’s talk: hello@stackly.agency</div>
        </div>
      </footer>
    </div>
  )
}

export default App
