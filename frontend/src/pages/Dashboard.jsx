import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Activity, CreditCard, QrCode, Dumbbell, LogOut } from 'lucide-react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
                        <p className="text-gray-400">Let's crush your goals today!</p>
                    </div>
                    <button
                        onClick={logout}
                        className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <LogOut className="w-6 h-6 text-red-400" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Membership Card */}
                    <Link to="/plans" className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
                        <div className="flex items-center justify-between mb-4">
                            <CreditCard className="w-8 h-8 text-white/80" />
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                {user?.membership?.isActive ? 'Active' : 'Inactive'}
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Membership</h2>
                        <p className="text-blue-100">Manage your plan and payments</p>
                    </Link>

                    {/* QR Code Card */}
                    <Link to="/qr-code" className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
                        <div className="flex items-center justify-between mb-4">
                            <QrCode className="w-8 h-8 text-white/80" />
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">Check-in</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Gym Access</h2>
                        <p className="text-purple-100">Scan your QR code at entrance</p>
                    </Link>

                    {/* Workout Log Card */}
                    <Link to="/workout-log" className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
                        <div className="flex items-center justify-between mb-4">
                            <Dumbbell className="w-8 h-8 text-white/80" />
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">Log</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Workout Logger</h2>
                        <p className="text-orange-100">Track your sets, reps, and gains</p>
                    </Link>

                    {/* Progress Card */}
                    <Link to="/" className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
                        <div className="flex items-center justify-between mb-4">
                            <Activity className="w-8 h-8 text-white/80" />
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">Stats</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Gamification</h2>
                        <p className="text-green-100">View streaks, badges, and leaderboard</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
