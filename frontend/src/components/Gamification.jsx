import React from 'react';
import { Trophy, Flame, Medal, Star, Crown, TrendingUp, Award, Target } from 'lucide-react';

const Gamification = () => {
  // Dummy Data
  const userStats = {
    streak: 12,
    points: 2450,
    level: 5,
    nextLevelPoints: 3000,
    weeklyGoal: { current: 3, target: 5 }
  };

  const badges = [
    { id: 1, name: 'Early Bird', icon: <Star className="w-6 h-6 text-yellow-500" />, description: 'Completed 5 workouts before 7 AM', earned: true },
    { id: 2, name: 'Streak Master', icon: <Flame className="w-6 h-6 text-orange-500" />, description: 'Maintain a 10-day streak', earned: true },
    { id: 3, name: 'Heavy Lifter', icon: <Target className="w-6 h-6 text-red-500" />, description: 'Lift 1000kg total volume', earned: false },
    { id: 4, name: 'Yoga Zen', icon: <Award className="w-6 h-6 text-purple-500" />, description: 'Complete 10 yoga sessions', earned: false },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah J.', points: 5200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { rank: 2, name: 'Mike T.', points: 4850, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
    { rank: 3, name: 'Alex R.', points: 4600, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
    { rank: 4, name: 'You', points: 2450, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You' },
    { rank: 5, name: 'Emily W.', points: 2100, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Your Progress
            </h1>
            <p className="text-gray-400 mt-2">Keep pushing your limits!</p>
          </div>
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-2xl border border-gray-700 shadow-lg">
            <div className="flex items-center gap-2">
              <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Current Streak</p>
                <p className="text-2xl font-bold">{userStats.streak} Days</p>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-700 mx-2"></div>
            <div className="flex items-center gap-2">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Total Points</p>
                <p className="text-2xl font-bold">{userStats.points}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Stats & Badges */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Level Progress */}
            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">Level {userStats.level}</h2>
                    <p className="text-gray-400">Intermediate Athlete</p>
                  </div>
                  <span className="text-sm font-mono text-blue-400">{userStats.points} / {userStats.nextLevelPoints} XP</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(userStats.points / userStats.nextLevelPoints) * 100}%` }}
                  ></div>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  {userStats.nextLevelPoints - userStats.points} points to reach Level {userStats.level + 1}
                </p>
              </div>
            </div>

            {/* Badges Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Medal className="text-purple-500" /> Achievements
                </h2>
                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">View All</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {badges.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                      badge.earned 
                        ? 'bg-gray-800 border-gray-700 shadow-lg' 
                        : 'bg-gray-800/50 border-gray-800 opacity-60 grayscale'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${badge.earned ? 'bg-gray-700' : 'bg-gray-800'}`}>
                        {badge.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{badge.name}</h3>
                        <p className="text-sm text-gray-400 leading-snug">{badge.description}</p>
                        {badge.earned && <span className="inline-block mt-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Earned</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Leaderboard */}
          <div className="bg-gray-800 rounded-3xl p-6 border border-gray-700 shadow-xl h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Crown className="text-yellow-500" /> Leaderboard
              </h2>
              <span className="text-xs font-bold bg-gray-700 px-2 py-1 rounded text-gray-300">Weekly</span>
            </div>
            
            <div className="space-y-4">
              {leaderboard.map((user, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                    user.name === 'You' 
                      ? 'bg-blue-600/20 border border-blue-500/50' 
                      : 'hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 flex items-center justify-center font-bold rounded-full ${
                      index === 0 ? 'bg-yellow-500/20 text-yellow-500' :
                      index === 1 ? 'bg-gray-400/20 text-gray-400' :
                      index === 2 ? 'bg-orange-500/20 text-orange-500' :
                      'text-gray-500'
                    }`}>
                      {user.rank}
                    </div>
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full bg-gray-700" />
                    <span className={`font-medium ${user.name === 'You' ? 'text-blue-400' : ''}`}>
                      {user.name}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-gray-300">{user.points}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-medium transition-colors text-sm">
              View Full Leaderboard
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gamification;
