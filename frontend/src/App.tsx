
import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Menu,
  QrCode,
  ShieldCheck,
  Ticket,
  X,
  BarChart3,
} from 'lucide-react'

const events = [
  {
    title: 'The Campus Experience',
    category: 'Entertainment',
    date: 'DEC 12, 2026',
    location: 'Accra, Ghana',
    price: 'GH₵ 50',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900',
  },
  {
    title: 'Tech Innovation Summit',
    category: 'Technology',
    date: 'DEC 18, 2026',
    location: 'Accra, Ghana',
    price: 'GH₵ 100',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900',
  },
  {
    title: 'The Creative Connect',
    category: 'Networking',
    date: 'JAN 08, 2027',
    location: 'Accra, Ghana',
    price: 'GH₵ 35',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
              <Ticket size={22} />
            </div>
            <span className="text-2xl font-black tracking-tight">
              event<span className="text-violet-600">pay</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            <a href="#events" className="text-sm font-medium text-slate-600 hover:text-violet-600">Explore events</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-violet-600">How it works</a>
            <a href="#organizers" className="text-sm font-medium text-slate-600 hover:text-violet-600">For organizers</a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl px-5 py-3 text-sm font-semibold hover:bg-slate-50">
              Log in
            </button>
            <button className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
              Get started
            </button>
          </div>

          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="space-y-4 border-t border-slate-100 px-6 py-5 md:hidden">
            <a onClick={() => setMenuOpen(false)} href="#events" className="block text-sm font-medium">Explore events</a>
            <a onClick={() => setMenuOpen(false)} href="#how-it-works" className="block text-sm font-medium">How it works</a>
            <a onClick={() => setMenuOpen(false)} href="#organizers" className="block text-sm font-medium">For organizers</a>
            <button className="w-full rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white">Get started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-violet-200">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Your events. Your people. One platform.
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Great events start with
              <span className="text-violet-400"> one ticket.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Discover events, secure your tickets and enjoy seamless payments.
              Or bring your own event to life with tools that make organizing easier.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#events" className="inline-flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-7 py-4 font-bold text-white transition hover:bg-violet-500">
                Explore events <ArrowRight size={19} />
              </a>
              <a href="#organizers" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                Create an event
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-7 text-sm text-slate-300">
              <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-violet-400" /> Secure payments</span>
              <span className="flex items-center gap-2"><QrCode size={18} className="text-violet-400" /> QR tickets</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-violet-400" /> Easy check-in</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-violet-600/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200"
                alt="People enjoying a live event"
                className="h-[420px] w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Your next experience</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">Unforgettable moments.</h3>
                  </div>
                  <div className="rounded-xl bg-violet-100 p-3 text-violet-600">
                    <Ticket size={25} />
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-500">Find your people. Find your event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-bold uppercase tracking-widest text-violet-600">Discover experiences</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Events worth showing up for.</h2>
            <p className="mt-3 text-slate-500">Find your next experience and secure your spot.</p>
          </div>
          <a href="#events" className="inline-flex items-center gap-2 font-bold text-violet-600 hover:text-violet-700">
            View all events <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-violet-700">
                  {event.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <p className="flex items-center gap-2"><CalendarDays size={17} /> {event.date}</p>
                  <p className="flex items-center gap-2"><MapPin size={17} /> {event.location}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-xs text-slate-400">Tickets from</p>
                    <p className="text-xl font-black">{event.price}</p>
                  </div>
                  <button className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-700">
                    Get ticket
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-400">These are sample events for the initial interface, not live listings.</p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-violet-600">Simple by design</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">From discovery to entry.</h2>
            <p className="mt-4 text-slate-500">Everything you need for a smoother event experience.</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: CalendarDays, title: 'Find your event', text: 'Explore events and choose the experience you want to attend.' },
              { icon: Ticket, title: 'Book your ticket', text: 'Select your ticket and complete checkout through supported payments.' },
              { icon: QrCode, title: 'Show up and scan', text: 'Receive a digital ticket and have your QR code verified at entry.' },
            ].map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                  <item.icon size={27} />
                </div>
                <p className="mt-7 text-sm font-bold text-violet-600">STEP 0{index + 1}</p>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section id="organizers" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 rounded-3xl bg-violet-600 p-8 text-white md:grid-cols-2 md:p-14">
          <div>
            <p className="font-bold uppercase tracking-widest text-violet-200">For event organizers</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">You create the experience. We simplify the rest.</h2>
            <p className="mt-6 max-w-lg leading-8 text-violet-100">
              Create events, manage ticket sales, track revenue and validate attendees from one place.
            </p>
            <button className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-700 transition hover:bg-violet-50">
              Start organizing <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-6">
              <BarChart3 size={30} />
              <h3 className="mt-5 font-bold">Sales insights</h3>
              <p className="mt-2 text-sm leading-6 text-violet-100">Monitor ticket sales and event performance.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <QrCode size={30} />
              <h3 className="mt-5 font-bold">QR validation</h3>
              <p className="mt-2 text-sm leading-6 text-violet-100">Verify tickets and manage event entry.</p>
            </div>
            <div className="col-span-2 rounded-2xl bg-white/10 p-6">
              <ShieldCheck size={30} />
              <h3 className="mt-5 font-bold">Payment management</h3>
              <p className="mt-2 text-sm leading-6 text-violet-100">Keep track of payments and transactions in one dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <a href="#" className="text-2xl font-black">event<span className="text-violet-600">pay</span></a>
            <p className="mt-2 text-sm text-slate-500">Making every event easier to experience.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#events" className="hover:text-violet-600">Explore</a>
            <a href="#how-it-works" className="hover:text-violet-600">How it works</a>
            <a href="#organizers" className="hover:text-violet-600">Organizers</a>
          </div>
          <p className="text-sm text-slate-400">© 2026 EventPay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
