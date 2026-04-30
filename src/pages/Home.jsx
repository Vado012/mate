import { Link } from 'react-router-dom'
import { Heart, Flame, Shield, Zap } from 'lucide-react'

const features = [
  { icon: <Flame className="text-orange-400" size={28} />, title: 'Smart Matching', desc: 'Our algorithm finds people who truly vibe with you.' },
  { icon: <Shield className="text-blue-400" size={28} />, title: 'Safe & Secure', desc: 'Your privacy is our top priority. Always.' },
  { icon: <Zap className="text-yellow-400" size={28} />, title: 'Instant Connect', desc: 'Match and chat in real time, no delays.' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Heart size={14} fill="currentColor" /> Find your person today
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Love starts with a<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500"> single match</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          Mate connects real people looking for real connections. Swipe, match, and start your story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-300 hover:scale-105 transition-all">
            Get Started — It's Free
          </Link>
          <Link to="/discover" className="px-8 py-4 border-2 border-pink-200 text-pink-500 font-semibold rounded-full hover:bg-pink-50 transition-all">
            Browse Profiles
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-pink-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center px-4">
          {[['2M+', 'Active Users'], ['500K+', 'Matches Made'], ['98%', 'Satisfaction']].map(([num, label]) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-pink-500">{num}</p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why choose Mate?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 hover:shadow-md hover:-translate-y-1 transition-all text-center">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4">{icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-500">
        <h2 className="text-4xl font-extrabold text-white mb-4">Ready to find your match?</h2>
        <p className="text-pink-100 mb-8">Join thousands of people who found love on Mate.</p>
        <Link to="/register" className="px-10 py-4 bg-white text-pink-500 font-bold rounded-full hover:scale-105 transition-all shadow-lg">
          Create Free Account
        </Link>
      </section>
    </div>
  )
}
