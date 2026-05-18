'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, BookOpen, Users, Clock } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Find Expert Tutors For Every Subject',
    description:
      'Connect with experienced tutors and improve your learning journey with personalized online classes.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
    icon: <BookOpen className="h-10 w-10 text-cyan-400" />,
  },

  {
    id: 2,
    title: 'Book Learning Sessions Anytime',
    description:
      'Choose your preferred subject, tutor, and available schedule without any booking conflicts.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
    icon: <Clock className="h-10 w-10 text-cyan-400" />,
  },

  {
    id: 3,
    title: 'Build Skills With Smart Online Learning',
    description:
      'Manage your booked classes easily and enjoy a smooth and organized learning experience.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop',
    icon: <Users className="h-10 w-10 text-cyan-400" />,
  },
]

const Banner = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[85vh] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority
              className="object-cover"
            />

           
            <div className="absolute inset-0 bg-black/65" />

          
            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                  <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 backdrop-blur-sm">
                    {slides[current].icon}
                  </div>

                  <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold leading-tight text-white md:text-6xl"
                  >
                    {slides[current].title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
                  >
                    {slides[current].description}
                  </motion.p>

                 
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10"
                  >
                    <Link
                      href="/tutors"
                      className="inline-flex items-center rounded-xl bg-cyan-500 px-7 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-cyan-400"
                    >
                      Explore Tutors
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-cyan-500"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-cyan-500"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all ${
                current === index
                  ? 'w-10 bg-cyan-400'
                  : 'w-3 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner