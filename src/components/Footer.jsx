import { Link, useLocation } from 'react-router-dom'
import { Heart, Mail, MapPin, Phone } from 'lucide-react'

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={17} height={17}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const hideOn = ['/login', '/register', '/dashboard', '/discover', '/matches', '/profile']

export default function Footer() {
  const { pathname } = useLocation()
  if (hideOn.includes(pathname)) return null

  return (
    <footer className="bg-gray-900 text-gray-400">

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-2 text-white font-bold text-2xl mb-4">
            <Heart fill="currentColor" className="text-pink-500" size={26} />
            Mate
          </Link>
          <p className="text-sm leading-relaxed mb-5">
            Connecting hearts across the world. Find meaningful relationships built on trust, compatibility, and genuine connection.
          </p>
          <div className="flex items-center gap-3">
            {[
                        { icon: <IconInstagram />, href: '#' },
            { icon: <IconTwitter />, href: '#' },
            { icon: <IconFacebook />, href: '#' },
            { icon: <IconYoutube />, href: '#' },
            ].map(({ icon, href }, i) => (
              <a key={i} href={href}
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {['About Us', 'Careers', 'Press', 'Blog', 'Partnerships'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-pink-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
          <ul className="space-y-2.5 text-sm">
            {['Help Center', 'Safety Tips', 'Community Guidelines', 'Cookie Policy', 'Privacy Policy', 'Terms of Service'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-pink-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-pink-400" />
              <span>123 Love Lane, San Francisco, CA 94102, USA</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="flex-shrink-0 text-pink-400" />
              <a href="mailto:hello@mateapp.com" className="hover:text-pink-400 transition-colors">hello@mateapp.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="flex-shrink-0 text-pink-400" />
              <span>+1 (800) 628-3462</span>
            </li>
          </ul>

          {/* App badges */}
          <div className="mt-5 flex flex-col gap-2">
            <a href="#" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl px-3 py-2">
              <span className="text-lg">🍎</span>
              <div>
                <p className="text-white text-xs font-semibold leading-tight">Download on the</p>
                <p className="text-white text-sm font-bold leading-tight">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl px-3 py-2">
              <span className="text-lg">▶️</span>
              <div>
                <p className="text-white text-xs font-semibold leading-tight">Get it on</p>
                <p className="text-white text-sm font-bold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Mate. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-gray-500">
            Designed & built with <Heart size={12} fill="currentColor" className="text-pink-500" /> by{' '}
            <span className="text-white font-semibold">Okamkpa Chinedu</span>
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
