'use client'

import ProductCard from '@/components/ProductCard'
import { Search, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/all`
        )

        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-10 py-10">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          All Tutors
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Explore all trendy tutors
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search tutor..."
            className="w-full h-11 sm:h-12 pl-12 pr-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white shadow-sm text-sm sm:text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Products */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin w-10 h-10 text-gray-500" />
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center py-20">
          <p className="text-base sm:text-xl font-semibold text-gray-500">
            No Tutors Found 😒
          </p>
        </div>
      )}
    </div>
  )
}

export default AllProducts