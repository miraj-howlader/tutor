import EditProduct from '@/components/EditProduct'
import { Button } from '@heroui/react'
import { Boxes, ClipboardList, Package, ShoppingCart, Tag } from 'lucide-react'
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
           <div className=' flex justify-end gap-5'>
            <EditProduct singleProduct={singleProduct}/>
            <Button variant='danger'>Delete Product</Button>
        </div>
          <h1 className="text-3xl font-bold text-gray-800">
            {singleProduct.name}
          </h1>

          <p className="text-2xl font-bold text-violet-600">
            ${singleProduct.price}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {singleProduct.hourly}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {singleProduct.availableDays}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {singleProduct.slog}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {singleProduct.experience}
          </p>

          <div className="space-y-3 text-gray-700">

            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-violet-500" />
              <span>Category: <b>{singleProduct.category}</b></span>
            </div>

            <div className="flex items-center gap-2">
              <Boxes className="w-5 h-5 text-violet-500" />
              <span>Stock: <b>{singleProduct.stock}</b></span>
            </div>

            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-violet-500" />
              <span>Premium Quality Product</span>
            </div>
          </div>

          {/* Buttons (NO onClick in Server Component) */}
          <div className="pt-6 space-y-3">

            {/* Add to Cart (Link to API or client button later) */}
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-3 rounded-2xl font-semibold hover:opacity-90 active:scale-95 transition">
              <ShoppingCart size={18} />
              Add to Order
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage