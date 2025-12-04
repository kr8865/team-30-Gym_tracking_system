import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Dumbbell, TrendingUp, QrCode, Book, Users, Activity, Award, Flame } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import {
  WeightProgressChart,
  StrengthProgressChart,
  WeeklyVolumeChart,
  AttendanceHeatmap,
} from "../../components/member/ProgressCharts";

const MemberDashboard = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy data
  const weightData = [
    { date: 'Jan 1', weight: 85 },
    { date: 'Jan 8', weight: 84.5 },
    { date: 'Jan 15', weight: 84 },
    { date: 'Jan 22', weight: 83.2 },
    { date: 'Jan 29', weight: 82.8 },
    { date: 'Feb 5', weight: 82 },
    { date: 'Feb 12', weight: 81.5 },
    { date: 'Feb 19', weight: 81 },
    { date: 'Feb 26', weight: 80.2 },
    { date: 'Mar 5', weight: 79.8 },
  ];

  const strengthData = [
    { week: 'Week 1', bench: 80, squat: 120, deadlift: 140 },
    { week: 'Week 2', bench: 82, squat: 122, deadlift: 142 },
    { week: 'Week 3', bench: 85, squat: 125, deadlift: 145 },
    { week: 'Week 4', bench: 87, squat: 128, deadlift: 150 },
    { week: 'Week 5', bench: 90, squat: 132, deadlift: 155 },
    { week: 'Week 6', bench: 92, squat: 135, deadlift: 160 },
    { week: 'Week 7', bench: 95, squat: 138, deadlift: 165 },
    { week: 'Week 8', bench: 98, squat: 142, deadlift: 170 },
  ];

  const volumeData = [
    { day: 'Monday', volume: 12000 },
    { day: 'Tuesday', volume: 14500 },
    { day: 'Wednesday', volume: 13200 },
    { day: 'Thursday', volume: 15800 },
    { day: 'Friday', volume: 16200 },
    { day: 'Saturday', volume: 18500 },
    { day: 'Sunday', volume: 8900 },
  ];

  const attendanceData = Array.from({ length: 30 }, (_, i) => ({
    date: `2024-03-${i + 1}`,
    attended: Math.random() > 0.1 ? 1 : 0,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stats = [
    { icon: TrendingUp, label: 'Weight Lost', value: '5.2', unit: 'kg', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
    { icon: Dumbbell, label: 'Bench Max', value: '98', unit: 'kg', color: 'from-red-500 to-red-600', bgColor: 'bg-red-50' },
    { icon: Calendar, label: 'Streak', value: '12', unit: 'days', color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
    { icon: Flame, label: 'Calories', value: '45K', unit: 'kcal', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
              Welcome Back, {currentUser?.email?.split('@')[0]}! 💪
            </h1>
            <p className="text-xl text-white/90">
              Your fitness dashboard - track every step of your journey
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12"
      >
        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ translateY: -8, scale: 1.02 }}
                className={`${stat.bgColor} rounded-3xl p-8 shadow-xl border-2 border-white transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>
                <p className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-black text-gray-900">{stat.value}</p>
                  <p className="text-xl font-bold text-gray-500">{stat.unit}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: QrCode, title: 'Check-In', desc: 'Scan QR at gym entrance', gradient: 'from-indigo-500 to-purple-500' },
              { icon: Dumbbell, title: 'Log Workout', desc: 'Record your training session', gradient: 'from-purple-500 to-pink-500' },
              { icon: Users, title: 'Book Trainer', desc: 'Schedule a personal session', gradient: 'from-pink-500 to-red-500' },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-gray-100 group"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${action.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={40} />
                  </div>
                  <h3 className="font-black text-2xl mb-3 text-gray-900">{action.title}</h3>
                  <p className="text-gray-600 text-lg">{action.desc}</p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'progress', label: 'Progress Charts', icon: TrendingUp },
              { id: 'workouts', label: 'My Workouts', icon: Book },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/50 scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Area */}
        {activeTab === 'overview' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-xl p-10 border-2 border-white">
              <h2 className="text-3xl font-black mb-8 text-gray-900">Your Progress Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: 'Total Calories Burned', value: '45,320', unit: 'kcal', change: '+12%', icon: Flame },
                  { label: 'Average Session Duration', value: '58', unit: 'min', change: '+8%', icon: Activity },
                  { label: 'Personal Records', value: '8', unit: 'broken', change: 'New!', icon: Award },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-l-4 border-indigo-600">
                      <Icon className="text-indigo-600 mb-4" size={32} />
                      <p className="text-gray-600 text-sm font-bold uppercase tracking-wide mb-2">{item.label}</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <p className="text-4xl font-black text-gray-900">{item.value}</p>
                        <p className="text-lg font-bold text-gray-500">{item.unit}</p>
                      </div>
                      <p className="text-sm text-green-600 font-bold bg-green-50 inline-block px-3 py-1 rounded-full">
                        {item.change}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'progress' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <WeightProgressChart data={weightData} />
            <StrengthProgressChart data={strengthData} />
            <WeeklyVolumeChart data={volumeData} />
            <AttendanceHeatmap data={attendanceData} />
          </motion.div>
        )}

        {activeTab === 'workouts' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-3xl shadow-xl p-10 border-2 border-white"
          >
            <h2 className="text-3xl font-black mb-8 text-gray-900">Recent Workouts</h2>
            <div className="space-y-6">
              {[
                { date: 'Today', exercise: 'Chest & Triceps', duration: '1h 15m', calories: '450', sets: '24' },
                { date: 'Yesterday', exercise: 'Back & Biceps', duration: '1h 10m', calories: '420', sets: '22' },
                { date: '2 days ago', exercise: 'Legs', duration: '1h 30m', calories: '580', sets: '28' },
                { date: '3 days ago', exercise: 'Shoulders & Abs', duration: '55m', calories: '380', sets: '20' },
              ].map((workout, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-indigo-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm font-bold uppercase tracking-wide mb-2">{workout.date}</p>
                      <h3 className="text-2xl font-black text-gray-900 mb-3">{workout.exercise}</h3>
                      <div className="flex gap-6">
                        <div>
                          <p className="text-gray-600 text-sm font-semibold">Duration</p>
                          <p className="text-lg font-bold text-gray-900">{workout.duration}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm font-semibold">Sets</p>
                          <p className="text-lg font-bold text-gray-900">{workout.sets}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl px-6 py-4 shadow-lg">
                        <p className="text-white text-sm font-bold uppercase tracking-wide mb-1">Calories</p>
                        <p className="text-3xl font-black text-white">{workout.calories}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
};

export default MemberDashboard;
