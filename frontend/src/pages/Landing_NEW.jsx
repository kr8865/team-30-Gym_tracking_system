import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Zap, BarChart3, Calendar, Target, Dumbbell, Trophy, Heart } from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your weight, strength, and fitness metrics with beautiful animated charts',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Smart Attendance',
      description: 'QR-based check-in system and calendar heatmap to visualize your gym consistency',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Dumbbell,
      title: 'Workout Logger',
      description: 'Log your exercises, sets, reps, and weights for every training session',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Personal Training',
      description: 'Book slots with trainers and get personalized workout & diet plans',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Detailed insights into your fitness journey with interactive dashboards',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Track milestones, set goals, and celebrate your fitness achievements',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
          <div className="text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-indigo-600 font-semibold text-sm shadow-lg">
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  Welcome to FitTrack
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="text-gray-900">Fitness Journey</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                The complete gym management and personal fitness tracking platform
                <br />
                for members, trainers, and gym owners
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              >
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Sign In
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-12 pt-16"
              >
                {[
                  { number: '10K+', label: 'Active Members' },
                  { number: '500+', label: 'Gyms Worldwide' },
                  { number: '1M+', label: 'Workouts Logged' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to track, manage, and optimize your fitness journey
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 sm:py-32"
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Ready to Transform Your Fitness?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join thousands of members, trainers, and gym owners who trust FitTrack
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 text-lg font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-gray-400">
            © 2024 FitTrack. Built with ❤️ for Hackathon 2024 - Team 30
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
