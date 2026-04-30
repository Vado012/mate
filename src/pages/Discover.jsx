import { useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { Heart } from 'lucide-react'

const PROFILES = [
  { id: 1, name: 'Sofia', age: 25, location: 'New York, NY', bio: 'Coffee lover, bookworm, and weekend hiker. Looking for someone to explore the city with.', photo: 'https://randomuser.me/api/portraits/women/44.jpg', interests: ['Hiking', 'Books', 'Coffee'] },
  { id: 2, name: 'Emma', age: 27, location: 'Los Angeles, CA', bio: 'Yoga instructor by day, foodie by night. Let\'s try that new restaurant together!', photo: 'https://randomuser.me/api/portraits/women/68.jpg', interests: ['Yoga', 'Food', 'Travel'] },
  { id: 3, name: 'Mia', age: 24, location: 'Chicago, IL', bio: 'Artist and dreamer. I paint, you bring the wine?', photo: 'https://randomuser.me/api/portraits/women/90.jpg', interests: ['Art', 'Wine', 'Music'] },
  { id: 4, name: 'Lucas', age: 28, location: 'Austin, TX', bio: 'Software engineer who loves live music and tacos. Let\'s go to a concert!', photo: 'https://randomuser.me/api/portraits/men/32.jpg', interests: ['Music', 'Tech', 'Tacos'] },
  { id: 5, name: 'James', age: 30, location: 'Miami, FL', bio: 'Beach lover, surfer, and amateur chef. I\'ll cook if you bring dessert.', photo: 'https://randomuser.me/api/portraits/men/75.jpg', interests: ['Surfing', 'Cooking', 'Beach'] },
]

export default function Discover() {
  const [index, setIndex] = useState(0)
  const [liked, setLiked] = useState(null)

  const current = PROFILES[index]

  const next = (action) => {
    setLiked(action)
    setTimeout(() => {
      setLiked(null)
      setIndex(i => i + 1)
    }, 600)
  }

  if (index >= PROFILES.length) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-4">
          <Heart className="text-pink-500" fill="currentColor" size={36} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">You've seen everyone!</h2>
        <p className="text-gray-500">Check back later for new profiles.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center px-4">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Discover</h2>
        <p className="text-gray-400 text-sm">{PROFILES.length - index} profiles left</p>
      </div>

      <div className={`transition-all duration-300 ${liked === 'like' ? 'rotate-6 opacity-0' : liked === 'pass' ? '-rotate-6 opacity-0' : ''}`}>
        <ProfileCard
          profile={current}
          onLike={() => next('like')}
          onPass={() => next('pass')}
          onSuperLike={() => next('super')}
        />
      </div>

      {liked === 'like' && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-green-400 text-white text-4xl font-extrabold px-8 py-4 rounded-2xl rotate-[-15deg] border-4 border-white shadow-2xl">
            LIKE ❤️
          </div>
        </div>
      )}
      {liked === 'pass' && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-red-400 text-white text-4xl font-extrabold px-8 py-4 rounded-2xl rotate-[15deg] border-4 border-white shadow-2xl">
            NOPE ✕
          </div>
        </div>
      )}
    </div>
  )
}
