import { Heart, X, Star } from 'lucide-react'

export default function ProfileCard({ profile, onLike, onPass, onSuperLike, compact = false }) {
  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-2xl bg-white ${compact ? 'w-full' : 'w-80 h-[480px]'}`}>
      <img
        src={profile.photo}
        alt={profile.name}
        className={`w-full object-cover ${compact ? 'h-48' : 'h-full'}`}
      />
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5`}>
        <h3 className="text-white text-2xl font-bold">{profile.name}, {profile.age}</h3>
        <p className="text-white/80 text-sm">{profile.location}</p>
        {profile.bio && <p className="text-white/70 text-xs mt-1 line-clamp-2">{profile.bio}</p>}
        <div className="flex flex-wrap gap-1 mt-2">
          {profile.interests?.map(i => (
            <span key={i} className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">{i}</span>
          ))}
        </div>
      </div>
      {!compact && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 mt-4">
          <button onClick={onPass} className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-red-400 hover:bg-red-50 hover:scale-110 transition-all">
            <X size={24} />
          </button>
          <button onClick={onSuperLike} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-400 hover:bg-blue-50 hover:scale-110 transition-all">
            <Star size={20} />
          </button>
          <button onClick={onLike} className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-green-400 hover:bg-green-50 hover:scale-110 transition-all">
            <Heart size={24} />
          </button>
        </div>
      )}
    </div>
  )
}
