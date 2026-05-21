'use client'

import React from 'react'
import { Card } from '@heroui/react'
import { Star } from 'lucide-react'
import { motion } from 'motion/react'

const reviews = [
  {
    name: 'Ayesha Rahman',
    role: 'University Student',
    review:
      'MediQueue helped me find the perfect math tutor quickly. Very smooth system!',
  },
  {
    name: 'Tanvir Hasan',
    role: 'College Student',
    review:
      'Booking sessions is super easy and tutors are very professional.',
  },
  {
    name: 'Nusrat Jahan',
    role: 'IELTS Candidate',
    review:
      'I improved my English skills a lot using MediQueue tutors.',
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
        initial={{opacity:0, x:20}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.5}}
         className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            What Students Say
          </h2>
          <p className="text-gray-500 mt-3">
            Real feedback from our learners
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
         initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0}}
            transition={{ duration: 0.7, delay:0.1 }}
         className="grid md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm mb-4">
                {item.review}
              </p>

              {/* User */}
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-400">
                  {item.role}
                </p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials