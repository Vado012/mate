import { useState } from 'react'
import { Camera, MapPin, Edit3, Heart, Star, X } from 'lucide-react'

const INTERESTS = ['Hiking', 'Coffee', 'Books', 'Travel', 'Music', 'Cooking', 'Yoga', 'Art', 'Gaming', 'Movies']

export default function Profile() {
  const [bio, setBio] = useState('Coffee lover, bookworm, and weekend hiker. Looking for someone to explore the city with.')
  const [editing, setEditing] = useState(false)
  const [selected, setSelected] = useState(['Hiking', 'Coffee', 'Books'])

  const toggleInterest = (i) => setSelected(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i])

  return (
    <div className="min-h-screen pt-20 bg-gray-50 pb-10">
      <div className="max-w-lg mx-auto px-4">
        {/* Cover + Avatar */}
        <div className="relative mb-16">
          <div className="h-40 bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl" />
          <div className="absolute -bottom-12 left-6 flex items-end gap-4">
            <div className="relative">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="You"
                className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg" />
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-md hover:bg-pink-600 transition-colors">
                <Camera size={14} />
              </button>
            </div>
          </div>
          <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 flex items-center gap-1.5 hover:bg-white transition-all">
            <Edit3 size={14} /> Edit Cover
          </button>
        </div>

        {/* Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Sofia, 25</h2>
              <p className="text-gray-400 text-sm flex items-center gap-1 mt-0.5"><MapPin size={13} /> New York, NY</p>
            </div>
            <button onClick={() => setEditing(!editing)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-pink-200 text-pink-500 rounded-full text-sm hover:bg-pink-50 transition-all">
              <Edit3 size={14} /> Edit
            </button>
          </div>

          {editing ? (
            <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3}
              className="w-full text-sm text-gray-600 border border-pink-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-100 resize-none" />
          ) : (
            <p className="text-gray-600 text-sm">{bio}</p>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { icon: <Heart className="text-pink-500" size={18} fill="currentColor" />, val: '48', label: 'Likes' },
            { icon: <Star className="text-yellow-400" size={18} fill="currentColor" />, val: '12', label: 'Super Likes' },
            { icon: <X className="text-gray-400" size={18} />, val: '5', label: 'Matches' },
          ].map(({ icon, val, label }) => (
            <div key={label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
              <div className="flex justify-center mb-1">{icon}</div>
              <p className="text-xl font-bold text-gray-800">{val}</p>
              <p className="text-xs text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map(i => (
              <button key={i} onClick={() => toggleInterest(i)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${selected.includes(i) ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-pink-50 hover:text-pink-500'}`}>
                {i}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
