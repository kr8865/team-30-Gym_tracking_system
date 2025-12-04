import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Zap, BarChart3, Calendar, Target } from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your weight, strength, and fitness metrics with beautiful animated charts',
      color: 'bg-blue-100'
    },
    {
      icon: Calendar,
      title: 'Attendance',
      description: 'QR-based check-in system and calendar heatmap to visualize your gym consistency',
      color: 'bg-green-100'
    },
    {
      icon: Target,
      title: 'Workout Logger',
      description: 'Log your exercises, sets, reps, and weights for every session',
      color: 'bg-purple-100'
    },
    {
      icon: Users,
      title: 'Personal Training',
      description: 'Book slots with trainers and get personalized workout & diet plans',
      color: 'bg-yellow-100'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Detailed insights into your fitness journey with interactive dashboards',
      color: 'bg-orange-100'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Instant notifications for membership updates, class bookings, and achievements',
      color: 'bg-red-100'
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-4">💪 FitTrack</h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Your Complete Gym Management & Fitness Tracking Platform
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Track workouts, monitor progress, manage memberships, and transform your fitness journey with beautiful visualizations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900"
          >
            Powerful Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${feature.color} rounded-xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2`}
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '10K+', label: 'Active Members' },
              { number: '500+', label: 'Gyms Worldwide' },
              { number: '1M+', label: 'Workouts Logged' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
              >
                <div className="text-4xl font-black text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-black mb-6"
          >
            Ready to Transform Your Fitness?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 text-gray-100"
          >
            Join thousands of fitness enthusiasts using FitTrack today
          </motion.p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Start Your Journey <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-gray-900 text-white text-center">
        <p className="text-gray-400">© 2024 FitTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
