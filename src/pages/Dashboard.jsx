import { Link } from 'react-router-dom'
import { Heart, Flame, MessageCircle, User, Star, TrendingUp, Bell, Settings, ChevronRight, MapPin } from 'lucide-react'

const RECENT_MATCHES = [
  { id: 1, name: 'Sofia', age: 25, photo: 'https://randomuser.me/api/portraits/women/44.jpg', location: 'New York', online: true },
  { id: 2, name: 'Emma', age: 27, photo: 'https://randomuser.me/api/portraits/women/68.jpg', location: 'Los Angeles', online: true },
  { id: 3, name: 'Mia', age: 24, photo: 'https://randomuser.me/api/portraits/women/90.jpg', location: 'Chicago', online: false },
  { id: 4, name: 'Lucas', age: 28, photo: 'https://randomuser.me/api/portraits/men/32.jpg', location: 'Austin', online: true },
]

const SUGGESTED = [
  { id: 5, name: 'Ava', age: 26, photo: 'https://randomuser.me/api/portraits/women/22.jpg', location: 'Boston, MA', interests: ['Travel', 'Yoga'], match: 92 },
  { id: 6, name: 'Lily', age: 23, photo: 'https://randomuser.me/api/portraits/women/55.jpg', location: 'Seattle, WA', interests: ['Music', 'Art'], match: 87 },
  { id: 7, name: 'Noah', age: 29, photo: 'https://randomuser.me/api/portraits/men/45.jpg', location: 'Denver, CO', interests: ['Hiking', 'Coffee'], match: 84 },
]

const ACTIVITY = [
  { id: 1, photo: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Sofia', action: 'liked your profile', time: '2m ago', type: 'like' },
  { id: 2, photo: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Emma', action: 'sent you a message', time: '15m ago', type: 'message' },
  { id: 3, photo: 'https://randomuser.me/api/portraits/women/90.jpg', name: 'Mia', action: 'super liked you', time: '1h ago', type: 'superlike' },
  { id: 4, photo: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Lucas', action: 'matched with you', time: '3h ago', type: 'match' },
]

const activityIcon = (type) => ({
  like: <Heart size={14} fill="currentColor" className="text-pink-500" />,
  message: <MessageCircle size={14} className="text-blue-400" />,
  superlike: <Star size={14} fill="currentColor" className="text-yellow-400" />,
  match: <Heart size={14} fill="currentColor" className="text-green-400" />,
}[type])

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Good morning, Sofia 👋</h1>
            <p className="text-gray-400 text-sm mt-0.5">Here's what's happening today</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-500 hover:text-pink-500 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full" />
            </button>
            <Link to="/profile" className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-500 hover:text-pink-500 transition-colors">
              <Settings size={20} />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { icon: <Heart size={20} fill="currentColor" className="text-pink-500" />, label: 'Likes', val: '48', bg: 'bg-pink-50', change: '+12 today' },
            { icon: <MessageCircle size={20} className="text-blue-400" />, label: 'Messages', val: '7', bg: 'bg-blue-50', change: '3 unread' },
            { icon: <Star size={20} fill="currentColor" className="text-yellow-400" />, label: 'Super Likes', val: '12', bg: 'bg-yellow-50', change: '+2 today' },
            { icon: <TrendingUp size={20} className="text-green-400" />, label: 'Profile Views', val: '134', bg: 'bg-green-50', change: '+28 today' },
          ].map(({ icon, label, val, bg, change }) => (
            <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>{icon}</div>
              <p className="text-2xl font-extrabold text-gray-800">{val}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              <p className="text-xs text-green-500 font-medium mt-1">{change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Left col */}
          <div className="lg:col-span-2 space-y-5">

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h2 className="font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-3 gap-3">
                <Link to="/discover" className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl text-white hover:opacity-90 hover:scale-105 transition-all">
                  <Flame size={24} />
                  <span className="text-xs font-semibold">Discover</span>
                </Link>
                <Link to="/matches" className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl text-white hover:opacity-90 hover:scale-105 transition-all">
                  <MessageCircle size={24} />
                  <span className="text-xs font-semibold">Messages</span>
                </Link>
                <Link to="/profile" className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl text-white hover:opacity-90 hover:scale-105 transition-all">
                  <User size={24} />
                  <span className="text-xs font-semibold">Profile</span>
                </Link>
              </div>
            </div>

            {/* Suggested Matches */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-800">Suggested for You</h2>
                <Link to="/discover" className="text-pink-500 text-sm font-medium flex items-center gap-0.5 hover:underline">
                  See all <ChevronRight size={15} />
                </Link>
              </div>
              <div className="space-y-3">
                {SUGGESTED.map(p => (
                  <div key={p.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <img src={p.photo} alt={p.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-800 text-sm">{p.name}, {p.age}</p>
                        <span className="text-xs bg-green-100 text-green-600 font-semibold px-2 py-0.5 rounded-full">{p.match}% match</span>
                      </div>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5"><MapPin size={11} />{p.location}</p>
                      <div className="flex gap-1 mt-1">
                        {p.interests.map(i => <span key={i} className="text-xs bg-pink-50 text-pink-500 px-2 py-0.5 rounded-full">{i}</span>)}
                      </div>
                    </div>
                    <button className="w-9 h-9 flex-shrink-0 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all">
                      <Heart size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right col */}
          <div className="space-y-5">

            {/* Recent Matches */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-800">Recent Matches</h2>
                <Link to="/matches" className="text-pink-500 text-sm font-medium flex items-center gap-0.5 hover:underline">
                  All <ChevronRight size={15} />
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {RECENT_MATCHES.map(m => (
                  <Link to="/matches" key={m.id} className="flex flex-col items-center gap-1.5 group">
                    <div className="relative">
                      <img src={m.photo} alt={m.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-transparent group-hover:ring-pink-400 transition-all" />
                      {m.online && <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />}
                    </div>
                    <p className="text-xs text-gray-600 font-medium truncate w-full text-center">{m.name}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h2 className="font-bold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {ACTIVITY.map(a => (
                  <div key={a.id} className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <img src={a.photo} alt={a.name} className="w-9 h-9 rounded-full object-cover" />
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                        {activityIcon(a.type)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 leading-tight">
                        <span className="font-semibold">{a.name}</span> {a.action}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile completion */}
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-5 text-white">
              <p className="font-bold mb-1">Complete your profile</p>
              <p className="text-pink-100 text-xs mb-3">You're 70% done. Add more to get better matches!</p>
              <div className="w-full bg-white/30 rounded-full h-2 mb-3">
                <div className="bg-white h-2 rounded-full w-[70%]" />
              </div>
              <Link to="/profile" className="inline-block text-xs font-semibold bg-white text-pink-500 px-4 py-1.5 rounded-full hover:scale-105 transition-all">
                Finish Profile
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
