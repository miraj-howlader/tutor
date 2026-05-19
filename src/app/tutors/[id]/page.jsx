import BookingCard from '@/components/BookingCard'

import { Package, Tag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/single/${id}`,
    { cache: 'no-store' }
  )

  const singleProduct = await res.json()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
       
        {/* Image Section */}
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <Image
            src={singleProduct.image}
            alt={singleProduct.name}
            width={500}
            height={500}
            className="w-full h-[420px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 space-y-5">
         
          <h1 className="text-3xl font-bold text-gray-800">
            Name: {singleProduct.name}
          </h1>

         

          <p className="text-gray-600 leading-relaxed font-bold">
            Hourly: ${singleProduct.hourly}
          </p>

          <p className="text-gray-600 leading-relaxed">
             AvailableDays: {singleProduct.availableDays}
          </p>
          <p className="text-gray-600 leading-relaxed">
            TimeSlot {singleProduct.timeslot}
          </p>
          <p className="text-gray-600 leading-relaxed">
            Slot: {singleProduct.slot}
          </p>
          <p className="text-gray-600 leading-relaxed">
            Session: {singleProduct.session}
          </p>
          <p className="text-gray-600 leading-relaxed">
            Experience: {singleProduct.experience} Years
          </p>
          <p className="text-gray-600 leading-relaxed">
            Location: {singleProduct.location}
          </p>
          <p className="text-gray-600 leading-relaxed">
            Teachingmode: {singleProduct.teachingmode}
          </p>

          <div className="space-y-3 text-gray-700">

            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-violet-500" />
              <span>Category: <b>{singleProduct.category}</b></span>
            </div>

    

            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-violet-500" />
              <span>Premium Quality Tutors</span>
            </div>
          </div>

          {/* Buttons (NO onClick in Server Component) */}
          <div className="pt-6 space-y-3">

            {/* Add to Cart (Link to API or client button later) */}
            
              <BookingCard singleProduct={singleProduct}/>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage