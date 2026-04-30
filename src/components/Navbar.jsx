import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Heart, Flame, MessageCircle, User, LogIn, Menu, X, ChevronLeft, LayoutDashboard } from 'lucide-react'

const publicLinks = [
  { to: '/discover', icon: <Flame size={20} />, label: 'Discover' },
  { to: '/matches', icon: <MessageCircle size={20} />, label: 'Matches' },
  { to: '/profile', icon: <User size={20} />, label: 'Profile' },
]

const dashboardLinks = [
  { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
  { to: '/discover', icon: <Flame size={20} />, label: 'Discover' },
  { to: '/matches', icon: <MessageCircle size={20} />, label: 'Matches' },
  { to: '/profile', icon: <User size={20} />, label: 'Profile' },
]

const backLabels = {
  '/discover': 'Dashboard',
  '/matches': 'Dashboard',
  '/profile': 'Dashboard',
  '/login': null,
  '/register': null,
}

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname])

  const isAuth = pathname === '/login' || pathname === '/register'
  if (isAuth) return null

  const isHome = pathname === '/'
  const isDashboard = pathname.startsWith('/dashboard') || pathname === '/discover' || pathname === '/matches' || pathname === '/profile'
  const links = isDashboard ? dashboardLinks : publicLinks
  const backLabel = backLabels[pathname]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Left: back button or logo */}
          <div className="flex items-center gap-2">
            {!isHome && backLabel && (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-medium text-sm mr-1 transition-colors"
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">{backLabel}</span>
              </button>
            )}
            <Link to="/" className="flex items-center gap-2 text-pink-500 font-bold text-xl">
              <Heart fill="currentColor" size={24} />
              <span>Mate</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  pathname === to
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-500 hover:bg-pink-50 hover:text-pink-500'
                }`}
              >
                {icon} {label}
              </Link>
            ))}
            {!isDashboard && (
              <Link
                to="/login"
                className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-pink-300 text-pink-500 hover:bg-pink-500 hover:text-white transition-all"
              >
                <LogIn size={16} /> Login
              </Link>
            )}
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 rounded-xl text-gray-500 hover:bg-pink-50 hover:text-pink-500 transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-4 pt-1 flex flex-col gap-1 bg-white/95 border-t border-pink-50">
            {links.map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === to
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                }`}
              >
                {icon} {label}
              </Link>
            ))}
            {!isDashboard && (
              <Link
                to="/login"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium border border-pink-200 text-pink-500 hover:bg-pink-500 hover:text-white transition-all mt-1"
              >
                <LogIn size={16} /> Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
