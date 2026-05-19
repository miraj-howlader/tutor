'use client'

import React, { useState } from 'react'
import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import toast from 'react-hot-toast'
import { CalendarPlus, Loader2, User } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation'

const BookingCard = ({ singleProduct }) => {
  const { data: session } = authClient.useSession()
  const router = useRouter()
  const user = session?.user

  const [loading, setLoading] = useState(false)

  const handleBooking = async () => {
    if (!user) {
      toast.error('Please login first')
      return
    }

    setLoading(true)

    try {
      const bookingData = {
        userId: user.id || user._id,
        email: user.email,
        studentName: user.name,
        tutorname: singleProduct?.name,
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        }
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.message || 'Booking failed')
      }

      toast.success('Booking successful 🎉')
      router.push('/my-booked')
    } catch (error) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-lg hover:shadow-xl transition">

      {/* Tutor Info */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {singleProduct?.name}
        </h2>

        <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
          <User size={16} />
          Tutor Booking Card
        </p>
      </div>

      {/* Info Section */}
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-semibold">Category:</span>{' '}
          {singleProduct?.category}
        </p>

        <p>
          <span className="font-semibold">Hourly:</span>{' '}
          ${singleProduct?.hourly}
        </p>

        <p>
          <span className="font-semibold">Slots:</span>{' '}
          {singleProduct?.slot}
        </p>
      </div>

      {/* Button */}
      <Button
        onClick={handleBooking}
        disabled={loading}
        className="mt-5 w-full h-12 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition"
      >
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <CalendarPlus className="w-5 h-5 mr-2" />
            Add To Booking
          </>
        )}
      </Button>
    </div>
  )
}

export default BookingCard