import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-2xl mb-4">
            <Heart className="text-pink-500" fill="currentColor" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to continue your journey</p>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              name="email" type="email" placeholder="Email address" value={form.email} onChange={handle}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 text-sm"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              name="password" type={show ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={handle}
              className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 text-sm"
            />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="text-right">
            <a href="#" className="text-pink-500 text-sm hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-md">
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-pink-500 font-semibold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
