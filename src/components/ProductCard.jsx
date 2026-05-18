'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      
      {/* Image */}
      <div className="relative overflow-hidden h-56 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h2>

        <p className='capitalize'>{product.category}</p>

        {/* Price */}
        <p className="text-violet-600 font-bold text-xl">
          ${product.hourly}
        </p>

        {/* Button */}
      <Link href={`/tutors/${product._id}`}>
        <button
    
          className="w-full mt-3  cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 active:scale-95 transition"
        >
         Book
        </button>
      </Link>
      </div>
    </div>
  )
}

export default ProductCard