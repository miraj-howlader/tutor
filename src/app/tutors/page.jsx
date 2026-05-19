'use client'

import ProductCard from '@/components/ProductCard'
import { Search, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // 🔎 separate filters
  const [nameSearch, setNameSearch] = useState('')
  const [daysSearch, setDaysSearch] = useState('')

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

  // 🔥 multi filter logic
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      ?.toLowerCase()
      .includes(nameSearch.toLowerCase())

    const daysMatch = product.availableDays
      ?.toLowerCase()
      .includes(daysSearch.toLowerCase())

    return nameMatch && daysMatch
  })

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-10 py-10">

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          All Tutors
        </h1>
        <p className="text-gray-500 mt-2">
          Filter by name and available days
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">

        {/* Name Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

          <input
            type="text"
            placeholder="Search by name"
            className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 bg-white"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
          />
        </div>

        {/* Available Days Search */}
        <input
          type="text"
          placeholder="Search by available days (e.g. Mon, Tue)"
          className="w-full sm:w-72 h-11 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 bg-white"
          value={daysSearch}
          onChange={(e) => setDaysSearch(e.target.value)}
        />
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center py-20">
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
        <div className="text-center py-20 text-gray-500">
          No Tutors Found 😒
        </div>
      )}
    </div>
  )
}

export default AllProducts