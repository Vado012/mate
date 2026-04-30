import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, Mail, Lock, User, Eye, EyeOff, Calendar } from 'lucide-react'

export default function Register() {
  const [show, setShow] = useState(false)
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', password: '', dob: '', gender: '', lookingFor: '' })
  const navigate = useNavigate()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-2xl mb-4">
            <Heart className="text-pink-500" fill="currentColor" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Create your account</h1>
          <p className="text-gray-500 text-sm mt-1">Step {step} of 2</p>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-6">
          {[1, 2].map(s => (
            <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? 'bg-pink-500' : 'bg-gray-200'}`} />
          ))}
        </div>

        <form className="space-y-4" onSubmit={e => { e.preventDefault(); navigate('/dashboard') }}>
          {step === 1 ? (
            <>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input name="name" placeholder="Full name" value={form.name} onChange={handle}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 text-sm" />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handle}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 text-sm" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input name="password" type={show ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={handle}
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 text-sm" />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <button type="button" onClick={() => setStep(2)}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-md">
                Continue
              </button>
            </>
          ) : (
            <>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input name="dob" type="date" value={form.dob} onChange={handle}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 text-sm text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">I am a...</p>
                <div className="grid grid-cols-3 gap-2">
                  {['Man', 'Woman', 'Other'].map(g => (
                    <button key={g} type="button" onClick={() => setForm({ ...form, gender: g })}
                      className={`py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${form.gender === g ? 'border-pink-500 bg-pink-50 text-pink-600' : 'border-gray-200 text-gray-500 hover:border-pink-300'}`}>
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Looking for...</p>
                <div className="grid grid-cols-3 gap-2">
                  {['Men', 'Women', 'Everyone'].map(g => (
                    <button key={g} type="button" onClick={() => setForm({ ...form, lookingFor: g })}
                      className={`py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${form.lookingFor === g ? 'border-pink-500 bg-pink-50 text-pink-600' : 'border-gray-200 text-gray-500 hover:border-pink-300'}`}>
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)}
                  className="flex-1 py-3 border-2 border-gray-200 text-gray-500 font-semibold rounded-xl hover:border-pink-300 transition-all">
                  Back
                </button>
                <button type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-md">
                  Create Account
                </button>
              </div>
            </>
          )}
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-500 font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
