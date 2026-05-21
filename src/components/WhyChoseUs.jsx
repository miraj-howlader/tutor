'use client'

import React from 'react'
import { Card } from '@heroui/react'
import { motion } from 'motion/react'
import {
  CheckCircle,
  Clock,
  BookOpen,
  Wallet,
  Shield,
  MonitorPlay,
} from 'lucide-react'

const features = [
  {
    icon: <Shield className="text-cyan-500" />,
    title: 'Verified Tutors',
    desc: 'All tutors are verified and skilled in their subjects.',
  },
  {
    icon: <Clock className="text-cyan-500" />,
    title: 'Flexible Scheduling',
    desc: 'Book sessions anytime based on your availability.',
  },
  {
    icon: <MonitorPlay className="text-cyan-500" />,
    title: 'Online & Offline',
    desc: 'Learn both online and offline as you prefer.',
  },
  {
    icon: <Wallet className="text-cyan-500" />,
    title: 'Affordable Fees',
    desc: 'Choose tutors that fit your budget easily.',
  },
  {
    icon: <BookOpen className="text-cyan-500" />,
    title: 'Smart Learning',
    desc: 'Organized sessions with smooth management system.',
  },
  {
    icon: <CheckCircle className="text-cyan-500" />,
    title: 'Easy Booking',
    desc: 'Simple one-click booking system for students.',
  },
]

const WhyChoose = () => {
  return (
    <section
           
     className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0}}
            transition={{ duration: 0.7 }}
         className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose MediQueue?
          </h2>
          <p className="text-gray-500 mt-3">
            A smarter way to connect students with expert tutors
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
         initial={{ opacity: 0, scale:0.5 }}
            animate={{ opacity: 1, scale:1.0}}
            transition={{ duration: 0.7 }}
         className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose