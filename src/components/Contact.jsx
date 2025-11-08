import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sent! We will get back to you shortly.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something great</h2>
            <p className="mt-4 text-gray-600">Tell us about your project, timeline, and goals. We’ll reply within 24 hours.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-gray-700">
              <Mail className="h-5 w-5" /> hello@stackly.agency
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 p-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Budget</label>
                <select className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Under $5k</option>
                  <option>$5k - $15k</option>
                  <option>$15k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Project details</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-medium hover:opacity-90">
              <Send className="h-4 w-4" /> Send request
            </button>
            {status && <p className="mt-3 text-green-600 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
