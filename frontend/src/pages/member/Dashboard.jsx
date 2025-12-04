import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Dumbbell, TrendingUp, QrCode, Book, Users } from 'lucide-react';
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
    { icon: TrendingUp, label: 'Weight Lost', value: '5 kg', color: 'from-blue-500 to-blue-600' },
    { icon: Dumbbell, label: 'Bench Max', value: '98 kg', color: 'from-red-500 to-red-600' },
    { icon: Calendar, label: 'Streak', value: '12 days', color: 'from-green-500 to-green-600' },
    { icon: Book, label: 'Workouts', value: '45 logged', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
            <h1 className="text-4xl sm:text-5xl font-black mb-2">
              Welcome Back, {currentUser?.email?.split('@')[0]}! 💪
            </h1>
            <p className="text-lg text-gray-100">
              Your fitness dashboard - track every step of your journey
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ translateY: -5 }}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-xl`}
              >
                <Icon className="mb-4" size={32} />
                <p className="text-sm opacity-90 mb-2">{stat.label}</p>
                <p className="text-3xl font-black">{stat.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: QrCode, title: 'Check-In', desc: 'Scan QR at gym' },
            { icon: Dumbbell, title: 'Log Workout', desc: 'Record your session' },
            { icon: Users, title: 'Book Trainer', desc: 'Schedule session' },
          ].map((action, idx) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer"
              >
                <Icon className="text-indigo-600 mx-auto mb-4" size={40} />
                <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.desc}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="flex gap-4 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'progress', label: 'Progress Charts' },
            { id: 'workouts', label: 'My Workouts' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        {activeTab === 'overview' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Your Progress Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Total Calories Burned', value: '45,320 kcal', change: '+12%' },
                  { label: 'Average Session Duration', value: '58 min', change: '+8%' },
                  { label: 'Personal Records', value: '8 broken', change: 'New!' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                    <p className="text-gray-600 text-sm mb-1">{item.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                    <p className="text-sm text-green-600 font-semibold mt-1">{item.change}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'progress' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
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
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Recent Workouts</h2>
            <div className="space-y-4">
              {[
                { date: 'Today', exercise: 'Chest & Triceps', duration: '1h 15m', calories: '450 kcal' },
                { date: 'Yesterday', exercise: 'Back & Biceps', duration: '1h 10m', calories: '420 kcal' },
                { date: '2 days ago', exercise: 'Legs', duration: '1h 30m', calories: '580 kcal' },
              ].map((workout, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-sm">{workout.date}</p>
                      <h3 className="text-lg font-bold">{workout.exercise}</h3>
                      <p className="text-gray-600">{workout.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-indigo-600">{workout.calories}</p>
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
