import { useState } from 'react'
import { Heart, Send, ArrowLeft } from 'lucide-react'

const MATCHES = [
  { id: 1, name: 'Sofia', age: 25, photo: 'https://randomuser.me/api/portraits/women/44.jpg', lastMsg: 'Hey! How are you? 😊', time: '2m', unread: 2 },
  { id: 2, name: 'Emma', age: 27, photo: 'https://randomuser.me/api/portraits/women/68.jpg', lastMsg: 'That sounds like fun!', time: '1h', unread: 0 },
  { id: 3, name: 'Mia', age: 24, photo: 'https://randomuser.me/api/portraits/women/90.jpg', lastMsg: 'Let\'s meet this weekend?', time: '3h', unread: 1 },
  { id: 4, name: 'Lucas', age: 28, photo: 'https://randomuser.me/api/portraits/men/32.jpg', lastMsg: 'I know a great place 🎵', time: '1d', unread: 0 },
]

const INITIAL_MSGS = {
  1: [{ from: 'them', text: 'Hey! How are you? 😊' }, { from: 'them', text: 'I saw you like hiking too!' }],
  2: [{ from: 'me', text: 'Hey Emma! Loved your profile' }, { from: 'them', text: 'That sounds like fun!' }],
  3: [{ from: 'them', text: 'Let\'s meet this weekend?' }],
  4: [{ from: 'me', text: 'Hey Lucas!' }, { from: 'them', text: 'I know a great place 🎵' }],
}

export default function Matches() {
  const [active, setActive] = useState(null)
  const [messages, setMessages] = useState(INITIAL_MSGS)
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    setMessages(m => ({ ...m, [active.id]: [...(m[active.id] || []), { from: 'me', text: input }] }))
    setInput('')
  }

  if (active) {
    const msgs = messages[active.id] || []
    return (
      <div className="min-h-screen pt-16 flex flex-col bg-gray-50">
        {/* Chat header */}
        <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm">
          <button onClick={() => setActive(null)} className="text-gray-400 hover:text-pink-500 transition-colors">
            <ArrowLeft size={22} />
          </button>
          <img src={active.photo} alt={active.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-gray-800">{active.name}, {active.age}</p>
            <p className="text-xs text-green-400">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          <div className="text-center">
            <span className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full inline-flex items-center gap-1">
              <Heart size={10} fill="currentColor" /> You matched with {active.name}!
            </span>
          </div>
          {msgs.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              {msg.from === 'them' && <img src={active.photo} alt="" className="w-7 h-7 rounded-full object-cover mr-2 self-end" />}
              <div className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm ${msg.from === 'me' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-br-sm' : 'bg-white text-gray-700 shadow-sm rounded-bl-sm'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white border-t border-gray-100 px-4 py-3 flex gap-3 items-center">
          <input
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder={`Message ${active.name}...`}
            className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          <button onClick={send} className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all">
            <Send size={16} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Matches</h2>
        <p className="text-gray-400 text-sm mb-6">{MATCHES.length} people liked you back</p>

        <div className="space-y-2">
          {MATCHES.map(match => (
            <button key={match.id} onClick={() => setActive(match)}
              className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-all text-left border border-gray-100">
              <div className="relative">
                <img src={match.photo} alt={match.name} className="w-14 h-14 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-800">{match.name}, {match.age}</p>
                  <span className="text-xs text-gray-400">{match.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{match.lastMsg}</p>
              </div>
              {match.unread > 0 && (
                <span className="w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {match.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
