import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import ProductCard from './ProductCard'

const Featured = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)

  const tutorData = await res.json()

  return (
    <section className="relative overflow-hidden py-16">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600">
              <Sparkles className="h-4 w-4" />
              Top Rated Tutors
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Featured Tutors
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500 md:text-lg">
              Discover highly skilled tutors selected for delivering
              exceptional learning experiences and helping students
              achieve academic success.
            </p>
          </div>

          {/* Button */}
          <Link href="/tutors">
            <Button
              radius="full"
              className="h-12 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-white shadow-lg transition hover:scale-105"
            >
              Explore All Tutors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Tutor Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorData?.map((tutor) => (
            <ProductCard
              key={tutor._id}
              product={tutor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured