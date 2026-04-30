import { Link, useLocation } from 'react-router-dom'
import { Heart, Flame, MessageCircle, User, LogIn } from 'lucide-react'

export default function Navbar() {
  const { pathname } = useLocation()
  const isAuth = pathname === '/login' || pathname === '/register'
  if (isAuth) return null

  const links = [
    { to: '/discover', icon: <Flame size={20} />, label: 'Discover' },
    { to: '/matches', icon: <MessageCircle size={20} />, label: 'Matches' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-pink-500 font-bold text-xl">
          <Heart fill="currentColor" size={24} />
          Mate
        </Link>
        <div className="flex items-center gap-1">
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
          <Link
            to="/login"
            className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-pink-300 text-pink-500 hover:bg-pink-500 hover:text-white transition-all"
          >
            <LogIn size={16} /> Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
